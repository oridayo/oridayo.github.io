const Home = () => {
    return (
        <div className="container m-auto py-2">
            <div className="hero-section">
                <img
                    src="/profile.jpg"
                    alt="Profile"
                    className="profile-image"
                />
                <div className="hero-content">
                    <h1 className="hero-title">Marcus Mun aka Ori</h1>
                    <p className="hero-subtitle">
                        Full-Stack Developer | Kuala Lumpur, Malaysia
                    </p>
                </div>
            </div>

            <div className="about-section section-spacing">
                <h2 className="mb-3">About Me</h2>
                <p className="lead">
                    Hi, I'm Marcus, a passionate full-stack developer based in
                    Kuala Lumpur, Malaysia. As a fresh graduate, I'm eager to
                    apply my skills in modern web technologies and contribute to
                    innovative projects. This portfolio showcases some of the
                    work I've been developing throughout my university journey.
                </p>
                <p>
                    I specialize in React, TypeScript, and modern web
                    development, always excited to learn new technologies and
                    take on challenging projects.
                </p>
            </div>

            <div className="section-spacing">
                <h2 className="text-center mb-4">Connect With Me</h2>

                <div className="social-links">
                    <div>
                        <a
                            target="_blank"
                            href="https://www.instagram.com/marcus.munn"
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
                        <a target="_blank" href="https://x.com/ItzGujiiii">
                            <img
                                className="my-3 mx-auto d-block social-icon"
                                src="./x-logo/logo-white.png"
                                alt="X (Twitter)"
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
