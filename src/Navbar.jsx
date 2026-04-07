import { Link } from 'react-router-dom';
import "./Navbar.css"


function Navbar({ darkMode, setMode }){


   return (
    <>
        <nav className={`navbar ${darkMode ? "dark-mode" : ""}`}>

            <div className='navdiv'>

            <div className='change-themes'>
                <button 
                className="material-symbols-outlined"
                onClick={() => setMode(!darkMode)}
                >
                    {darkMode ? "dark_mode" : "wb_sunny"}
                </button>
            </div>

            <div className="nav-links">
                <Link className="link" to="/">Home</Link>
                <span className='nav-divider'>/</span>
                <Link className="link" to="/about">About</Link>
            </div>

            </div>

        </nav>
    </>
    )

}

export default Navbar;