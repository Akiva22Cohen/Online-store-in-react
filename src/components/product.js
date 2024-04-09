import { FaHeart, FaHeartBroken } from "react-icons/fa";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { CgDollar } from "react-icons/cg";
import { LuBadgePercent } from "react-icons/lu";
import { TbCurrencyDollarOff } from "react-icons/tb";
import { Link } from "react-router-dom";
import GlobalContextData from "./GlobalContextData";
import { useContext } from "react";

function Product(props) {
    const { id, title, brand, price, description, thumbnail, discountPercentage, images } = props;

    const { shopCart, setShopCart, shopFavor, setShopFavor } = useContext(GlobalContextData);

    const addCart = () => {
        const fi = shopCart.find(e => e.id === id)
        if (fi === undefined)
            setShopCart(prevPro => [...prevPro, { ...props, amount: 1 }])
        else {
            const temp = shopCart.map(e => {
                if (e.id === id)
                    e.amount++
                return e;
            });
            setShopCart([...temp]);
        }
    }

    const addFavorit = () => {
        const fi = shopFavor.find(e => e.id === id)
        if (fi === undefined)
            setShopFavor(prevPro => [...prevPro, { ...props, favorit: true }])
    }

    const removePriority = () => {
        const fi = shopFavor.find(e => e.id === id)
        if (fi !== undefined) {
            const temp = shopFavor.filter(e => e.id !== id);
            setShopFavor([...temp]);

            if (!(temp.length > 0))
                localStorage.setItem('shopFavor', JSON.stringify(temp));
        }
    }

    return (
        <div className='card m-1 shadow'>
            <p className="position-absolute top-0 z-1 text-success bg-white bg-opacity-75 p-1 rounded shadow border m-1 fw-bolder">-{discountPercentage}<LuBadgePercent /></p>
            <div
                // style={{ height: '40vh' }}
                id={`carouselExampleAutoplaying${id}`} className="carousel slide" data-bs-ride="carousel"
            >
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target={`#carouselExampleAutoplaying${id}`}
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    {
                        images.slice(1, images.length - 1).map((item, i) => {
                            return (
                                <button
                                    key={i}
                                    type="button"
                                    data-bs-target={`#carouselExampleAutoplaying${id}`} data-bs-slide-to={i + 1}
                                    aria-label={`Slide ${i + 2}`}
                                ></button>
                            )
                        })
                    }
                </div>
                <div className="carousel-inner">
                    {
                        images.slice(0, images.length - 1).map((url, i) => {
                            return (
                                <div key={i} className={`carousel-item ${i === 0 && 'active'}`}>
                                    <Link to={`/Product/${id}`}>
                                        <img src={url} className="d-block card-img-top" alt={title} />
                                    </Link>
                                </div>
                            );
                        })
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExampleAutoplaying${id}`} data-bs-slide="prev">
                    <span className="carousel-control-prev-icon bg-black bg-opacity-75 rounded shadow border p-1" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target={`#carouselExampleAutoplaying${id}`} data-bs-slide="next">
                    <span className="carousel-control-next-icon bg-black bg-opacity-75 rounded shadow border p-1" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className='card-body'>
                <h6 className='card-title'>{title}</h6>
                <p className='card-subtitle'>{brand}</p>
                <p className='card-subtitle fw-bold'>
                    <CgDollar className="text-success" />{((100 - Number(discountPercentage)) / 100 * Number(price)).toFixed(2)} / <del><TbCurrencyDollarOff className="text-danger" />{price}</del>
                </p>
                <small className='card-text'>{description}</small>
            </div>
            <div className='btn-group'>
                <button
                    onClick={addCart}
                    className='btn rounded-top-0 btn-outline-success'
                >
                    <MdOutlineAddShoppingCart />
                </button>
                {
                    (shopFavor.find(e => e.id === id) === undefined) ?
                        <button
                            onClick={addFavorit}
                            className='btn rounded-top-0 btn-outline-danger'
                        >
                            <FaHeart />
                        </button> :
                        <button
                            onClick={removePriority}
                            className='btn rounded-top-0 btn-outline-danger'
                        >
                            <FaHeartBroken />
                        </button>
                }
            </div>
        </div>
    )
}

export default Product;