import React, { useContext } from 'react';
import GlobalContext from './GlobalContext';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { BsCartDash } from "react-icons/bs";

function CartCard(props) {
    const { id, title, brand, price, thumbnail, amount } = props.children;

    const { shopCart, setShopCart } = useContext(GlobalContext);

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

    return (
        <div className='card m-1'>
            <img
                className='card-img-top'
                src={thumbnail}
                alt={title}
            />
            <div className='card-body'>
                <h6 className='card-title'>{title}</h6>
                <p className='card-subtitle'>{brand}</p>
                <p className='card-subtitle'>{price} $</p>
                <p className='card-text'>Amount: {amount}</p>
                <p className='card-text'>Total: {amount * price} $</p>
            </div>
            <div className='btn-group btn-group-sm'>
                <button
                    onClick={reduCart}
                    className='btn text-warning-emphasis'
                >
                    <BsCartDash />
                </button>
                <button
                    onClick={addCart}
                    className='btn text-primary'
                >
                    <MdOutlineAddShoppingCart />
                </button>
            </div>
        </div>
    )
}

export default CartCard