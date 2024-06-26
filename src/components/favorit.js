import { useContext } from "react";
import GlobalContextData from "./GlobalContextData";
import Product from "./product";

function Favorit() {
    const { shopFavor } = useContext(GlobalContextData);

    return (
        <div
            className="overflow-auto"
        // style={{ maxHeight: '70vh' }}
        >
            <h2 className="text-center">Favorites</h2>
            {
                (!shopFavor.length > 0) &&
                <p className="fs-3">
                    You don't seem to have any favorites!
                </p>
            }
            <div
                className='d-flex flex-wrap row-cols-md-4 row-cols-sm-3 justify-content-center'
            >
                {
                    shopFavor.map(item => <Product key={item.id} {...item} />)
                }
            </div>
        </div>
    )
}

export default Favorit;