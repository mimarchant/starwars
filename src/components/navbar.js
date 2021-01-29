import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


const Navbar = () => {
    const { store, actions } = useContext(Context);
    
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-nav">
                <a className="navbar-brand nav-logo" target="_blank" href="https://www.starwars.com/">STAR<br />WARS</a>


                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">HOME <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/characters">CHARACTERS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/planets">PLANETS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/vehicles">VEHICLES</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/favorites">FAVORITES</Link>
                        </li>




                    </ul>

                </div>
            </nav>
        </>
    )
}

export default Navbar;