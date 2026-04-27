import Item from  "./Item";
import { useState } from "react";

// Carousell for item



const Showcase = () => {

    //send these to backend soon
    //query database from backend to this format
    const projects = [
        {
            id: 1,
            title: "Dodge the Discord - 2022",
            desc: "Game about dodging particles.",
            linkname: "Github",
            link: "https://github.com/oridayo/COS10009-Dodge-the-Discord",
            img: "./dodge-the-discord.png",
            genre: ["Ruby"],
        },
        {
            id: 2,
            title: "Gujify - 2022",
            desc: "A custom made Spotify-like app to as part of a university project.",
            linkname: "Github",
            link: "https://github.com/oridayo/COS10009-Gujify",
            img: "./gujify.png",
            genre: ["Ruby", "Gosu"],
        },
        {
            id: 3,
            title: "SwinAdventure - 2023",
            desc: "A console dungeon adventure game that guides user through various rooms. User can interact with items in the rooms to progress through the game.",
            linkname: "Github",
            link: "https://github.com/oridayo/COS20007-SwinAdventure",
            img: "./project3.png",
            genre: ["C#", ".NET"],
        },
        {
            id: 4,
            title: "DAGKEA - 2023",
            desc: "A custom IKEA website clone (partially) as part of a university assignment.",
            linkname: "Github",
            link: "https://github.com/ItsEdzer/DAGKEA-website",
            img: "./dagkea.png",
            genre: ["HTML", "CSS", "PHP", "MySQL"],
        },
        {
            id: 5,
            title: "COVID Test Recommendation Project- 2023",
            desc: "A console app that recommends the user on which COVID test to take based on their symptoms and other factors.",
            linkname: "Github",
            link: "https://github.com/ItsEdzer/COVID-Test-Recommendation-Project",
            img: "./project5.png",
            genre: ["C++"],
        },
        {
            id: 6,
            title: "Final Year Project - 2024",
            desc: "An AI Chatbot that finds information from a specific database of custom files uploaded. Held a role of a Lead Developer in the team to bring this project to life.",
            linkname: "",
            link: "",
            img: "./fyp.png",
            genre: ["Django", "Python", "OpenAI API"],
        },
        {
            id: 7,
            title: "InfinityWorld - 2025",
            desc: "A website that provides a comprehensive analytics for user to understand their new business location well. It provides information such as foot traffic, demographics, and nearby competitors. Part of a team project for Innojam Hackathon 2025.",
            linkname: "Github",
            link: "https://github.com/lohkaixuan/InfinityWorld",
            img: "./project7.png",
            genre: ["React", "AWS", "OpenAI API", "Google Maps API", "OpenData API"],
        },
        {
            id: 8,
            title: "Holobot - 2025",
            desc: "A Discord Bot that fetches information from Holodex and Youtube to provide users with information about Hololive content. Currently in development.",
            linkname: "",
            link: "",
            img: "./project8.png",
            genre: ["Python", "REST API", "Custom API Wrapper"],
        },
        {
            id: 9,
            title: "UniPay - 2026",
            desc: "A one stop payment solution that focuses on AI services to better prevent fraud and scams from happening. The main focus for our team is the AI service that prevents fraud in the first layer of transactions. Part of a team project for TNG Digital FinHack 2026.",
            linkname: "Github",
            link: "https://github.com/lohkaixuan/TNGFinHack",
            img: "./project9.png",
            genre: ["React", ".NET", "Alibaba Cloud", "AWS Bedrock"],
        }
    ];

    let [currentProject, setCurrentProject] = useState(0);

    function nextProject() {
        // logic to go to next project
        if (currentProject === projects.length - 1) {
            setCurrentProject(0);
        } else {
            setCurrentProject(currentProject + 1);
        }
    }

    function prevProject() {
        // logic to go to previous project
        if (currentProject === 0) {
            setCurrentProject(projects.length - 1);
        } else {
            setCurrentProject(currentProject - 1);
        }
    }

    return (
        <section className="d-flex flex-column justify-content-center align-items-center">
            <div className="container">
                <h1 className="display-4 text-center">Showcase</h1>
                <p className="lead text-center">Here are some of the projects I have worked on.</p>
            </div>
            <div className="container m-auto d-flex flex-row flex-fill">
                <div className="container m-auto d-flex flex-row col-1 align-items-center" onClick={prevProject}>
                    <p className="loop-back text-center py-100" onClick={prevProject}>&lt;</p>
                </div>
                <div className="container m-auto d-flex flex-row flex-wrap align-items-center">
                    <Item project={projects[currentProject]} />
                </div>
                <div className="container m-auto d-flex flex-row col-1 align-items-center" onClick={nextProject}>
                    <p className="loop-next text-center py-100" onClick={nextProject}>&gt;</p>
                </div>
            </div>
            <div className="container m-auto d-flex flex-column align-items-center flex-end">
                <p className="lead text-center">{currentProject + 1}/{projects.length}</p>
            </div>
        </section>
    );
}

export default Showcase;