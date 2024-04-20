import React, { useContext, useState } from 'react';
import GlobalContextData from './GlobalContextData';

import { TbDoorExit } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import { LiaUserEditSolid } from "react-icons/lia";
import { FiUserX } from "react-icons/fi";
import SignUp from './SignUp';
import ImageDisplay from './ImageDisplay';

export default function Profile() {
    const { user, setUser, shopCart, setShopCart, shopFavor, setShopFavor } = useContext(GlobalContextData);
    const navigate = useNavigate();

    const [edit, setEdit] = useState(false);

    const Temp = () => {
        setUser();
        setShopCart([]);
        setShopFavor([]);
        localStorage.setItem('shopCart', JSON.stringify([]));
        localStorage.setItem('shopFavor', JSON.stringify([]));
        navigate('/');
    }

    const DeleteAccount = () => {
        const usersData = JSON.parse(localStorage.getItem('users')) || [];
        const newUsersData = usersData.filter(item => item.id !== user.id);
        localStorage.setItem('users', JSON.stringify(newUsersData));

        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        const newOders = orders.filter(item => item.customerId !== user.id);
        localStorage.setItem('orders', JSON.stringify(newOders));

        Temp();
    }

    return (
        <div>
            <div className='mt-2'>
                <ImageDisplay />
            </div>
            {
                edit ?
                    <div className='my-3'>
                        <SignUp {...{ edit, setEdit }} />
                    </div> :
                    user &&
                    <div>
                        <h3>Name: {user.name}</h3>
                        <h4>Email: {user.email}</h4>
                    </div>
            }
            <div className='btn-group flex-wrap'>
                <button
                    onClick={() => setEdit(!edit)}
                    className='btn btn-info'
                >
                    Edit profile <LiaUserEditSolid />
                </button>
                <button
                    className='btn btn-warning'
                    onClick={() => {
                        const usersData = JSON.parse(localStorage.getItem('users')) || [];
                        const newUsersData = usersData.map(item => {
                            if (item.id === user.id)
                                item.logIn = false;
                            return item;
                        });
                        localStorage.setItem('users', JSON.stringify(newUsersData));
                        Temp();
                    }}
                >
                    Log Out <TbDoorExit />
                </button>
                {/* <button
                    onClick={DeleteAccount}
                    className='btn btn-danger'
                >
                    Account deletion <FiUserX />
                </button> */}
                <button type="button" className="btn btn-danger rounded-end" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Account deletion <FiUserX />
                </button>
                <div
                    className="modal fade"
                    id="staticBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabIndex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content text-bg-dark">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                Are you sure you want to delete the user account?
                                <br />
                                The account, orders and the favorites you saved <span className='text-bg-danger px-1 rounded'>will be permanently deleted!</span>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button
                                    onClick={DeleteAccount}
                                    type="button"
                                    className="btn btn-primary"
                                    data-bs-dismiss="modal"
                                >
                                    Understood
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
