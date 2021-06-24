import React from 'react'

import Layout from '../components/Layout';
import { technologies } from '../data/data';


const Tech = (props) => (
    <Layout>
        <div className="tech-container">
            <div className="tech-inner-container">
                <div className="tech-text">
                    <h1>TECH-STACK</h1>
                    <p>I've been using multiple technologies for creating Full-Stack Web Applications. My favorite is PERN stack but I also have some experience with Next.js and Django.</p>
                </div>
                <div className="tech-list">
                    {technologies.map(tech => (
                        <div className="tech-list-item">
                            <div className="dot"></div>
                            <p>{tech.name}</p>
                            <img className="logo" src={tech.logo} alt="javascript" height="40px"/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <style jsx>{`
            .tech-container {
                height: 60%;
                position: absolute;
                top: 45%;
                transform: translateY(-45%);
                margin-left: 20px;
                margin-right: 20px;
                width: 90%;
            }
            @media (max-width: 850px) {
                .tech-container {
                    top: 40%;
                    transform: translateY(-40%); 
                    height: 65%;
                }
            }
            .tech-inner-container {
                box-sizing: border-box;
                width: 80%;
                height: 100%;
                margin: auto;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            @media (max-width: 850px) {
                .tech-inner-container {
                    width: 90%;
                    flex-direction: column;
                }
            }
            .tech-text {
                width: 40%;
            }
            @media (max-width: 850px) {
                .tech-text {
                    width: 100%;
                }
            }
            .tech-text p {
                letter-spacing: 3px;
                word-spacing: 5px;
                line-height: 20px;
                text-align: justify;
            }
            @media (max-width: 850px) {
                .tech-text p {
                    display: none;
                }
            }
            // width
            .tech-list::-webkit-scrollbar {
                width: 5px;
                border-radius: 5px;
            }

            // Track
            // .about-inner-container::-webkit-scrollbar-track {
            //     background: #f1f1f1; 
            // }

            // Handle
            .tech-list::-webkit-scrollbar-thumb {
                background: none; 
                border-radius: 5px;
            }

            // Handle on hover
            .tech-list::-webkit-scrollbar-thumb:hover {
                background: #9ac6c9;; 
            }
            .tech-list {
                width: 45%;
                height: 100%;
                overflow-y: scroll;
                padding: 25px;
                box-sizing: border-box;
            }
            @media (max-width: 850px) {
                .tech-list {
                    width: 100%;
                }
            }
            .tech-list-item {
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
            .tech-list-item p {
                margin: 0;
            }
            .logo {
                margin-left: auto;
            }
            h1 {
                color: #E6296D;
                letter-spacing: 5px;
            }
            @media (max-width: 850px) {
                h1 {
                    font-size: 1.5rem;
                    margin-left: 25px;
                }
            }
        `}</style>
    </Layout>
)

export default Tech;