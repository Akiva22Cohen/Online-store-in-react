import React, { useEffect, useState } from 'react';
import Product from './product';
import { FcSearch } from "react-icons/fc";

function Products() {
    const [arrAll, setArrAll] = useState([]);
    const [arr, setArr] = useState([]);
    const [num, setNum] = useState(0);

    const [categories, setCategories] = useState([]);
    const [selectCategorie, setSelectCategorie] = useState('All');

    const [getSearch, setSearch] = useState([]);
    const [selectSearch, setSelectSearch] = useState('');

    const [getSort, setSort] = useState([]);
    const [getSort2, setSort2] = useState([]);
    const [selectSort, setSelectSort] = useState('Regular');

    const sortCategories = (c) => {
        let temp;
        if (c === 'All')
            temp = [...arrAll];
        else
            temp = arrAll.filter(e => e.category === c);
        setCategories([...temp]);

        sortSearch(selectSearch, [...temp]);
    }

    const sortSearch = (c, ar) => {
        const temp = ar.filter(e => e.brand.includes(c) || e.title.includes(c));
        setSearch([...temp]);

        sortArr(selectSort, [...temp]);
    }


    const sortArr = (c, ar) => {
        let temp;
        if (c === 'highest')
            temp = ar.slice().sort((a, b) => b.price - a.price);
        else if (c === 'lowest')
            temp = ar.slice().sort((a, b) => a.price - b.price);
        else
            temp = [...ar];
        setSort([...temp]);
    }

    const sortArr2 = (c, ar) => {
        let temp;
        if (c === 'highest')
            temp = ar.slice().sort((a, b) => b.price - a.price);
        else if (c === 'lowest')
            temp = ar.slice().sort((a, b) => a.price - b.price);
        else
            temp = [...ar];
        setSort2([...temp]);
    }

    useEffect(() => {
        fetchData();
    }, [num]);

    useEffect(() => {
        sortCategories(selectCategorie);
    }, [arrAll]);

    useEffect(() => {
        fetchDataAll();
    }, []);

    const fetchData = async () => {
        const response = await fetch(`https://dummyjson.com/products?skip=${num}&limit=9`);
        const data = await response.json();

        const temp = data.products.filter(e => arr.find(h => h.id === e.id) === undefined);
        setArr([...arr, ...temp]);
        sortArr2(selectSort, [...arr, ...temp]);
    }

    const fetchDataAll = async () => {
        const response = await fetch(`https://dummyjson.com/products?skip=0&limit=100`);
        const data = await response.json();
        setArrAll([...data.products]);
    }

    return (
        <div>
            <header
            // className='d-flex flex-wrap justify-content-center align-content-center align-items-center'
            >
                <h6 className='text-center'>
                    A number of items: {
                        (selectSearch === '' && selectCategorie === 'All') ? arr.length : getSort && getSort.length
                    }
                </h6>
                <form
                    className='d-flex flex-wrap justify-content-center align-content-center align-items-center m-1'
                >
                    <select
                        onChange={e => {
                            setSelectSort(e.target.value);
                            sortArr(e.target.value, getSearch);
                            sortArr2(e.target.value, arr);
                        }}
                        value={selectSort}
                        className='m-1 rounded'
                        name=''
                    >
                        <option value={'Regular'}>Regular</option>
                        <option value={'lowest'}>Price from lowest to highest</option>
                        <option value={'highest'}>Price from highest to lowest</option>
                    </select>
                    <div
                        className='d-flex border rounded justify-content-center align-content-center align-items-center'
                    >
                        <input
                            onChange={e => {
                                setSelectSearch(e.target.value);
                                sortSearch(e.target.value, categories);
                            }}
                            value={selectSearch}
                            className='border-0 m-1'
                            placeholder='Search...'
                            type='text'
                        />
                        <FcSearch />
                    </div>
                    <select
                        onChange={e => {
                            setSelectCategorie(e.target.value);
                            sortCategories(e.target.value);
                        }}
                        value={selectCategorie}
                        className='m-1 rounded'
                        name=''
                    >
                        <option value={'All'}>All</option>
                        <option value={'smartphones'}>smartphones</option>
                        <option value={'laptops'}>laptops</option>
                        <option value={'fragrances'}>fragrances</option>
                        <option value={'skincare'}>skincare</option>
                        <option value={'groceries'}>groceries</option>
                        <option value={'home-decoration'}>home-decoration</option>
                        <option value={'furniture'}>furniture</option>
                        <option value={'tops'}>tops</option>
                        <option value={'womens-dresses'}>womens-dresses</option>
                        <option value={'womens-watches'}>womens-watches</option>
                        <option value={'womens-bags'}>womens-bags</option>
                        <option value={'womens-jewellery'}>womens-jewellery</option>
                        <option value={'mens-shirts'}>mens-shirts</option>
                        <option value={'sunglasses'}>sunglasses</option>
                        <option value={'automotive'}>automotive</option>
                        <option value={'motorcycle'}>motorcycle</option>
                        <option value={'lighting'}>lighting</option>
                    </select>
                </form>
            </header>
            <div
                className='d-flex flex-wrap row-cols-md-4 row-cols-sm-3 justify-content-center align-content-center'
            >
                {
                    ((selectSearch === '' && selectCategorie === 'All') && arr) ?
                        getSort2.map(e => <Product key={e.id}>{e}</Product>) :
                        (getSort) &&
                        getSort.map(e => <Product key={e.id}>{e}</Product>)
                }
            </div>
            <div className='text-center'>
                {
                    ((arr.length < 100) && (selectSearch === '' && selectCategorie === 'All')) ?
                        <button
                            onClick={() => setNum(num + 9)}
                            className='fs-3 m-3 rounded shadow border'
                        >
                            Add more...
                        </button> :
                        (selectSearch === '' && selectCategorie === 'All') &&
                        <p className='fs-3'>There are no more items in the store...</p>
                }
            </div>
            <h6 className='text-center'>
                A number of items: {
                    (selectSearch === '' && selectCategorie === 'All') ? arr.length : getSort && getSort.length
                }
            </h6>
        </div>
    )
}

export default Products