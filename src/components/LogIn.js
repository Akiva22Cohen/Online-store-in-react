import React, { useContext, useId } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import GlobalContextData from "./GlobalContextData";

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();
    const { setUser, shopCart, setShopCart, shopFavor, setShopFavor } = useContext(GlobalContextData);

    const onSubmit = (data) => {
        const usersData = JSON.parse(localStorage.getItem('users')) || [];
        const user = usersData.find(({ email }) => email === data.email);
        if (user) { // getItem can return actual value or null
            if (user.password === data.password) {
                user.logIn = true;
                setUser(user);
                const newUsersData = usersData.map(item => {
                    if (item.id === user.id)
                        item.logIn = true;
                    return item;
                });
                localStorage.setItem('users', JSON.stringify(newUsersData));
                console.log(user.name + " You Are Successfully Logged In");

                const orders = JSON.parse(localStorage.getItem('orders'));
                const newOrder = {
                    customerId: user.id,
                    arrCart: shopCart,
                    arrFavor: shopFavor,
                };
                if (orders) {
                    const order = orders.find(({ customerId }) => customerId === user.id);
                    if (order && order.arrCart instanceof Array && order.arrFavor instanceof Array) {
                        const { arrCart, arrFavor } = order;
                        const newArrCart = shopCart.reduce((acc, obj) => {
                            if (!acc.some(item => item.id === obj.id)) {
                                acc.push(obj);
                            }
                            return acc;
                        }, [...arrCart]);

                        const newArrFavor = shopFavor.reduce((acc, obj) => {
                            if (!acc.some(item => item.id === obj.id)) {
                                acc.push(obj);
                            }
                            return acc;
                        }, [...arrFavor]);

                        setShopCart(newArrCart);
                        setShopFavor(newArrFavor);
                    } else {
                        orders.push(newOrder);
                        localStorage.setItem('orders', JSON.stringify(orders));
                    }
                } else {
                    localStorage.setItem('orders', JSON.stringify([newOrder]));
                }

                navigate('/');
            } else {
                console.log("Email or Password is not matching with our record");
            }
        } else {
            console.log("Email or Password is not matching with our record");
        }
    };

    return (
        <div className="d-flex flex-column justify-content-center align-items-center col-10 col-sm-8 col-md-4 mx-auto">
            <p className="title mb-0 w-100">Login Form</p>

            <form className="form-style w-100" onSubmit={handleSubmit(onSubmit)}>
                <input
                    placeholder="Email"
                    className="form-input"
                    type="email"
                    {...register("email", { required: true })}
                />
                {errors.email && <span style={{ color: "red" }}>
                    *Email* is mandatory </span>}
                <input
                    placeholder="Password"
                    className="form-input"
                    type="password"
                    {...register("password", { required: true, minLength: 6, maxLength: 12 })}
                />
                {errors.password && <span style={{ color: "red" }}>
                    *Password* is mandatory </span>}
                <input
                    className="form-input"
                    type={"submit"}
                    style={{ backgroundColor: "#a1eafb" }}
                />
            </form>
        </div>
    );
}
export default Login;
