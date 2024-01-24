import React from 'react';
import { FaOpencart } from "react-icons/fa";
import { BsBookmarkHeartFill } from "react-icons/bs";

function Header(props) {
    const { showCart, setShowCart, showFavor, setShowFavor } = props;
    return (
        <div className='text-center'>
            <div className='btn-group m-1 mt-3'>
                <button
                    onClick={() => {
                        setShowCart(!showCart);
                        setShowFavor(false);
                    }}
                    className='btn text-bg-success'
                ><FaOpencart />
                </button>
                <button
                    onClick={() => {
                        setShowFavor(!showFavor);
                        setShowCart(false);
                    }}
                    className='btn text-bg-danger'
                >
                    <BsBookmarkHeartFill />
                </button>
            </div>
        </div>
    )
}

export default Header