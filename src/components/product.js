import React, { useContext } from 'react';
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import GlobalContext from './GlobalContext';

function Product(props) {
    const { shopCart, setShopCart, shopFavor, setShopFavor } = useContext(GlobalContext);

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

    const addFavorit = () => {
        const fi = shopFavor.find(e => e.id === id)
        if (fi === undefined)
            setShopFavor(prevPro => [...prevPro, { ...props.children, favorit: true }])
    }

    const { id, title, brand, price, description, thumbnail } = props.children;

    return (
        <div className='card m-1 shadow'>
            <img
                className='card-img-top'
                src={thumbnail}
                alt={title}
            />
            <div className='card-body'>
                <h6 className='card-title'>{title}</h6>
                <p className='card-subtitle'>{brand}</p>
                <p className='card-subtitle'>{price} $</p>
                <small className='card-text'>{description}</small>
            </div>
            <div className='btn-group'>
                <button
                    onClick={addCart}
                    className='btn btn-outline-success rounded-top-0'
                >
                    <MdOutlineAddShoppingCart />
                </button>
                <button
                    onClick={addFavorit}
                    className='btn btn-outline-danger rounded-top-0'
                >
                    <FaHeart />
                </button>
            </div>
        </div>
    )
}

export default Product;