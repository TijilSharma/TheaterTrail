import { Link } from "react-router-dom"
import "../css/NavBar.css"


function NavBar(){
    return <>
    <div className="navbar">
        <div className="navbar-brand">
            <Link to='/'>TheaterTrail</Link>
        </div>
        <div className="navbaar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/favorites" className="nav-link">Favorites</Link>
            
        </div>
    </div>
    </>
}

export default NavBar