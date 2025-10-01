import { Outlet, NavLink } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <>
            <div className="container-fluid font-monospace d-flex flex-column min-vh-100 bg-dark text-light">
                <header className="">
                    <nav className="navbar navbar-dark navbar-expand d-flex">
                        <span className="navbar-brand flex-grow-1">Hello.</span>
                        <ul className="navbar-nav">
                            <li className="navbar-item">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive ? "nav-link active" : "nav-link"
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="navbar-item">
                                <NavLink
                                    to="/projects"
                                    className={({ isActive }) =>
                                        isActive ? "nav-link active" : "nav-link"
                                    }
                                >
                                    Projects
                                </NavLink>
                            </li>
                            <li className="navbar-item">
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        isActive ? "nav-link active" : "nav-link"
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Outlet />
                <footer className="text-center py-3 mt-auto">
                    <h6>V2 - Made with React Vite, Bootstrap</h6>
                </footer>
            </div>
        </>
    );
}

export default App;
