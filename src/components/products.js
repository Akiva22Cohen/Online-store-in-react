import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import GlobalContextData from "./GlobalContextData";
import Product from "./Product";
import NoPage from "./NoPage";

function Products() {
    const { category } = useParams();
    const { arrAll } = useContext(GlobalContextData);

    let arrCategories = [...new Set(arrAll.map(({ category }) => category))];
    arrCategories.unshift('Recommended');
    const f = arrCategories.find(item => item === category) !== undefined;
    const [arrRecommended, setArrRecommended] = useState([]);
    useEffect(() => {
        if (arrAll[0])
            setArrRecommended([{ ...arrAll[21] }, { ...arrAll[26] }, { ...arrAll[31] }, { ...arrAll[36] }, { ...arrAll[41] }]);
    }, [arrAll]);

    return (
        <div
            className="overflow-auto"
            // style={{ maxHeight: '70vh' }}
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
                {
                    category === 'Recommended' &&
                    arrRecommended[0] && arrRecommended.map(item => <Product key={item.id} {...item} />)
                }
            </div>
        </div>
    )
}

export default Products;