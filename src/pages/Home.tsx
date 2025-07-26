import React from "react";

const Home = () => {
    return (
        <div className="container m-auto py-2">
            <h1 className="text-center">Marcus Mun</h1>
            <div className="py-4">
                <h2>About Me</h2>
                <p className="">
                    Hi, I'm Marcus. I am a full-stack developer based on Kuala
                    Lumpur, Malaysia. I am a fresh graduate, and this website is
                    one of the few projects that I have been working on for the
                    past few years of my university life. Thanks for reading!
                </p>
            </div>

            <h2>My Socials</h2>

            <div className="row row-cols-auto">
                <div className="col">
                    <a
                        target="_blank"
                        href="https://www.instagram.com/marcus.munn"
                    >
                        <img
                            className="my-3 mx-auto d-block"
                            src="public/IG_brand_asset_pack_2023/01 Static Glyph/02 White Glyph/Instagram_Glyph_White.png"
                            height="20"
                        />
                    </a>
                </div>
                <div className="col">
                    <a target="_blank" href="https://x.com/ItzGujiiii">
                        <img
                            className="my-3 mx-auto d-block"
                            src="public/x-logo/logo-white.png"
                            height="20"
                        />
                    </a>
                </div>
                <div className="col">
                    <a
                        target="_blank"
                        href="https://www.linkedin.com/in/marcusmun/"
                    >
                        <img
                            className="my-3 mx-auto d-block"
                            src="public/linkedin-logos/LinkedIn-Logos/In/Digital/White/1x/In-White-26-Γö¼┬½.png"
                            height="20"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
