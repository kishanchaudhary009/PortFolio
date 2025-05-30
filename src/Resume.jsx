import React from "react";

function Resume() {
    return (
        <>
            {/* Optional: Global scrollbar removal just in case */}
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
                    backgroundColor: "hsl(240, 2%, 12%)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "2rem",
                    paddingBottom: "2rem",
                }}
            >
                {/* PDF embed (responsive width, height auto) */}
                <embed
                    src="/Kishan_Resume_Updated.pdf#toolbar=0&navpanes=0"
                    type="application/pdf"
                    style={{
                        width: "100%",
                        height: "auto",
                        aspectRatio: "8.5 / 11", // Approx A4 size
                        border: "none",
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
