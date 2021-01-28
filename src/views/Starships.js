import { useContext } from "react";
import { Context } from "../store/appContext";

const Starships = () => {

    const { store, actions } = useContext(Context);
    return (
        <>
            <div className="container">
                <h1>Starships</h1>
                <div className="row">
                    {
                        !!store.starships && store.starships.results.map((r, i) => {
                            return (
                                <div className="col-md-4 mb-4">
                                    <div className="card">
                                        <img src={`https://starwars-visualguide.com/assets/img/starships/${i + 1}.jpg`} alt="" className="card-img-top" />
                                        <div className="card-body">
                                            <h5 className="card-title">{r.name}</h5>
                                            <p className="card-text">{ }</p>
                                            {/* <!-- Button trigger modal --> */}
                                            <button  type="button" className="btn btn-outline-success btn-sm" data-toggle="modal" data-target={"#exampleModal" + i}>
                                                Read more
                                          </button>

                                            <button onClick={() => actions.favorites(r.name)} href="" className="float-right btn btn-outline-danger btn-sm"><i className="far fa-heart"></i></button>
                                        </div>
                                    </div>
                                    {/* <!-- Modal --> */}
                                    <div className="modal fade" id={"exampleModal" + i} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalLabel">{r.name}</h5>
                                                </div>
                                                <div className="modal-body">
                                                    <p>
                                                        Manufacturer:{r.manufacturer}<br />
                                                        Model: {r.model}<br />
                                                        Cargo Capacity: {r.cargo_capacity} <br />
                                                        Consumables: {r.consumables} <br />
                                                        Passengers: {r.passengers}<br />
                                                        Max Atmosphering Speed: {r.max_atmosphering_speed} 
                                                    </p>
                                                </div> 
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                </div>
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
export default Starships;