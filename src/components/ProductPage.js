import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import GlobalContextData from "./GlobalContextData";

import { FaHeart } from "react-icons/fa";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { CgDollar } from "react-icons/cg";
import { LuBadgePercent } from "react-icons/lu";
import { TbArrowBackUp, TbCurrencyDollarOff } from "react-icons/tb";

function ProductPage() {
    const { ProductId } = useParams();
    const { arrAll, shopCart, setShopCart, shopFavor, setShopFavor } = useContext(GlobalContextData);
    const { id, title, brand, price, description, thumbnail, discountPercentage, images, category } = arrAll.find(item => item.id === Number(ProductId)) || {};

    const ovj = { ...arrAll.find(item => item.id === Number(ProductId)) }

    const addCart = () => {
        const fi = shopCart.find(e => e.id === id)
        if (fi === undefined)
            setShopCart(prevPro => [...prevPro, { ...ovj, amount: 1 }])
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
            setShopFavor(prevPro => [...prevPro, { ...ovj, favorit: true }])
    }

    return (
        <>
            {
                (arrAll[0]) &&
                <div
                    style={{ maxHeight: '70vh' }}
                    className='border rounded shadow d-flex flex-wrap justify-content-center overflow-auto m-2 p-2'
                >
                    <div
                        style={{ height: '40vh' }}
                        id={`carouselExampleAutoplaying${id}`} className="carousel slide rounded border shadow col-12 col-sm-10 col-md-8" data-bs-ride="carousel"
                    >
                        <p className="position-absolute top-0 z-1 text-success bg-white bg-opacity-75 p-1 rounded shadow border m-1 fw-bolder">-{discountPercentage}<LuBadgePercent /></p>
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
                        <div className="carousel-inner rounded w-100 h-100">
                            <div className="carousel-item active w-100 h-100">
                                <img src={images[0]} className="d-block rounded w-100 h-100" alt={title} />
                            </div>
                            {
                                images.slice(1, images.length - 1).map((url, i) => {
                                    return (
                                        <div key={i} className="carousel-item w-100 h-100">
                                            <img src={url} className="d-block rounded w-100 h-100" alt={title} />
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
                    <div
                        className="rounded border shadow d-flex justify-content-between align-content-center align-items-center col-md-auto col-12 col-sm-10 col-md-8 p-2 m-2"
                    >
                        <div className=''>
                            <h6 className=''>{title}</h6>
                            <p className=''>{brand}</p>
                            <p className='fw-bold'>
                                For <CgDollar className="text-success" />{((100 - Number(discountPercentage)) / 100 * Number(price)).toFixed(2)}
                                <br />
                                instead of <del><TbCurrencyDollarOff className="text-danger" />{price}</del>
                            </p>
                            <small className=''>{description}</small>
                        </div>
                        <div className='btn-group-lg btn-group-vertical'>
                            <button
                                onClick={addCart}
                                className='btn btn-outline-success rounded-bottom-0'
                            >
                                <MdOutlineAddShoppingCart />
                            </button>
                            <button
                                onClick={addFavorit}
                                className='btn btn-outline-danger rounded-top-0 rounded-bottom'
                            >
                                <FaHeart />
                            </button>
                            {/* <Link className="fs-3" to={`/Products/${category}`}><TbArrowBackUp /></Link> */}
                        </div>
                    </div>
                </div >
            }
        </>
    )
}

export default ProductPage;