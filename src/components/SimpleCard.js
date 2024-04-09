import React from 'react';
import { CgDollar } from "react-icons/cg";

export default function SimpleCard(props) {
    const { thumbnail, title, price, description } = props;
    return (
        <div className="card m-1 overflow-auto" style={{ height: "18rem", width: "18rem" }}>
            <img src={thumbnail} className="card-img-top w-100 h-50" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-subtitle"><CgDollar />{price}</h6>
                <p
                    className="card-text"
                    title={`${description}`}
                >
                    {description}
                </p>
            </div>
        </div>
    )
}
