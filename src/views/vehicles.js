import { useContext } from "react";
import VehicleModal from "../components/vehiclesmodal";


import { Context } from "../store/appContext";

const Vehicles = () => {
    const { store, actions } = useContext(Context);
    return (
        <>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-around">
                    <div className="btn btn-sm btn btn-secondary mb-2" id="prev" onClick={() => {
                        actions.getVehicles(store.vehicles.previous)}}>
                        Prev
                    </div>
                    <div className="btn btn-sm btn btn-secondary mb-2" id="next" onClick={() => {

                        actions.getVehicles(store.vehicles.next)
                    }}>
                        Next
                                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <h1 className="title text-center mb-5">VEHICLE LIST</h1>
                <div className="row">
                    {!!store.vehicles &&
                        store.vehicles.results.map((vehicle, index) => {
                            return (

                                <div className="col-md-4 col-sm-6 card-text mb-5">
                                    <div className="card mx-4" style={{ "width": "18rem", 'maxHeight': '30rem' }}>
                                        <img src={`https://starwars-visualguide.com/assets/img/vehicles/${(index + 1) + store.c}.jpg`} className="card-img-top img-fluid" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title card-text">{vehicle.name}</h5>
                                            {/* <p>Climate: {planet.climate}</p>
                                            <p>Population: {planet.population}</p> */}
                                            <div>
                                                <a href="#" className="btn btn-primary" data-toggle="modal" data-target={"#exampleModal" + index}>Read more...</a>
                                                <VehicleModal index={index} vehicle={vehicle} />
                                                <i onClick={() => { actions.addCharacter(vehicle.name) }} className={store.favorites.includes(vehicle.name)?"pintado fas fa-heart float-right mb-3":"far fa-heart float-right pt-3 heart"}></i>

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

export default Vehicles;