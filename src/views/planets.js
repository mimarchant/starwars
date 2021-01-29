import { useContext } from "react";

import PlanetModal from "../components/planetsmodal";
import { Context } from "../store/appContext";

const Planets = () => {
    const { store, actions } = useContext(Context);
    return (
        <>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-around">
                    <div className="btn btn-sm btn btn-secondary mb-2" id="prev" onClick={() => {
                        actions.getPlanets(store.planets.previous)
                    }}>
                        Prev
                                    </div>
                    <div className="btn btn-sm btn btn-secondary mb-2" id="next" onClick={() => {

                        actions.getPlanets(store.planets.next)
                    }}>
                        Next
                                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <h1 className="title text-center mb-5">PLANET LIST</h1>
                <div className="row">
                    {!!store.planets &&
                        store.planets.results.map((planet, index) => {
                            return (

                                <div className="col-md-4 col-sm-6 card-text mb-5">
                                    <div className="card mx-4" style={{ "width": "18rem", 'maxHeight': '30rem' }}>
                                        <img src={`https://starwars-visualguide.com/assets/img/planets/${(index + 1)+store.c}.jpg`} className="card-img-top img-fluid" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title card-text">{planet.name}</h5>
                                            <p>Climate: {planet.climate}</p>
                                            <p>Population: {planet.population}</p>
                                            <div>
                                                <a href="#" className="btn btn-primary" data-toggle="modal" data-target={"#exampleModal" + index}>Read more...</a>
                                                <PlanetModal index={index} planet={planet} />
                                                <i onClick={() => { actions.addCharacter(planet.name) }} className={store.favorites.includes(planet.name)?"pintado fas fa-heart float-right pt-3":"far fa-heart float-right pt-3 heart"}></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </div>

        </>
    )
}

export default Planets;