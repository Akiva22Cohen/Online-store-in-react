import { useContext } from "react";
import GlobalContextData from "./GlobalContextData";
import { Link } from "react-router-dom";
import SimpleCard from "./SimpleCard";

function Home() {
    const { arrAll } = useContext(GlobalContextData);
    const latestProducts = [{ ...arrAll[0] }, { ...arrAll[6] }, { ...arrAll[11] }, { ...arrAll[16] }];
    return (
        <div
            style={{ maxHeight: '80vh' }}
            className="overflow-auto">
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
                                <div key={i} className={`carousel-item w-100 h-100 ${i === 0 && 'active'}`}>
                                    <img src={thumbnail} className="d-block w-100 h-100" alt={arrAll[i].title} />
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
            <div className="mt-3">
                <h3>Latest products:</h3>
                {
                    (arrAll[0]) &&
                    <div className="d-flex flex-wrap justify-content-center">
                        {
                            latestProducts.map(item => {
                                return (
                                    <Link key={item.id} to={`Product/${item.id}`}>
                                        <SimpleCard {...item} />
                                    </Link>
                                );
                            })
                        }
                    </div>
                }
            </div>
        </div >
    )
}

export default Home;