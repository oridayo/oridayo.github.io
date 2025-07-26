const Projects = () => {
    return (
        <div id="projects" className="container m-auto py-5">
            <h2>Projects</h2>
            <table className="table table-dark table-borderless table-hover">
                <thead className="">
                    <tr className="text-center">
                        <th className="col-4" scope="col"></th>
                        <th className="col-8" scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="p-5">
                            <img
                                className="img-fluid"
                                src="public/portfolio_v1.png"
                            />
                        </td>
                        <td className="p-5">
                            <h2>Portfolio - 2024</h2>
                            <p>
                                This portfolio is to showcase my ability in web
                                development, as well as my previous projects.
                            </p>
                            <h6>HTML | Bootstrap CSS</h6>
                        </td>
                    </tr>
                    <tr>
                        <td className="p-5">
                            <img className="img-fluid" src="public/fyp.png" />
                        </td>
                        <td className="p-5">
                            <h2>Final Year Project - 2024</h2>
                            <p>
                                An AI Chatbot that finds information from a
                                specific database of custom files uploaded.
                                <br />
                                Held a role of a Lead Developer in the team to
                                bring this project to life.
                            </p>
                            <h6>Django | Python | Bootstrap CSS</h6>
                        </td>
                    </tr>
                    <tr>
                        <td className="p-5">
                            <img
                                className="img-fluid"
                                src="public/dagkea.png"
                            />
                        </td>
                        <td className="p-5">
                            <h2>DAGKEA - 2023</h2>
                            <p>
                                A custom IKEA website clone (partially) as part
                                of a university assignment.
                            </p>
                            <h6>HTML | CSS | PHP | MySQL</h6>
                        </td>
                    </tr>
                    <tr>
                        <td className="p-5">
                            <img
                                className="img-fluid"
                                src="public/gujify.png"
                            />
                        </td>
                        <td className="p-5">
                            <h2>Gujify - 2022</h2>
                            <p>
                                A custom made Spotify-like app to as part of a
                                university project.
                            </p>
                            <h6>Ruby | Gosu</h6>
                        </td>
                    </tr>
                    <tr>
                        <td className="p-5">
                            <img
                                className="img-fluid"
                                src="public/dodge-the-discord.png"
                            />
                        </td>
                        <td className="p-5">
                            <h2>Dodge the Discord - 2022</h2>
                            <p>Game about dodging particles.</p>
                            <h6>Ruby</h6>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Projects;
