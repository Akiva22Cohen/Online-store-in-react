import React, { useContext } from 'react';
import GlobalContextData from './GlobalContextData';
import { TbDoorExit } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';

export default function Profile() {
    const { user, setUser, shopCart, setShopCart, shopFavor, setShopFavor } = useContext(GlobalContextData);
    const navigate = useNavigate();

    return (
        <div>
            <div>
                <h3>Name: {user.name}</h3>
                <h4>Email: {user.email}</h4>
            </div>
            <button
                className='btn btn-danger'
                onClick={() => {
                    setShopCart([]);
                    setShopFavor([]);
                    setUser();
                    navigate('/');
                }}
            >
                Log Out <TbDoorExit />
            </button>
        </div>
    )
}
