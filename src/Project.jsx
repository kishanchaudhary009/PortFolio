import React from "react";

function Project() {
    const project = [
        {
            "title": "AI Powered Learning Management System",
            "description": "• Developed an LMS with context-aware assignment assessments using Retrieval-Augmented Generation (RAG), AI-driven feedback, voice-cloned viva, and mentor-mentee connections. Added 3D Virtual Classroom with real-time student tracking, screen sharing, and audio conferencing",
            "images": [
                "src/assets/lms/architecture.png", "src/assets/lms/flowchart.png", "src/assets/lms/vrclassroom.png"
            ]
        },
        {
            "title": "AI Powered Learning Management System",
            "description": "• Developed an LMS with context-aware assignment assessments using Retrieval-Augmented Generation (RAG), AI-driven feedback, voice-cloned viva, and mentor-mentee connections. Added 3D Virtual Classroom with real-time student tracking, screen sharing, and audio conferencing",
            "images": [
                "src/assets/lms/architecture.png", "src/assets/lms/flowchart.png", "src/assets/lms/vrclassroom.png"
            ]
        },
        {
            "title": "AI Powered Learning Management System",
            "description": "• Developed an LMS with context-aware assignment assessments using Retrieval-Augmented Generation (RAG), AI-driven feedback, voice-cloned viva, and mentor-mentee connections. Added 3D Virtual Classroom with real-time student tracking, screen sharing, and audio conferencing",
            "images": [
                "src/assets/lms/architecture.png", "src/assets/lms/flowchart.png", "src/assets/lms/vrclassroom.png"
            ]
        }
    ];
    return <>

        <div style={{
            padding: '20px',
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'row'
        }}>
            <div style={{ marginTop: '2%' }}>
                {project.map(pro => (
                    <div>
                        <h2 style={{ color: 'white' }}>{pro.title}</h2>
                        {pro.images.map((image, idx) => (
                            <img key={idx} src={image} style={{ width: '100px', height: '70px' }} />
                        ))}
                        <h4 style={{ color: 'white' }}>{pro.description}</h4>
                    </div>
                )
                )
                }
            </div>
        </div>
    </>
}
export default Project;