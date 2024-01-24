import React, { useContext } from 'react'
import GlobalContext from './GlobalContext';
import FavorCard from './favorCard';

function Favorit() {
    const { shopFavor } = useContext(GlobalContext);

    return (
        <div className='text-bg-danger rounded m-1'>
            <h2 className='text-center'>Favorites</h2>
            <div className='d-flex flex-wrap row-cols-md-6 row-cols-sm-5 justify-content-center align-content-center'>
                {
                    shopFavor.map(e => <FavorCard key={e.id}>{e}</FavorCard>)
                }
                {
                    (!shopFavor.length > 0) &&
                    <h6>There are no favorites...</h6>
                }
            </div>
        </div>
    )
}

export default Favorit