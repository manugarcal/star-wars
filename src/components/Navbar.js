import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


const Navbar = () => {
    const { store } = useContext(Context);
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/">
                    <img src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/r2-d2-icon-18-256.png" width="30" height="30" alt=""></img>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ">
                        <Link className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
                        <Link className="nav-item nav-link" to="/Characters">Characters</Link>
                        <Link className="nav-item nav-link" to="/Planets">Planets</Link>
                        <Link className="nav-item nav-link" to="/Starships">Starships</Link>
                        <div className="dropdown">
                            <button className="btn btn-outline-light" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-bookmark"></i>  Favorites
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                {!!store.favorites &&
                                    store.favorites.map((f, i) => {
                                        return <a key={i} className="dropdown-item" href="#"><i className="far fa-star"></i> {f}</a>
                                    })}
                            </div>
                        </div>

                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;