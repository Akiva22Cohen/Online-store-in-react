import { Link } from "react-router-dom";
import GlobalContextData from "./GlobalContextData";
import { useContext } from "react";

import { FaHeart } from "react-icons/fa";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { CgDollar } from "react-icons/cg";
import { LuBadgePercent } from "react-icons/lu";
import { TbCurrencyDollarOff } from "react-icons/tb";
import { BsCartDash } from "react-icons/bs";

function CartCard(props) {
    const { shopCart, setShopCart, shopFavor, setShopFavor } = useContext(GlobalContextData);

    const addCart = () => {
        const fi = shopCart.find(e => e.id === id)
        if (fi === undefined)
            setShopCart(prevPro => [...prevPro, { ...props.children, amount: 1 }])
        else {
            const temp = shopCart.map(e => {
                if (e.id === id)
                    e.amount++
                return e;
            });
            setShopCart([...temp]);
        }
    }

    const reduCart = () => {
        const fi = shopCart.find(e => e.id === id)
        if (fi !== undefined) {
            if (fi.amount > 1) {
                const temp = shopCart.map(e => {
                    if (e.id === id)
                        e.amount--;
                    return e;
                });
                setShopCart([...temp]);
            }
            else {
                const temp = shopCart.filter(e => e.id !== id);
                setShopCart([...temp]);

                if (!(temp.length > 0))
                    localStorage.setItem('shopCart', JSON.stringify(temp));
            }
        }
    }
    const { id, title, brand, price, description, thumbnail, discountPercentage, images, amount } = props;
    return (
        <div className='card m-1 shadow'>
            <p className="position-absolute top-0 z-1 text-success bg-white bg-opacity-75 p-1 rounded shadow border m-1 fw-bolder">-{discountPercentage}<LuBadgePercent /></p>
            <div
                // style={{ height: '40vh' }}
                id={`carouselExampleAutoplaying${id}`} className="carousel slide" data-bs-ride="carousel"
            >
                <div className="carousel-indicators">
                    <button type="button" data-bs-target={`#carouselExampleAutoplaying${id}`} data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    {
                        images.slice(1, images.length - 1).map((item, i) => {
                            return (
                                <button key={i} type="button" data-bs-target={`#carouselExampleAutoplaying${id}`} data-bs-slide-to={i + 1} className="" aria-label={`Slide ${i + 2}`}></button>
                            )
                        })
                    }
                </div>
                <div className="carousel-inner">
                    {
                        images[0] &&
                        <div className="carousel-item active">
                            <Link to={`/Product/${id}`}>
                                <img src={images[0]} className="d-block card-img-top" alt={title} />
                            </Link>
                        </div>
                    }
                    {
                        images.slice(1, images.length - 1).map((url, i) => {
                            return (
                                <div key={i} className="carousel-item">
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
                <p className=''>Amount: {amount}</p>
                <p className=''>Total: {(amount * ((100 - Number(discountPercentage)) / 100 * Number(price))).toFixed(2)} $</p>
                <small className='card-text'>{description}</small>
            </div>
            <div className='btn-group'>
                <button
                    onClick={addCart}
                    className='btn rounded-top-0 btn-outline-success'
                >
                    <MdOutlineAddShoppingCart />
                </button>
                <button
                    onClick={reduCart}
                    className='btn rounded-top-0 btn-outline-danger'
                >
                    <BsCartDash />
                </button>
            </div>
        </div>
    )
}

export default CartCard;