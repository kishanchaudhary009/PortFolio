import React from "react";

function Resume() {
    return (
        <>
            <style>
                {`
                    embed::-webkit-scrollbar {
                        display: none;
                    }
                `}
            </style>

            <div
                style={{
                    width: "100%",
                    backgroundColor: 'hsl(0, 2.50%, 16.99%)',
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingBottom: "2rem",
                }}
            >
                <h1 style={{ textAlign: "center", marginTop: "20px", marginBottom: '20px', color: 'white', fontSize: '25px' }}>
                    Resume
                </h1>
                {/* PDF embed with fixed height */}
                <embed
                    src="/Kishan_Resume_Updated.pdf#toolbar=0&navpanes=0"
                    type="application/pdf"
                    style={{
                        width: "100%",
                        backgroundColor: 'hsl(240, 2%, 12%)',
                        height: "140vh", // fill most of the screen height
                        border: "none",
                        marginBottom: "1rem", // reduce gap here
                    }}
                />

                {/* Download button */}
                <a
                    href="/Kishan_Resume_Updated.pdf"
                    download="Kishan_Resume.pdf"
                    style={{
                        padding: "0.6rem 1.2rem",
                        backgroundColor: "#007bff",
                        color: "white",
                        borderRadius: "5px",
                        textDecoration: "none",
                        fontWeight: "bold",
                    }}
                >
                    Download Resume
                </a>
            </div>
        </>
    );
}

export default Resume;
