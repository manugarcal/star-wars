import { useContext } from "react";
import { Context } from "../store/appContext";

const Characters = () => {


  const { store, actions } = useContext(Context);
  return (
    <>
      <div className="container">
        <h1>Characters</h1>
        <div className="row">
          {
            !!store.characters && store.characters.results.map((r, i) => {
              return (

                <div className="col-md-4 mb-4">
                  <div className="card">
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${i + 1}.jpg`} alt="" className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title">{r.name}</h5>
                      <p className="card-text">{ }</p>
                      {/* <!-- Button trigger modal --> */}
                      <button type="button" className="btn btn-outline-success btn-sm" data-toggle="modal" data-target={"#exampleModal" + i}>
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
                          <h5 className="modal-title " id="exampleModalLabel">{r.name}</h5>
                          
                        </div>
                        <div className="modal-body">
                          <p>
                            Birth Year: {r.birth_year}<br />
                            Gender: {r.gender}<br />
                            Hair Color: {r.hair_color}<br />
                            Height: {r.height} <br />
                            Mass: {r.mass}
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
export default Characters;