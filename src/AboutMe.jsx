// import React from "react";
// function Aboutme() {
//     return <>
//         <h4 style={{ fontSize: '25px', margin: '20px', color: 'white' }}>I’m a software developer currently pursuing my B.Tech in Information Technology at VIT Pune, with a strong foundation in full-stack development, system design, and AI-driven solutions. I’ve gained hands-on experience through impactful internships, national-level hackathons, and research publications. My skill set spans across Android, web, and backend development, with projects built using Kotlin, Java, Python, Spring Boot, React, and FastAPI.
//         </h4>
//         <h4 style={{ fontSize: '25px', margin: '20px', color: 'white' }}>
//             I have interned as an Android Developer and as an AI Software Developer. I’ve also secured wins at two national-level hackathons — Track Winner at QUASAR 3.0 and 2nd Place at IEEE SPIT HackXplore — for building innovative AI-based learning platforms.

//         </h4>
//         <img src="src/assets/techstack.png" style={{ width: '100%', marginInline: 'auto', paddingInline: '30px' }}></img>

//     </>
// }
// export default Aboutme;
import React, { useState, useRef } from "react";
import styles from "./cssfiles/Aboutme.module.css"; // CSS module import
function Aboutme() {
    const [revealPosition, setRevealPosition] = useState({ x: 50, y: 50 });
    const imageRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!imageRef.current) return;

        const rect = imageRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        setRevealPosition({ x, y });
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h5>
                    I’m a software developer currently pursuing my B.Tech in Information Technology at VIT Pune, with a strong foundation in full-stack development, system design, and AI-driven solutions. I’ve gained hands-on experience through impactful internships, national-level hackathons, and research publications. My skill set spans across Android, web, and backend development, with projects built using Kotlin, Java, Python, Spring Boot, React, and FastAPI.
                </h5>
                <h5>
                    I have interned as an Android Developer and as an AI Software Developer. I’ve also secured wins at two national-level hackathons — Track Winner at QUASAR 3.0 and 2nd Place at IEEE SPIT HackXplore — for building innovative AI-based learning platforms.
                </h5>
            </div>
            <h4 style={{ fontSize: '25px', color: 'white', margin: '20px 0' }}>My Tech Stack</h4>

            <div
                className={styles.secretCard}
                ref={imageRef}
                onMouseMove={handleMouseMove}
                style={{
                    "--reveal-x": `${revealPosition.x}%`,
                    "--reveal-y": `${revealPosition.y}%`
                }}
            >

                <div className={styles.imageOverlay} />
                <img
                    src="src/assets/techstack.png"
                    alt="Technology Stack"
                    className={styles.techImage}
                />
            </div>
        </div>
    );
}

export default Aboutme;