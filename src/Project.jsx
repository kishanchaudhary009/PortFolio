import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

function Project() {
    const projects = [
        {
            title: "AI Powered LMS",
            description: "• Developed an LMS with context-aware assignment assessments using Retrieval-Augmented Generation (RAG), AI-driven feedback, voice-cloned viva, and mentor-mentee connections. Added 3D Virtual Classroom with real-time student tracking, screen sharing, and audio conferencing",
            images: [
                "src/assets/lms/architecture.png",
                "src/assets/lms/flowchart.png",
                "src/assets/lms/vrclassroom.png",
                "src/assets/lms/architecture.png",
                "src/assets/lms/flowchart.png",
                "src/assets/lms/vrclassroom.png",
            ]
        },
        {
            title: "AI Powered LMS",
            description: "• Developed an LMS with context-aware assignment assessments using Retrieval-Augmented Generation (RAG), AI-driven feedback, voice-cloned viva, and mentor-mentee connections. Added 3D Virtual Classroom with real-time student tracking, screen sharing, and audio conferencing",
            images: [
                "src/assets/lms/architecture.png",
                "src/assets/lms/flowchart.png",
                "src/assets/lms/vrclassroom.png",
                "src/assets/lms/architecture.png",
                "src/assets/lms/flowchart.png",
                "src/assets/lms/vrclassroom.png",
            ]
        }

    ];

    return (
        <div
            style={{
                width: '100%',
                overflow: 'hidden', // Changed from overflowX to overflow
                fontFamily: "sans-serif",
                backgroundColor: "hsl(240, 2%, 12%)",
                color: "white",
                padding: "2rem clamp(1rem, 5vw, 2rem)", // Responsive padding
                boxSizing: "border-box",
                position: "relative" // Added for proper containment
            }}
        >
            <h1 style={{
                textAlign: "center",
                marginBottom: "3rem",
                fontSize: "clamp(1.8rem, 5vw, 2.5rem)", // Responsive font size
                fontWeight: "600"
            }}>
                My Projects
            </h1>

            {projects.map((project, index) => (
                <div
                    key={index}
                    style={{
                        marginBottom: '4rem',
                        width: '100%',
                        overflow: 'hidden',
                        position: "relative"
                    }}
                >
                    <div style={{
                        padding: "0",

                        margin: "0 auto"
                    }}>
                        <h2 style={{
                            marginBottom: '1.5rem',
                            fontSize: "clamp(1.3rem, 4vw, 1.8rem)",
                            color: "hsl(210, 100%, 70%)",
                            padding: "0 1rem"
                        }}>
                            {project.title}
                        </h2>

                        <p style={{
                            marginBottom: '1.5rem',
                            lineHeight: "1.6",
                            fontSize: "1rem",
                            maxWidth: "800px",
                            padding: "0 1rem"
                        }}>
                            {project.description}
                        </p>
                    </div>

                    {/* Container with hidden overflow to prevent horizontal scroll */}
                    <div style={{
                        width: "100vw",
                        position: "relative",
                        left: "50%",
                        right: "50%",
                        marginLeft: "-50vw",
                        marginRight: "-50vw",
                        overflow: "hidden",
                        padding: "1rem 0"
                    }}>
                        <div style={{
                            maxWidth: "1200px",
                            margin: "0 auto",
                            padding: "0 1rem",
                            boxSizing: "border-box"
                        }}>
                            <Swiper
                                modules={[Autoplay]}
                                autoplay={{
                                    delay: 0,
                                    disableOnInteraction: false,
                                }}
                                loop={true}
                                speed={4000}
                                slidesPerView={"auto"}
                                spaceBetween={20}
                                allowTouchMove={true}
                                observer={true}
                                observeParents={true}
                                style={{
                                    width: "100%",
                                    overflow: "hidden"
                                }}
                            >
                                {project.images.map((image, idx) => (
                                    <SwiperSlide
                                        key={idx}
                                        style={{
                                            width: "300px",
                                            height: "200px",
                                            borderRadius: "8px",
                                            overflow: "hidden",
                                            flexShrink: 0 // Prevent slides from shrinking
                                        }}
                                    >
                                        <img
                                            src={image}
                                            alt={`${project.title} screenshot ${idx + 1}`}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                transition: "transform 0.3s ease"
                                            }}
                                            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                                            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Project;