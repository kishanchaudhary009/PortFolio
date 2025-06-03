import React from "react";
import { motion } from "framer-motion";

const certifications = [
    { title: "Android Internship", image: "/assets/Mobishaala Certificate_page-0001.jpg" },
    { title: "AI Developer Internship", image: "/assets/Eduplus Ai Intern (1)_page-0001.jpg" },
    { title: "Android Development (Udemy)", image: "/assets/Android Udemy_page-0001.jpg" },
    { title: "Python (Coursera)", image: "/assets/Python Coursera_page-0001.jpg" },
    { title: "iOS App Development with Swift (Coursera)", image: "/assets/Swift Coursera (1)_page-0001.jpg" },
    { title: "Flask (Coursera)", image: "/assets/Flask Coursera_page-0001.jpg" },
];
const publications = [
    { title: "SmartGrade - IEEE", image: "/assets/Smartgrade Ieee.png" },
    { title: "SaralMarathi - IEEE", image: "/assets/SaralMarathi Ieee.png" },
    { title: "Open Autonomous Dashboard - IJISAE", image: "/assets/Drivesync ijius.png" }
];

function Certifications() {
    return (
        <div style={{ padding: "40px 10%", fontFamily: "sans-serif", backgroundColor: "hsl(240, 2%, 12%)" }}>
            <h2 style={{ width: '100%', height: '10%', textAlign: 'center', color: 'white', marginInline: 'auto', fontFamily: 'monospace' }}> Course Certifications</h2>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                    gap: "24px",
                    backgroundColor: "hsl(240, 2%, 12%)",
                }}
            >
                {certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        style={{
                            backgroundColor: "hsl(240, 2%, 12%)",
                            borderRadius: "12px",
                            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
                            padding: "12px",
                            overflow: "hidden",
                            textAlign: "center",
                        }}
                    >
                        <h4 style={{ marginBottom: "10px", color: "white" }}>{cert.title}</h4>
                        <img
                            src={cert.image}
                            alt={cert.title}
                            style={{
                                width: "100%",
                                height: "auto",
                                borderRadius: "8px",
                                objectFit: "contain",
                            }}
                        />
                    </motion.div>
                ))}
            </div>

            <h2 style={{ width: '100%', height: '10%', textAlign: 'center', color: 'white', marginInline: 'auto', fontFamily: 'monospace' }}>Research Publications</h2>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                    gap: "24px",
                    backgroundColor: "hsl(240, 2%, 12%)",
                }}
            >
                {publications.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        style={{
                            backgroundColor: "hsl(240, 2%, 12%)",
                            borderRadius: "12px",
                            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
                            padding: "12px",
                            overflow: "hidden",
                            textAlign: "center",
                        }}
                    >
                        <   h4 style={{ marginBottom: "10px", color: "white" }}>{cert.title}</h4>
                        <img
                            src={cert.image}
                            alt={cert.title}
                            style={{
                                width: "100%",
                                height: "auto",
                                borderRadius: "8px",
                                objectFit: "contain",
                            }}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Certifications;
