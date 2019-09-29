import React from 'react'
import Slider from "react-slick";

import Layout from '../components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub as github } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt as link, faEnvelope as mail } from '@fortawesome/free-solid-svg-icons';

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};
const Projects = () => (
    <Layout>

        <div className="projects-container">
        <Slider {...settings}>
            <div>
                <h3>1</h3>
            </div>
            <div>
                <h3>2</h3>
            </div>
            <div>
                <h3>3</h3>
            </div>
            <div>
                <h3>4</h3>
            </div>
            <div>
                <h3>5</h3>
            </div>
            <div>
                <h3>6</h3>
            </div>
        </Slider>
            {/* <div className="projects-inner-container">
                <h1>PROJECTS</h1>
                <div className="projects-view">
                    <div className="projects-list">
                        <div className="project-list-item">
                            <div className="dot"></div>
                            <p>Wheretocode</p>
                            <div className="bar-icon">
                                <FontAwesomeIcon style={{color: "#4B4B4B"}} icon={github} size="2x"/>
                                <FontAwesomeIcon style={{color: "#4B4B4B", marginLeft: "15px"}} icon={link} size="2x"/>
                            </div>
                        </div>
                        <div className="project-list-item">
                            <div className="dot"></div>
                            <p>ChallengeJS</p>
                            <div className="bar-icon">
                                <FontAwesomeIcon style={{color: "#4B4B4B"}} icon={github} size="2x"/>
                                <FontAwesomeIcon style={{color: "#4B4B4B", marginLeft: "15px"}} icon={link} size="2x"/>
                            </div>
                        </div>
                        <div className="project-list-item">
                            <div className="dot"></div>
                            <p>Roadtrip</p>
                            <div className="bar-icon">
                                <FontAwesomeIcon style={{color: "#4B4B4B"}} icon={github} size="2x"/>
                                <FontAwesomeIcon style={{color: "#4B4B4B", marginLeft: "15px"}} icon={link} size="2x"/>
                            </div>
                        </div>
                        <div className="project-list-item">
                            <div className="dot"></div>
                            <p>MDR</p>
                            <div className="bar-icon">
                                <FontAwesomeIcon style={{color: "#4B4B4B"}} icon={github} size="2x"/>
                                <FontAwesomeIcon style={{color: "#4B4B4B", marginLeft: "15px"}} icon={link} size="2x"/>
                            </div>
                        </div>
                        <div className="project-list-item">
                            <div className="dot"></div>
                            <p>WPS</p>
                            <div className="bar-icon">
                                <FontAwesomeIcon style={{color: "#4B4B4B"}} icon={github} size="2x"/>
                                <FontAwesomeIcon style={{color: "#4B4B4B", marginLeft: "15px"}} icon={link} size="2x"/>
                            </div>
                        </div>
                        <div className="project-list-item">
                            <div className="dot"></div>
                            <p>Insta Clone</p>
                            <div className="bar-icon">
                                <FontAwesomeIcon style={{color: "#4B4B4B"}} icon={github} size="2x"/>
                                <FontAwesomeIcon style={{color: "#4B4B4B", marginLeft: "15px"}} icon={link} size="2x"/>
                            </div>
                        </div>
                        <div className="project-list-item">
                            <div className="dot"></div>
                            <p>ToDo List</p>
                            <div className="bar-icon">
                                <FontAwesomeIcon style={{color: "#4B4B4B"}} icon={github} size="2x"/>
                                <FontAwesomeIcon style={{color: "#4B4B4B", marginLeft: "15px"}} icon={link} size="2x"/>
                            </div>
                        </div>
                        <div className="project-list-item">
                            <div className="dot"></div>
                            <p>Donor Manage</p>
                            <div className="bar-icon">
                                <FontAwesomeIcon style={{color: "#4B4B4B"}} icon={github} size="2x"/>
                                <FontAwesomeIcon style={{color: "#4B4B4B", marginLeft: "15px"}} icon={link} size="2x"/>
                            </div>
                        </div>
                    </div>
                    <div className="project">
                        <div className="project-card-divider">
                            <div className="project-links">
                                <FontAwesomeIcon style={{color: "#4B4B4B"}} className="icon" icon={github} size="2x"/>
                                <FontAwesomeIcon style={{color: "#4B4B4B", marginLeft: "15px"}} icon={link} size="2x"/>
                            </div>
                            <h3>WhereToCode</h3>
                            <p className="project-description">Where to code is an online platform for finding nearby places where user can sit and work remotely.</p>
                            <p className="project-description">I was working as a Team Lead for this project.</p>
                        </div>
                        <p className="project-tech">React || Express || Node || Google Map || Travis</p>
                    </div>
                </div>
            </div> */}
            {/* <div className="project-img-container">
                <img className="project-img" src="../static/challengejs.png" alt="javascript"/>
            </div> */}
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
                width: 90%;
                height: 100%;
                margin: auto;
            }
            @media (max-width: 850px) {
                .projects-inner-container {
                    width: 90%;
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
            h3 {
                color: red;
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
            .project {
                width: 50%;
                background-color: black;
                box-shadow: 0px 15px 40px 10px;
                border-radius: 5px;
                padding: 20px;
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
            @media (max-width: 850px) {
                .project {
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