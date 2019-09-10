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
                            <p>where2code</p>
                        </div>
                        <div className="project-list-item">
                            <p>ChallengeJS</p>
                        </div>
                        <div className="project-list-item">
                            <p>RoadTrip</p>
                        </div>
                        <div className="project-list-item">
                            <p>Win-Place-Show</p>
                        </div>
                        <div className="project-list-item">
                            <p>Win-Place-Show</p>
                        </div>
                        <div className="project-list-item">
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
                width: 30%;
                height: 100%;
                overflow-y: scroll;
            }
            .project-list-item {
                width: 100%;
                height: 50px;
                box-sizing: border-box;
                background-color: black;
                margin-bottom: 20px;
                padding: 10px;
            }
            .project-list-item p {
                margin: 0;
            }
            .project {
                width: 60%;
                background-color: green;
            }
        `}</style>
    </Layout>
)

export default Projects;