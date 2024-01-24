import React, { useContext } from 'react';
import GlobalContext from './GlobalContext';
import CartCard from './cartCard';

function Cart() {
    const { shopCart } = useContext(GlobalContext);

    return (
        <div className='text-bg-success rounded m-1'>
            <h2 className='text-center'>Shopping Cart</h2>
            <div className='d-flex flex-wrap row-cols-md-6 row-cols-sm-5 justify-content-center align-content-center'>
                {
                    shopCart.map(e => <CartCard key={e.id}>{e}</CartCard>)
                }
                {
                    (!shopCart.length > 0) &&
                    <h6>There are no products in the shopping cart...</h6>
                }
            </div>
        </div>
    )
}

export default Cart;