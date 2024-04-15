import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalContextData from './components/GlobalContextData';
import Layout from './components/Layout';
import Home from './components/Home';
import Products from './components/Products';
import ProductPage from './components/ProductPage';
import Favorit from './components/Favorit';
import Cart from './components/Cart';
import NoPage from './components/NoPage';
import Connection from './components/Connection';
import Profile from './components/Profile';

function App() {
  const [arrAll, setArrAll] = useState([]);

  const [shopCart, setShopCart] = useState([]);
  const [shopFavor, setShopFavor] = useState([]);

  const [user, setUser] = useState();

  useEffect(() => {
    const temp = localStorage.getItem('shopCart');
    const temp1 = localStorage.getItem('shopFavor');
    const usersData = JSON.parse(localStorage.getItem('users')) || [];
    const connectUser = usersData.find(({ logIn }) => logIn);

    if (connectUser)
      setUser(connectUser);

    if (temp !== undefined && temp) {
      setShopCart(JSON.parse(temp));
    }

    if (temp1 !== undefined && temp1) {
      setShopFavor(JSON.parse(temp1));
    }

  }, []);

  useEffect(() => {
    if (shopCart.length > 0)
      localStorage.setItem('shopCart', JSON.stringify(shopCart));

    if (shopFavor.length > 0)
      localStorage.setItem('shopFavor', JSON.stringify(shopFavor));

    if (user) {
      const orders = JSON.parse(localStorage.getItem('orders'));
      const newOrder = orders.map(order => {
        if (order.customerId === user.id) {
          order.arrCart = shopCart;
          order.arrFavor = shopFavor;
        }
        return order;
      });
      localStorage.setItem('orders', JSON.stringify(newOrder));
    }
  }, [shopCart, shopFavor]);

  useEffect(() => {
    fetchDataAll();
  }, []);

  const fetchDataAll = async () => {
    const response = await fetch(`https://dummyjson.com/products?skip=0&limit=100`);
    const data = await response.json();
    setArrAll([...data.products]);
  }

  return (
    <BrowserRouter>
      <GlobalContextData.Provider value={{ arrAll, shopCart, setShopCart, shopFavor, setShopFavor, user, setUser }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path='connection' element={<Connection />} />

            <Route path='Profile' element={<Profile />} />

            <Route path="Products" element={<Products />}>
              <Route path=":category" element={<Products />} />
            </Route>

            <Route path="Product">
              <Route path=":ProductId" element={<ProductPage />} />
            </Route>

            <Route path="Cart" element={<Cart />} />

            <Route path="Favorit" element={<Favorit />} />

            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </GlobalContextData.Provider>
    </BrowserRouter>
  );
}

export default App;
