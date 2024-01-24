import React, { useContext } from 'react';
import GlobalContext from './GlobalContext';
import { FaHeartBroken } from "react-icons/fa";

function FavorCard(props) {
    const { id, title, brand, price, thumbnail, description } = props.children;
    const { shopFavor, setShopFavor } = useContext(GlobalContext);

    const removePriority = () => {
        const fi = shopFavor.find(e => e.id === id)
        if (fi !== undefined) {
            const temp = shopFavor.filter(e => e.id !== id);
            setShopFavor([...temp]);

            if (!(temp.length > 0))
                localStorage.setItem('shopFavor', JSON.stringify(temp));
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
                <p className='card-text'>{description}</p>
            </div>
            <div className='btn-group btn-group-sm'>
                <button
                    onClick={removePriority}
                    className='btn text-danger'
                >
                    <FaHeartBroken />
                </button>
            </div>
        </div>
    )
}

export default FavorCard;