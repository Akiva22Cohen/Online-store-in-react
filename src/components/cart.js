import { useContext } from "react";
import GlobalContextData from "./GlobalContextData";
import CartCard from "./cartCard";

function Cart() {
    const { shopCart } = useContext(GlobalContextData);

    return (
        <div
            className="overflow-auto"
        // style={{ maxHeight: '70vh' }}
        >
            <h2 className="text-center">Shopping Cart</h2>
            {
                (!shopCart.length > 0) &&
                <p className="fs-3">
                    Looks like you didn't add any products to the cart!
                </p>
            }
            <div
                className='d-flex flex-wrap row-cols-md-4 row-cols-sm-3 justify-content-center'
            >
                {
                    shopCart.map(item => <CartCard key={item.id} {...item} />)
                }
            </div>
        </div>
    )
}

export default Cart;