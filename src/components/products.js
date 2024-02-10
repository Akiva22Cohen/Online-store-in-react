import { useParams } from "react-router-dom";
import { useContext } from "react";

import GlobalContextData from "./GlobalContextData";
import Product from "./Product";
import NoPage from "./NoPage";

function Products() {
    const { category } = useParams();
    const { arrAll } = useContext(GlobalContextData);
    const f = arrAll.find(item => item.category === category) !== undefined;

    return (
        <div
            className="overflow-auto"
            style={{ maxHeight: '70vh' }}
        >
            <h2 className="text-center">{f && category}</h2>
            <div
                className='d-flex flex-wrap row-cols-md-4 row-cols-sm-3 justify-content-center'
            >
                {
                    (category && category !== undefined) ?
                        (f) ?
                            arrAll.filter(item => item.category === category).map(item => <Product key={item.id} {...item} />) :
                            <NoPage /> :
                        arrAll.map(item => <Product key={item.id} {...item} />)
                }
            </div>
        </div>
    )
}

export default Products;