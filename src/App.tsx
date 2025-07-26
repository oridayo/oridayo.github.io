import { Outlet, Link } from "react-router-dom";

function App() {
    return (
        <>
            <div className="container-fluid font-monospace d-flex flex-column min-vh-100 bg-dark text-light">
                <header className="">
                    <nav className="navbar navbar-dark navbar-expand d-flex">
                        <span className="navbar-brand flex-grow-1">Hello.</span>
                        <ul className="navbar-nav">
                            <li className="navbar-item">
                                <Link to="/" className="nav-link {isActive}">
                                    Home
                                </Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/projects" className="nav-link">
                                    Projects
                                </Link>
                            </li>
                            <li className="navbar-item">
                                <a
                                    className="nav-link"
                                    href="mailto:marcusmunyk@gmail.com"
                                >
                                    Contact
                                </a>
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
