import React, { useEffect, useState } from 'react';
import Products from './products';
import GlobalContext from './GlobalContext';
import Header from './Header';
import Cart from './cart';
import Favorit from './favorit';

function AppShop() {
    const [shopCart, setShopCart] = useState([]);
    const [shopFavor, setShopFavor] = useState([]);

    const [showCart, setShowCart] = useState(false);
    const [showFavor, setShowFavor] = useState(false);

    useEffect(() => {
        const temp = localStorage.getItem('shopCart');
        const temp1 = localStorage.getItem('shopFavor');

        if (temp !== undefined && temp) {
            setShopCart(JSON.parse(temp));
        }

        if (temp1 !== undefined && temp1) {
            setShopFavor(JSON.parse(temp1));
        }

    }, []);

    useEffect(() => {
        if (shopCart.length > 0)
            localStorage.setItem('shopCart', JSON.stringify(shopCart));

        if (shopFavor.length > 0)
            localStorage.setItem('shopFavor', JSON.stringify(shopFavor));
    }, [shopCart, shopFavor]);

    return (
        <GlobalContext.Provider value={{ shopCart, setShopCart, shopFavor, setShopFavor }}>
            <div className='container'>
                <Header
                    setShowFavor={setShowFavor}
                    showFavor={showFavor}
                    setShowCart={setShowCart}
                    showCart={showCart}
                />
                {
                    showCart &&
                    <Cart />
                }
                {
                    showFavor === true &&
                    <Favorit />
                }
                <Products />
            </div>
        </GlobalContext.Provider>
    )
}

export default AppShop