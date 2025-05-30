import React, { useState } from "react";
import styles from "./cssfiles/Experience.module.css";

function Experience() {
    const [showModal, setShowModal] = useState(false);
    const [modalImage, setModalImage] = useState("");

    const openModal = (imgSrc) => {
        setModalImage(imgSrc);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setModalImage("");
    };

    const internships = [
        {
            title: "AI Software Development Intern",
            company: "Eduplus Campus · Internship",
            duration: "Jun 2024 - Dec 2024 · 7 mos",
            location: "Pune, Maharashtra, India · Remote",
            description: (
                <>
                    Sponsored Project: Developed a complete automated answer sheet evaluation system using Python,
                    eliminating the need for external APIs, reducing costs, and improving processing speed.<br />
                    • <b>Model Answer Sheet Processing:</b> Used ‘got-ocr2’ for text extraction, regex for question reordering.<br />
                    • <b>Intelligent Scoring System:</b> Sentence similarity-based checking for accurate grading.<br />
                    <b>Note:</b> No GitHub repo due to private project.
                </>
            ),
            logo: "src/assets/eduplus_logo.png",
            image: "src/assets/eduplusprojectcard.png",
        },
        {
            title: "Software Developer Intern",
            company: "Mobishaala · Internship",
            duration: "Sep 2024 - Feb 2025 · 6 mos",
            location: "Remote",
            description: (
                <>
                    Worked on modernizing and enhancing Mobishaala’s Android applications with a focus on performance,
                    usability, and scalability. Key contributions included:<br />
                    • <b>Code Modernization & ViewBinding Migration:</b> Updated legacy libraries and replaced Kotlin Extensions.<br />
                    • <b>Optimized API Communication:</b> Replaced HTTP audio with WebSockets (75% faster).<br />
                    • <b>Chatbot & New App Development:</b> Built chatbot with LLM APIs, UI & backend integration.<br />
                    • <b>Dependency & Media Management:</b> Resolved Gradle issues, handled audio streaming with AudioTracks.<br />
                    • <b>Enhancing User Experience:</b> Added UI animations.<br />
                    <b>Note:</b> No GitHub repo due to private project.
                </>
            ),
            logo: "src/assets/mobishaalalogo.png",
            image: "src/assets/eduplusprojectcard.png", // Add this image in your assets folder if you have it
        },
    ];

    return (
        <>
            <div className={styles.experienceContainer}>
                {internships.map((exp, index) => (
                    <div key={index} className={styles.card}>
                        <img src={exp.logo} className={styles.logo} alt="Company Logo" />
                        <div className={styles.details}>
                            <h3>{exp.title}</h3>
                            <p><strong>{exp.company}</strong></p>
                            <p>{exp.duration}</p>
                            <p>{exp.location}</p>
                            <p>{exp.description}</p>
                            <button onClick={() => openModal(exp.image)}>View Project</button>
                        </div>
                    </div>
                ))}
            </div>

            {showModal && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <button className={styles.closeButton} onClick={closeModal}>×</button>
                        <img src={modalImage} alt="Project Screenshot" className={styles.modalImage} />
                    </div>
                </div>
            )}
        </>
    );
}

export default Experience;
