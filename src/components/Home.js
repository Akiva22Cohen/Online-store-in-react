import { useContext } from "react";
import GlobalContextData from "./GlobalContextData";
import { Link } from "react-router-dom";

function Home() {
    const { arrAll } = useContext(GlobalContextData);

    return (
        <div style={{ maxHeight: '70vh' }} className="overflow-auto">
            <div
                style={{ height: '40vh' }}
                id="carouselExampleAutoplaying" className="carousel slide mx-auto mt-2 col-12 col-sm-10 col-md-8" data-bs-ride="carousel"
            >
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    {
                        arrAll.slice(1, arrAll.length - 1).map((item, i) => {
                            return (
                                <button key={i} type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to={i + 1} className="" aria-label={`Slide ${i + 2}`}></button>
                            )
                        })
                    }
                </div>
                <div className="carousel-inner w-100 h-100 rounded shadow border">
                    {
                        arrAll.slice(0, arrAll.length - 1).map(({ thumbnail, title, description }, i) => {
                            return (
                                <div key={i} className={`carousel-item w-100 h-100 ${i == 0 && 'active'}`}>
                                    <img src={thumbnail} className="d-block w-100 h-100" alt={arrAll[0].title} />
                                    <div className="carousel-caption d-none d-md-block bg-black bg-opacity-50 rounded shadow p-1">
                                        <h5>{title}</h5>
                                        <p>{description}</p>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon bg-black bg-opacity-75 rounded shadow border p-1" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon bg-black bg-opacity-75 rounded shadow border p-1" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {
                (arrAll[0]) &&
                <div className="d-flex flex-wrap justify-content-center align-content-center align-items-center m-1 border shadow rounded p-2 bg-body-tertiary">
                    <div className="position-relative border shadow rounded p-2 m-1 bg-dark round-img-container">
                        <Link to="Products/laptops">
                            <img className="round-img" src="https://i.pinimg.com/564x/09/06/77/090677774cefa9cf65a41252d9c2e1d3.jpg" alt="Laptops" />
                        </Link>
                        <p className="position-absolute top-50 text-info fw-bolder z-1 fs-5">Laptops</p>
                    </div>
                    <div className="position-relative border shadow rounded p-2 m-1 bg-dark round-img-container">
                        <Link to="Products/mens-shirts">
                            <img className="round-img" src="https://i.pinimg.com/564x/9b/a1/ec/9ba1ecd61798f8412ecacdbcbeb550e8.jpg" alt="Men's shirts" />
                        </Link>
                        <p className="position-absolute top-50 text-warning fw-bolder z-1 fs-5">Men's shirts</p>
                    </div>
                    <div className="position-relative border shadow rounded p-2 m-1 bg-dark round-img-container">
                        <Link to={`Product/${arrAll[31].id}`}>
                            <img className="round-img" src={arrAll[31].thumbnail} alt={arrAll[31].title} />
                        </Link>
                        <p className="position-absolute top-50 text-danger fw-bolder z-1 fs-5">{arrAll[31].title}</p>
                    </div>
                    <div className="position-relative border shadow rounded p-2 m-1 bg-dark round-img-container">
                        <Link to={`Product/${arrAll[40].id}`}>
                            <img className="round-img" src={arrAll[40].thumbnail} alt={arrAll[40].title} />
                        </Link>
                        <p className="position-absolute top-50 text-success fw-bolder z-1 fs-5">{arrAll[40].title}</p>
                    </div>
                </div>
            }
        </div >
    )
}

export default Home;