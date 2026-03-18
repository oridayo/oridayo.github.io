import { Outlet, NavLink } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <div className="base container-fluid font-monospace d-flex flex-column min-vh-100 text-light">
            <header className="d-flex flex-row row-2 justify-content-center align-items-center py-3">
                <nav className="navbar navbar-dark navbar-expand d-flex">
                    <ul className="navbar-nav mx-auto">
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
                                to="/library"
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                            >
                                Library
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
                    <div></div>
                </nav>
            </header>
            <Outlet />
            <footer className="d-flex flex-column row-1 text-center py-3 mt-auto">
                <h6>v3 - Made with React Vite, Bootstrap</h6>
            </footer>
        </div>
    );
}

export default App;
