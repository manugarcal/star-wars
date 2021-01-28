import { Link } from "react-router-dom";



const Home = () => {
    return (
        <div  id="swLogo" >
        <img className="animate__animated animate__slideInDown" src="https://logos-download.com/wp-content/uploads/2016/09/Star_Wars_logo-1.png" alt="" width="50%" height="50%" />
        <Link to="./Characters" className="animate__animated animate__flash btn btn-outline-success d-flex "> "No! Try not! Do, or do not. There is no try."</Link>
        </div>
    )
}
export default Home;