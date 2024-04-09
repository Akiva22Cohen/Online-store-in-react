import { LiaStoreAltSolid } from "react-icons/lia";
import { FcHome } from "react-icons/fc";
import { FaOpencart } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { MdOutlineCategory } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";

import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import GlobalContextData from "./GlobalContextData";

function Header1() {
    const { arrAll } = useContext(GlobalContextData);
    let arrCategories = [...new Set(arrAll.map(({ category }) => category))];
    arrCategories.unshift('Recommended');

    return (
        <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
            <div className="container-fluid justify-content-start">
                <Link className="navbar-brand" to=".">
                    <div className="logo icon fs-2 text-success">
                        Online<span className="text-primary">Store</span> <LiaStoreAltSolid className="text-danger" />
                    </div>
                </Link>
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                <div className="me-auto" id="navbarSupportedContent">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <div>
                                <button
                                    className="btn"
                                    type="button"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasExample"
                                    aria-controls="offcanvasExample"
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                                    <div className="offcanvas-header">
                                        <h5 className="offcanvas-title" id="offcanvasExampleLabel">Categories</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div className="offcanvas-body p-0">
                                        <div className="list-group">
                                            <NavLink className={({ isActive, isPending }) => isPending ? "" : isActive ? "list-group-item list-group-item-action active border-0 border-bottom" : "list-group-item list-group-item-action border-0 border-bottom"} to="Products" end>All</NavLink>
                                            {
                                                arrCategories.map((categorie, i) => <NavLink key={i} className={({ isActive, isPending }) => isPending ? "" : isActive ? "list-group-item list-group-item-action active border-0 border-bottom" : "list-group-item list-group-item-action border-0 border-bottom"} to={`Products/${categorie}`}>{categorie}</NavLink>)
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="."
                                aria-current="page"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "nav-link active" : "nav-link"
                                }
                            >
                                <FcHome />
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/Cart"
                                aria-current="page"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "nav-link active text-info" : "nav-link text-warning"
                                }
                            >
                                <FaOpencart />
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/Favorit"
                                aria-current="page"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "nav-link active text-danger" : "nav-link text-danger-emphasis"
                                }
                            >
                                <MdFavorite />
                            </NavLink>
                        </li>
                    </ul>
                </div>
                {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
            </div>
        </nav>
    )
}

export default Header1;