import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub as github } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt as link, faEnvelope as mail } from '@fortawesome/free-solid-svg-icons';

import Layout from '../components/Layout';
import { projects } from '../data/data';

const Projects = (props) => (
    <Layout title={props.url.pathname}>

        <div className="projects-container">
            <div className="projects-inner-container">
                <div className="header">
                    <div className="column-item">
                        <p>TITLE</p>
                    </div>
                    <div className="column-item">
                        <p>DESCRIPTION</p>
                    </div>
                    <div className="column-item">
                        <p>ROLE</p>
                    </div>
                    <div className="column-item">
                        <p>TECH-STACK</p>
                    </div>
                    <div className="column-item">
                        <p>LINKS</p>
                    </div>
                </div>
                <div className="projects-list">
                    {projects.map(project => (
                        <div className="project-item">
                            <div className="column-item">
                                <p style={{color: "#4B4B4B", letterSpacing: "1px"}}>{project.title}</p>
                            </div>
                            <div className="column-item">
                                <p style={{color: "#4B4B4B", letterSpacing: "1px"}}>{project.description}</p>
                            </div>
                            <div className="column-item">
                                <p style={{color: "#4B4B4B", letterSpacing: "1px"}} className="">{project.role}</p>
                            </div>
                            <div className="column-item">
                                <p style={{color: "#4B4B4B", letterSpacing: "1px"}} className="">{project.tech}</p>
                            </div>
                            <div className="column-item" style={{display: "flex", justifyContent: "center"}}>
                                <div style={{width: "40%", height: "100%", borderRight: "1px solid #4B4B4B"}}>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon style={{color: "#4B4B4B"}} className="icon" icon={github} size="2x"/>
                                    </a>
                                </div>
                                <div style={{width: "40%", height: "100%"}}>
                                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon style={{color: "#4B4B4B", marginLeft: "15px"}} icon={link} size="2x"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* {projects.map(project => (
                        <div className="project-list-item">
                            <div className="content-overlay"></div>
                            <img className="project-image" src={project.image} alt="anubhav" height="200px"/>
                            <div className="project-content-container fadeIn-bottom">
                                <div className="project-card-divider">
                                    <div className="project-card-header">
                                        <h1>{project.title}</h1>
                                        <div className="project-links">
                                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                <FontAwesomeIcon style={{color: "#4B4B4B"}} className="icon" icon={github} size="2x"/>
                                            </a>
                                            <a href={project.url} target="_blank" rel="noopener noreferrer">
                                                <FontAwesomeIcon style={{color: "#4B4B4B", marginLeft: "15px"}} icon={link} size="2x"/>
                                            </a>
                                        </div>
                                    </div>
                                    <p className="project-description" style={{marginBottom: "20px"}}>{project.description}</p>
                                    <p className="project-description mobile-view-hide" style={{marginBottom: "40px"}}>{project.role}</p>
                                </div>
                                <p className="project-tech mobile-view-hide">{project.tech}</p>
                            </div>
                        </div>
                    ))} */}
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
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
            }
            @media (max-width: 850px) {
                .projects-inner-container {
                    width: 90%;
                }
            }
            .header {
                box-sizing: border-box;
                width: 100%;
                padding-right: 25px;
                padding-left: 25px;
                display: flex;
                justify-content: space-between;
                font-size: 0.8rem;
                letter-spacing: 2px;
            }
            h1 {
                color: #E6296D;
                letter-spacing: 5px;
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
            @media (max-width: 850px) {
                .mobile-view-hide {
                    display: none;
                }
            }
            .projects-list {
                width: 100%;
                height: 100%;
                overflow-y: scroll;
                // padding: 25px;
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

            .project-item {
                display: flex;
                justify-content: space-between;
                background-color: black;
                padding: 10px;
                font-size: 0.8rem;
                align-items: center;
                margin: auto;
                width: 95%;
                height: 100px;
                box-sizing: border-box;
                margin-bottom: 50px;
                margin-top: 30px;
                align-items: center;
                border-radius: 10px;
                box-shadow: 0px 5px 20px 5px;
            }

            .column-item {
                width: 20%;
                // height: 100%;
                text-align: center;
                padding: 5px;
                box-sizing: border-box;
            }









            .project-card-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 20px;
            }

            // Handle
            .projects-list::-webkit-scrollbar-thumb {
                background: none; 
                border-radius: 5px;
            }

            // Handle on hover
            .projects-list::-webkit-scrollbar-thumb:hover {
                background: #9ac6c9;; 
            }

            .content-overlay {
                background: rgba(0,0,0,0.7);
                position: absolute;
                height: 100%;
                width: 100%;
                left: 0;
                top: 0;
                bottom: 0;
                right: 0;
                opacity: 0;
                -webkit-transition: all 0.4s ease-in-out 0s;
                -moz-transition: all 0.4s ease-in-out 0s;
                transition: all 0.4s ease-in-out 0s;
            }

            .project-list-item:hover .content-overlay{
                opacity: 1;
            }

            .project-content-container {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                position: absolute;
                width: 95%;
                height: auto;
                top: 50%;
                left: 50%;
                opacity: 0;
                -webkit-transform: translate(-50%, -50%);
                -moz-transform: translate(-50%, -50%);
                transform: translate(-50%, -50%);
                -webkit-transition: all 0.3s ease-in-out 0s;
                -moz-transition: all 0.3s ease-in-out 0s;
                transition: all 0.3s ease-in-out 0s;
            }

            .project-list-item:hover .project-content-container{
                top: 50%;
                left: 50%;
                opacity: 1;
            }

            .fadeIn-bottom{
                top: 80%;
            }

            .project-list-item {
                width: 100%;
                height: 300px;
                box-sizing: border-box;
                // background-color: black;
                margin-bottom: 30px;
                // padding: 20px;
                border-radius: 5px;
                box-shadow: 0px 5px 20px 5px;
                position: relative;
                overflow: hidden;
            }
            .project-image {
                width: 100%;
                height: 100%;
                position: absolute;
                background: no-repeat;
                z-index: -1;
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
        `}</style>
    </Layout>
)

export default Projects;