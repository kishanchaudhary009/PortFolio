import React from "react";

function Achievements() {
    const hackathons = [
        {
            title: "SPIT HackXplore",
            position: "Runner UP",
            images: [
                "/assets/hackxplore/hackxplorecerti.png",
                "/assets/hackxplore/hackxplorewinner.png"
            ]
        },
        {
            title: "Quasar 3.0",
            position: "Track Winner",
            images: [
                "/assets/quasar/quasarcerti1.png",
                "/assets/quasar/quasarwinner.png",
                "/assets/quasar/quasarcerti2.png"
            ]
        },
        {
            title: "Amazon ML Challenge 2024",
            position: "Team Rank 417 out of 73000 participants",
            images: ["/assets/amazonml/amazonprofilephoto.png"]
        }
    ];

    return (
        <section style={{ width: "100%", padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h1 style={{ textAlign: "center", marginBottom: "30px", color: 'white', fontSize: '25px' }}>
                Hackathons
            </h1>
            {hackathons.map((hackathon, index) => (
                <div
                    key={index}
                    style={{
                        marginBottom: "40px",
                        padding: "20px",
                        marginInline: '15%',
                        border: "1px solid #ddd",
                        borderRadius: "8px",
                        backgroundColor: "#1e1e1e"
                    }}
                >
                    <h2 style={{ marginBottom: "8px", color: "white" }}>{hackathon.title}</h2>
                    <h3 style={{ marginBottom: "16px", color: "white" }}>{hackathon.position}</h3>

                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "16px",
                            justifyContent: "center"
                        }}
                    >
                        {hackathon.images.map((img, imgIndex) => (
                            <img
                                key={imgIndex}
                                src={img}
                                alt={`${hackathon.title} - ${imgIndex}`}
                                style={{
                                    width: "300px",
                                    maxWidth: "100%",
                                    height: "auto",
                                    borderRadius: "8px",
                                    boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
                                    objectFit: "contain"
                                }}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Achievements;
