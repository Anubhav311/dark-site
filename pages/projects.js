import React from 'react'
import Layout from '../components/Layout';

const Projects = () => (
    <Layout>
        <div className="projects-container">
            <div className="projects-inner-container">
                <h1>PROJECTS</h1>
                <div className="projects-view">
                    <div className="projects-list">
                        <div className="project-list-item">
                            <div className="dot"></div>
                            <p>where2code</p>
                        </div>
                        <div className="project-list-item">
                            <div className="dot"></div>
                            <p>ChallengeJS</p>
                        </div>
                        <div className="project-list-item">
                            <div className="dot"></div>
                            <p>RoadTrip</p>
                        </div>
                        <div className="project-list-item">
                            <div className="dot"></div>
                            <p>Win-Place-Show</p>
                        </div>
                        <div className="project-list-item">
                            <div className="dot"></div>
                            <p>Win-Place-Show</p>
                        </div>
                        <div className="project-list-item">
                            <div className="dot"></div>
                            <p>Win-Place-Show</p>
                        </div>
                    </div>
                    <div className="project">
                        <h2>Hi</h2>
                    </div>
                </div>
            </div>
        </div>
        <style jsx>{`
            .projects-container {
                position: absolute;
                top: 45%;
                transform: translateY(-45%);
                margin-left: 20px;
                margin-right: 20px;
                width: 90%;
                height: 70%;
            }
            .projects-inner-container {
                box-sizing: border-box;
                width: 80%;
                height: 100%;
                margin: auto;
            }
            @media (max-width: 850px) {
                .projects-inner-container {
                    width: 80%;
                }
            }
            h1 {
                color: #E6296D;
                letter-spacing: 5px;
                margin-bottom: 10px;
                margin-left: 25px;
            }
            @media (max-width: 850px) {
                h1 {
                    font-size: 1.5rem;
                }
            }
            .projects-view {
                width: 100%;
                height: 80%;
                display: flex;
                justify-content: space-between;
            }
            .projects-list {
                width: 35%;
                height: 100%;
                overflow-y: scroll;
                padding: 25px;
                box-sizing: border-box;
            }
            // width
            .projects-list::-webkit-scrollbar {
                width: 5px;
                border-radius: 5px;
            }

            // Track
            // .projects-list::-webkit-scrollbar-track {
            //     background: #f1f1f1; 
            // }

            // Handle
            .projects-list::-webkit-scrollbar-thumb {
                background: none; 
                border-radius: 5px;
            }

            // Handle on hover
            .projects-list::-webkit-scrollbar-thumb:hover {
                background: #9ac6c9;; 
            }

            .project-list-item {
                width: 100%;
                height: 60px;
                box-sizing: border-box;
                background-color: black;
                margin-bottom: 30px;
                padding: 10px;
                display: flex;
                align-items: center;
                border-radius: 5px;
                box-shadow: 0px 5px 20px 5px;
            }
            .dot {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background-color: #E6296D;
                margin-right: 10px;
            }
            .project-list-item p {
                margin: 0;
            }
            .project {
                width: 60%;
                background-color: green;
                box-shadow: 0px 15px 40px 10px;
            }
        `}</style>
    </Layout>
)

export default Projects;