// import React, { useState, useRef } from "react";
// import styles from "./cssfiles/Aboutme.module.css"; // CSS module import
// import Smallcard from "./SmallCard";
// function Aboutme() {
//     const [revealPosition, setRevealPosition] = useState({ x: 50, y: 50 });
//     const imageRef = useRef(null);

//     const handleMouseMove = (e) => {
//         if (!imageRef.current) return;

//         const rect = imageRef.current.getBoundingClientRect();
//         const x = ((e.clientX - rect.left) / rect.width) * 100;
//         const y = ((e.clientY - rect.top) / rect.height) * 100;

//         setRevealPosition({ x, y });
//     };

//     return (
//         <div className={styles.container}>
//             <Smallcard></Smallcard>
//             <div className={styles.content}>
//                 <h5>
//                     I’m a software developer currently pursuing my B.Tech in Information Technology at VIT Pune, with a strong foundation in full-stack development, system design, and AI-driven solutions. I’ve gained hands-on experience through impactful internships, national-level hackathons, and research publications. My skill set spans across Android, web, and backend development, with projects built using Kotlin, Java, Python, Spring Boot, React, and FastAPI.
//                 </h5>
//                 <h5>
//                     I have interned as an Android Developer and as an AI Software Developer. I’ve also secured wins at two national-level hackathons — Track Winner at QUASAR 3.0 and 2nd Place at IEEE SPIT HackXplore — for building innovative AI-based learning platforms.
//                 </h5>
//             </div>
//             <h4 style={{ fontSize: '25px', color: 'white', margin: '20px 0' }}>My Tech Stack</h4>

//             <div
//                 className={styles.secretCard}
//                 ref={imageRef}
//                 onMouseMove={handleMouseMove}
//                 style={{
//                     "--reveal-x": `${revealPosition.x}%`,
//                     "--reveal-y": `${revealPosition.y}%`
//                 }}
//             >

//                 <div className={styles.imageOverlay} />
//                 <img
//                     src="/assets/techstack.png"
//                     alt="Technology Stack"
//                     className={styles.techImage}
//                 />
//             </div>
//         </div>
//     );
// }

// export default Aboutme;/

import React, { useState, useRef } from "react";
import styles from "./cssfiles/Aboutme.module.css"; // CSS module import
import Smallcard from "./SmallCard";

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

    const badges = [
        "https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white",
        "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white",
        "https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white",
        "https://img.shields.io/badge/kotlin-%237F52FF.svg?style=for-the-badge&logo=kotlin&logoColor=white",
        "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
        "https://img.shields.io/badge/swift-F54A2A?style=for-the-badge&logo=swift&logoColor=white",
        "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
        "https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white",
        "https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34",
        "https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white",
        "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
        "https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white",
        "https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white",
        "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white",
        "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
        "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
        "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
        "https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white",
        "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white",
    ];

    return (
        <div className={styles.container}>
            <Smallcard />
            <div className={styles.content}>
                <h5>
                    I’m a software developer currently pursuing my B.Tech in Information Technology at VIT Pune, with a strong foundation in full-stack development, system design, and AI-driven solutions. I’ve gained hands-on experience through impactful internships, national-level hackathons, and research publications. My skill set spans across Android, web, and backend development, with projects built using Kotlin, Java, Python, Spring Boot, React, and FastAPI.
                </h5>
                <h5>
                    I have interned as an Android Developer and as an AI Software Developer. I’ve also secured wins at two national-level hackathons — Track Winner at QUASAR 3.0 and 2nd Place at IEEE SPIT HackXplore — for building innovative AI-based learning platforms.
                </h5>
            </div>

            <h4 style={{ fontSize: "25px", color: "white", margin: "20px 0" }}>My Tech Stack</h4>

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
                <div className={styles.badgeGrid}>
                    {badges.map((url, idx) => (
                        <img key={idx} src={url} alt={`badge-${idx}`} className={styles.badge} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Aboutme;
