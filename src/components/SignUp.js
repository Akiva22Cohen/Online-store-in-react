import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import GlobalContextData from "./GlobalContextData";

function SignUp() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();
    const { user, setUser, shopCart, setShopCart, shopFavor, setShopFavor } = useContext(GlobalContextData);

    const onSubmit = (data) => {
        const usersData = JSON.parse(localStorage.getItem('users')) || [];
        const user = {
            id: Date.now(),
            email: data.email,
            name: data.name,
            password: data.password
        };
        const userExist = usersData.find(({ email }) => email === data.email);
        if (!userExist) {
            usersData.push(user);
            localStorage.setItem('users', JSON.stringify(usersData));
            setUser(user);

            const orders = JSON.parse(localStorage.getItem('orders')) || [];
            const order = {
                customerId: user.id,
                arrCart: shopCart,
                arrFavor: shopFavor
            };
            orders.push(order);
            localStorage.setItem('orders', JSON.stringify(order));

            navigate('/');
        } else {
            alert('Email already exists');
        }
    };

    return (
        <div className="d-flex flex-column justify-content-center align-items-center col-10 col-sm-8 col-md-4 mx-auto">
            <p className="title mb-0 w-100">Registration Form</p>

            <form className="form-style w-100" onSubmit={handleSubmit(onSubmit)}>
                <input
                    placeholder="Name"
                    className="form-input"
                    type="text"
                    {...register("name", { required: true, pattern: /[A-Za-z0-9]{3}/ })}
                />
                {errors.name && <span style={{ color: "red" }}>
                    *Name* is mandatory </span>}
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
export default SignUp;