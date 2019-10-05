import React from 'react'

import Layout from '../components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub as github } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt as link, faEnvelope as mail } from '@fortawesome/free-solid-svg-icons';

const Projects = () => (
    <Layout>

        <div className="projects-container">
            <div className="projects-inner-container">
                {/* <div className="projects-view"> */}
                    <div className="projects-text">
                        <h1>PROJECTS</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className="projects-list">
                        <div className="project-list-item">
                            <div className="project-card-divider">
                                <div className="project-card-header">
                                    <h3>WhereToCode</h3>
                                    <div className="project-links">
                                        <FontAwesomeIcon style={{color: "#4B4B4B"}} className="icon" icon={github} size="2x"/>
                                        <FontAwesomeIcon style={{color: "#4B4B4B", marginLeft: "15px"}} icon={link} size="2x"/>
                                    </div>
                                </div>
                                <p className="project-description" style={{marginBottom: "20px"}}>Where to code is an online platform for finding nearby places where user can sit and work remotely.</p>
                                <p className="project-description" style={{marginBottom: "40px"}}>I was working as a Team Lead for this project.</p>
                            </div>
                            <p className="project-tech">React || Express || Node || Google Map || Travis</p>
                        </div>

                        <div className="project-list-item">
                            <div className="project-card-divider">
                                <div className="project-card-header">
                                    <h3>ChallengeJS</h3>
                                    <div className="project-links">
                                        <FontAwesomeIcon style={{color: "#4B4B4B"}} className="icon" icon={github} size="2x"/>
                                        <FontAwesomeIcon style={{color: "#4B4B4B", marginLeft: "15px"}} icon={link} size="2x"/>
                                    </div>
                                </div>
                                <p className="project-description" style={{marginBottom: "20px"}}>Where to code is an online platform for finding nearby places where user can sit and work remotely.</p>
                                <p className="project-description" style={{marginBottom: "40px"}}>I was working as a Team Lead for this project.</p>
                            </div>
                            <p className="project-tech">React || Express || Node || Google Map || Travis</p>
                        </div>

                        <div className="project-list-item">
                            <div className="project-card-divider">
                                <div className="project-card-header">
                                    <h3>RoadTrip</h3>
                                    <div className="project-links">
                                        <FontAwesomeIcon style={{color: "#4B4B4B"}} className="icon" icon={github} size="2x"/>
                                        <FontAwesomeIcon style={{color: "#4B4B4B", marginLeft: "15px"}} icon={link} size="2x"/>
                                    </div>
                                </div>
                                <p className="project-description" style={{marginBottom: "20px"}}>Where to code is an online platform for finding nearby places where user can sit and work remotely.</p>
                                <p className="project-description" style={{marginBottom: "40px"}}>I was working as a Team Lead for this project.</p>
                            </div>
                            <p className="project-tech">React || Express || Node || Google Map || Travis</p>
                        </div>

                        <div className="project-list-item">
                            <div className="project-card-divider">
                                <div className="project-card-header">
                                    <h3>Modern-Day-Researcher</h3>
                                    <h3>MDR</h3>
                                    <div className="project-links">
                                        <FontAwesomeIcon style={{color: "#4B4B4B"}} className="icon" icon={github} size="2x"/>
                                        <FontAwesomeIcon style={{color: "#4B4B4B", marginLeft: "15px"}} icon={link} size="2x"/>
                                    </div>
                                </div>
                                <p className="project-description" style={{marginBottom: "20px"}}>Where to code is an online platform for finding nearby places where user can sit and work remotely.</p>
                                <p className="project-description" style={{marginBottom: "40px"}}>I was working as a Team Lead for this project.</p>
                            </div>
                            <p className="project-tech">React || Express || Node || Google Map || Travis</p>
                        </div>

                        <div className="project-list-item">
                            <div className="project-card-divider">
                                <div className="project-card-header">
                                    <h3>WinPlaceShow</h3>
                                    <h3>WPS</h3>
                                    <div className="project-links">
                                        <FontAwesomeIcon style={{color: "#4B4B4B"}} className="icon" icon={github} size="2x"/>
                                        <FontAwesomeIcon style={{color: "#4B4B4B", marginLeft: "15px"}} icon={link} size="2x"/>
                                    </div>
                                </div>
                                <p className="project-description" style={{marginBottom: "20px"}}>Where to code is an online platform for finding nearby places where user can sit and work remotely.</p>
                                <p className="project-description" style={{marginBottom: "40px"}}>I was working as a Team Lead for this project.</p>
                            </div>
                            <p className="project-tech">React || Express || Node || Google Map || Travis</p>
                        </div>

                        <div className="project-list-item">
                            <div className="project-card-divider">
                                <div className="project-card-header">
                                    <h3>Instagram Clone</h3>
                                    <div className="project-links">
                                        <FontAwesomeIcon style={{color: "#4B4B4B"}} className="icon" icon={github} size="2x"/>
                                        <FontAwesomeIcon style={{color: "#4B4B4B", marginLeft: "15px"}} icon={link} size="2x"/>
                                    </div>
                                </div>
                                <p className="project-description" style={{marginBottom: "20px"}}>Where to code is an online platform for finding nearby places where user can sit and work remotely.</p>
                                <p className="project-description" style={{marginBottom: "40px"}}>I was working as a Team Lead for this project.</p>
                            </div>
                            <p className="project-tech">React || Express || Node || Google Map || Travis</p>
                        </div>

                        <div className="project-list-item">
                            <div className="project-card-divider">
                                <div className="project-card-header">
                                    <h3>TodoList</h3>
                                    <div className="project-links">
                                        <FontAwesomeIcon style={{color: "#4B4B4B"}} className="icon" icon={github} size="2x"/>
                                        <FontAwesomeIcon style={{color: "#4B4B4B", marginLeft: "15px"}} icon={link} size="2x"/>
                                    </div>
                                </div>
                                <p className="project-description" style={{marginBottom: "20px"}}>Where to code is an online platform for finding nearby places where user can sit and work remotely.</p>
                                <p className="project-description" style={{marginBottom: "40px"}}>I was working as a Team Lead for this project.</p>
                            </div>
                            <p className="project-tech">React || Express || Node || Google Map || Travis</p>
                        </div>

                        <div className="project-list-item">
                            <div className="project-card-divider">
                                <div className="project-card-header">
                                    <h3>Donor Management</h3>
                                    <div className="project-links">
                                        <FontAwesomeIcon style={{color: "#4B4B4B"}} className="icon" icon={github} size="2x"/>
                                        <FontAwesomeIcon style={{color: "#4B4B4B", marginLeft: "15px"}} icon={link} size="2x"/>
                                    </div>
                                </div>
                                <p className="project-description" style={{marginBottom: "20px"}}>Where to code is an online platform for finding nearby places where user can sit and work remotely.</p>
                                <p className="project-description" style={{marginBottom: "40px"}}>I was working as a Team Lead for this project.</p>
                            </div>
                            <p className="project-tech">React || Express || Node || Google Map || Travis</p>
                        </div>

                    {/* </div> */}
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
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            @media (max-width: 850px) {
                .projects-inner-container {
                    width: 90%;
                }
            }
            h1 {
                color: #E6296D;
                letter-spacing: 5px;
                // margin-bottom: 10px;
            }
            @media (max-width: 850px) {
                h1 {
                    font-size: 1.5rem;
                }
            }
            h3 {
                letter-spacing: 2px;
                color: #E6296D;
                margin: 0px;
            }
            .projects-view {
                width: 100%;
                height: 80%;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .projects-list {
                width: 50%;
                height: 100%;
                overflow-y: scroll;
                padding: 25px;
                box-sizing: border-box;
            }
            @media (max-width: 850px) {
                .projects-list {
                    width: 100%;
                }
            }
            // width
            .projects-list::-webkit-scrollbar {
                width: 5px;
                border-radius: 5px;
            }

            .project-card-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 20px;
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
                height: auto;
                box-sizing: border-box;
                background-color: black;
                margin-bottom: 30px;
                padding: 20px;
                // display: flex;
                // align-items: center;
                border-radius: 5px;
                box-shadow: 0px 5px 20px 5px;
            }
            .dot {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background-color: #E6296D;
                margin: 0 15px 0 10px;
            }
            @media (max-width: 850px) {
                .dot {
                    margin: 0 10px 0 0;
                }
            }
            .project-list-item p {
                margin: 0;
            }
            .projects-text {
                width: 40%;
                // margin-left: 25px;
            }
            .projects-text p {
                letter-spacing: 3px;
                word-spacing: 5px;
                line-height: 20px;
                text-align: justify;
                font-family: 'Roboto',sans-serif;
            }
            @media (max-width: 850px) {
                .projects-text {
                    display: none;
                }
            }
            .project h3 {
                letter-spacing: 2px;
                color: #E6296D;
            }
            .project-description {
                letter-spacing: 2px;
                font-size: 0.9rem;
            }
            .project-tech {
                // letter-spacing: 1px;
                font-size: 0.9rem;
                font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", "Lucida Console", Monaco, monospace;
            }
            .icon {
                margin-right: 20px;
            }
            .project-links {
                display: flex;
                justify-content: flex-end;
            }
            .bar-icon {
                margin-left: auto;
                font-size: 0.8rem;
            }
            @media (min-width: 850px) {
                .bar-icon {
                    display: none;
                }
            }
            .project-img-container {
                padding: 10%;
            }
            .project-img {
                width: 90%;
                height: 100%;
                margin: auto;
            }
        `}</style>
    </Layout>
)

export default Projects;