import { LiaStoreAltSolid } from "react-icons/lia";
import { FcHome } from "react-icons/fc";
import { FaOpencart } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { MdOutlineCategory } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";

import { Link, NavLink } from "react-router-dom";

function Header1() {
    return (
        <div
            style={{ maxHeight: '20vh' }}
            className="bg-secondary-subtle container-fluid"
        >
            <div className="container p-md-2 p-sm-1 p-0">
                <div className="logo icon fs-2 text-success">
                    Online<span className="text-primary">Store</span> <LiaStoreAltSolid className="text-danger" />
                </div>
                <nav className="d-flex flex-wrap justify-content-around align-items-center align-content-center fs-3 ">
                    <div className="icon icon-link icon-link-hover">
                        <NavLink
                            to="."
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "rounded-5 border-5 shadow-lg text-bg-dark p-1 border-danger" : ""
                            }
                        >
                            <FcHome />
                        </NavLink>
                    </div>
                    <div className="icon icon-link icon-link-hover">
                        <div className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <MdOutlineCategory />
                            </a>
                            <ul
                                onChange={e => console.log(e.targetget.value)}
                                className="dropdown-menu p-1 text-bg-dark"
                            >
                                <li value={''}>                 <NavLink className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-warning" : "text-white link-offset-1-hover link-opacity-75-hover link-underline-opacity-50-hover hover"} to="Products" end>All</NavLink></li>
                                <li value={'smartphones'}>      <NavLink className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-warning" : "text-white link-offset-1-hover link-opacity-75-hover link-underline-opacity-50-hover hover"} to="Products/smartphones">smartphones</NavLink></li>
                                <li value={'laptops'}>          <NavLink className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-warning" : "text-white link-offset-1-hover link-opacity-75-hover link-underline-opacity-50-hover hover"} to="Products/laptops">laptops</NavLink></li>
                                <li value={'fragrances'}>       <NavLink className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-warning" : "text-white link-offset-1-hover link-opacity-75-hover link-underline-opacity-50-hover hover"} to="Products/fragrances">fragrances</NavLink></li>
                                <li value={'skincare'}>         <NavLink className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-warning" : "text-white link-offset-1-hover link-opacity-75-hover link-underline-opacity-50-hover hover"} to="Products/skincare">skincare</NavLink></li>
                                <li value={'groceries'}>        <NavLink className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-warning" : "text-white link-offset-1-hover link-opacity-75-hover link-underline-opacity-50-hover hover"} to="Products/groceries">groceries</NavLink></li>
                                <li value={'home-decoration'}>  <NavLink className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-warning" : "text-white link-offset-1-hover link-opacity-75-hover link-underline-opacity-50-hover hover"} to="Products/home-decoration">home-decoration</NavLink></li>
                                <li value={'furniture'}>        <NavLink className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-warning" : "text-white link-offset-1-hover link-opacity-75-hover link-underline-opacity-50-hover hover"} to="Products/furniture">furniture</NavLink></li>
                                <li value={'tops'}>             <NavLink className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-warning" : "text-white link-offset-1-hover link-opacity-75-hover link-underline-opacity-50-hover hover"} to="Products/tops">tops</NavLink></li>
                                <li value={'womens-dresses'}>   <NavLink className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-warning" : "text-white link-offset-1-hover link-opacity-75-hover link-underline-opacity-50-hover hover"} to="Products/womens-dresses">womens-dresses</NavLink></li>
                                <li value={'womens-watches'}>   <NavLink className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-warning" : "text-white link-offset-1-hover link-opacity-75-hover link-underline-opacity-50-hover hover"} to="Products/womens-watches">womens-watches</NavLink></li>
                                <li value={'womens-bags'}>      <NavLink className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-warning" : "text-white link-offset-1-hover link-opacity-75-hover link-underline-opacity-50-hover hover"} to="Products/womens-bags">womens-bags</NavLink></li>
                                <li value={'womens-jewellery'}> <NavLink className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-warning" : "text-white link-offset-1-hover link-opacity-75-hover link-underline-opacity-50-hover hover"} to="Products/womens-jewellery">womens-jewellery</NavLink></li>
                                <li value={'mens-shirts'}>      <NavLink className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-warning" : "text-white link-offset-1-hover link-opacity-75-hover link-underline-opacity-50-hover hover"} to="Products/mens-shirts">mens-shirts</NavLink></li>
                                <li value={'sunglasses'}>       <NavLink className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-warning" : "text-white link-offset-1-hover link-opacity-75-hover link-underline-opacity-50-hover hover"} to="Products/sunglasses">sunglasses</NavLink></li>
                                <li value={'automotive'}>       <NavLink className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-warning" : "text-white link-offset-1-hover link-opacity-75-hover link-underline-opacity-50-hover hover"} to="Products/automotive">automotive</NavLink></li>
                                <li value={'motorcycle'}>       <NavLink className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-warning" : "text-white link-offset-1-hover link-opacity-75-hover link-underline-opacity-50-hover hover"} to="Products/motorcycle">motorcycle</NavLink></li>
                                <li value={'lighting'}>         <NavLink className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-warning" : "text-white link-offset-1-hover link-opacity-75-hover link-underline-opacity-50-hover hover"} to="Products/lighting">lighting</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className="icon icon-link icon-link-hover">
                        <NavLink
                            to="/Cart"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "rounded-5 border-5 shadow-lg text-bg-dark p-1 border-danger" : "text-primary"
                            }
                        >
                            <FaOpencart />
                        </NavLink>
                    </div>
                    <div className="icon icon-link icon-link-hover">
                        <NavLink
                            to="/Favorit"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "rounded-5 border-5 shadow-lg text-bg-dark p-1 border-danger" : "text-danger"
                            }
                        >
                            <MdFavorite />
                        </NavLink>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header1;