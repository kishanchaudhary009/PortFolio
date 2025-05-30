import React, { useState } from "react";

const certifications = [
    {
        title: "Android Internship",
        pdf: "src/assets/Mobishaala Certificate.pdf",
    }, {
        title: "AI Developer Internship",
        pdf: "src/assets/Eduplus Ai Intern (1).pdf",
    },
    {
        title: "Android Development (Udemy)",
        pdf: "src/assets/Android Udemy.pdf",
    },
    {
        title: "Python (Coursera)",
        pdf: "src/assets/Python Coursera.pdf",
    },
    {
        title: "iOS App Development with Swift (Coursera)",
        pdf: "src/assets/Swift Coursera (1).pdf",
    },
    {
        title: "Flask (Coursera)",
        pdf: "src/assets/Flask Coursera.pdf",
    },
];

function Certifications() {
    const [selectedPdf, setSelectedPdf] = useState(null);

    return (
        <div style={{ padding: "40px 10%", fontFamily: "sans-serif" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "space-between" }}>
                {certifications.map((cert, index) => (
                    <div
                        key={index}
                        onClick={() => setSelectedPdf(cert.pdf)}
                        style={{
                            width: "260px",
                            backgroundColor: "#f9f9f9",
                            borderRadius: "10px",
                            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                            padding: "10px",
                            cursor: "pointer",
                            textAlign: "center",
                        }}
                    >
                        <h4 style={{ margin: "10px 0" }}>{cert.title}</h4>
                        <iframe
                            src={cert.pdf}
                            title={cert.title}
                            style={{
                                width: "100%",
                                height: "200px",
                                border: "1px solid #ccc",
                                borderRadius: "6px",
                            }}
                        />
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedPdf && (
                <div
                    onClick={() => setSelectedPdf(null)}
                    style={{
                        position: "fixed",
                        top: 0, left: 0,
                        width: "100vw",
                        height: "100vh",
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 1000,
                    }}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            width: "80%",
                            height: "90%",
                            backgroundColor: "#fff",
                            borderRadius: "10px",
                            overflow: "hidden",
                            boxShadow: "0 0 15px rgba(0,0,0,0.3)",
                            position: "relative",
                        }}
                    >
                        <iframe
                            src={selectedPdf}
                            title="Full Certificate"
                            style={{ width: "100%", height: "100%", border: "none" }}
                        />
                        <button
                            onClick={() => setSelectedPdf(null)}
                            style={{
                                position: "absolute",
                                top: 10,
                                right: 15,
                                background: "#ff5c5c",
                                color: "#fff",
                                border: "none",
                                borderRadius: "5px",
                                padding: "5px 10px",
                                cursor: "pointer",
                            }}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Certifications;
