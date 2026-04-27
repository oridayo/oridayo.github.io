import { useState, useEffect } from 'react';

const Home = () => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [nameIndex, setNameIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const names = ['Frontend Developer', 'Backend Developer', 'Cloud Engineer', 'Photographer'];

    useEffect(() => {
        const currentName = names[nameIndex];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setDisplayText(currentName.slice(0, currentIndex + 1));
                setCurrentIndex(currentIndex + 1);
                if (currentIndex + 1 === currentName.length) {
                    setTimeout(() => setIsDeleting(true), 1000); // pause before deleting
                }
            } else {
                setDisplayText(currentName.slice(0, currentIndex - 1));
                setCurrentIndex(currentIndex - 1);
                if (currentIndex - 1 === 0) {
                    setIsDeleting(false);
                    setNameIndex((nameIndex + 1) % names.length);
                }
            }
        }, isDeleting ? 50 : 100); // faster deleting

        return () => clearTimeout(timeout);
    }, [currentIndex, isDeleting, nameIndex]);

    return (
        <div className="container m-auto py-2">
            <div className="hero-section">
                <img
                    src="/profile.jpg"
                    alt="Profile"
                    className="profile-image"
                />
                <div className="hero-content">
                    <h1 className="hero-title">Hello, I am Marcus</h1>
                    <p className="hero-subtitle">
                        {displayText} <span className="cursor">|</span>
                    </p>
                </div>
            </div>

            <div className="about-section section-spacing">
                <h2 className="mb-3">About Me</h2>
                <p className="lead">
                    Hi, I'm Marcus, a passionate developer based in
                    Kuala Lumpur, Malaysia. As a fresh graduate, I'm eager to
                    apply my skills in modern technologies and contribute to
                    innovative projects. This portfolio showcases some of the
                    work I've been developing throughout my journey.
                </p>
                <p>
                    I specialize in .NET, React, Python, Azure, and am always excited to learn new technologies and
                    take on challenging projects.
                </p>
            </div>

            <div className="section-spacing">
                <h2 className="text-center mb-4">Connect With Me</h2>

                <div className="social-links">
                    <div>
                        <a
                            target="_blank"
                            href="https://www.instagram.com/guji.sama"
                        >
                            <img
                                className="my-3 mx-auto d-block social-icon"
                                src="./IG_brand_asset_pack_2023/01 Static Glyph/02 White Glyph/Instagram_Glyph_White.png"
                                alt="Instagram"
                                height="32"
                            />
                        </a>
                    </div>
                    <div>
                        <a target="_blank" href="https://github.com/oridayo">
                            <img
                                className="my-3 mx-auto d-block social-icon"
                                src=".\GitHub Logos\PNG\GitHub_Invertocat_White.png"
                                alt="GitHub"
                                height="32"
                            />
                        </a>
                    </div>
                    <div>
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/in/marcusmun/"
                        >
                            <img
                                className="my-3 mx-auto d-block social-icon"
                                src="./linkedin-logos/LinkedIn-Logos/In/Digital/White/1x/In-White-26.png"
                                alt="LinkedIn"
                                height="32"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
