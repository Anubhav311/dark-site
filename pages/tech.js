import React from 'react'
import Layout from '../components/Layout';

const Tech = () => (
    <Layout>
        <div className="tech-container">
            <div className="tech-inner-container">
                <div className="tech-text">
                    <h1>TECH-STACK</h1>
                    <p>I've been using multiple technologies for creating Full-Stack Web Applications. My favorite is MERN stack but I also have some experience with Django and Python.</p>
                </div>
                <div className="tech-list">
                    <div className="tech-list-item">
                        <div className="dot"></div>
                        <p>JavaScript</p>
                        <img className="logo" src="../static/javascript.png" alt="javascript" height="40px"/>
                    </div>
                    <div className="tech-list-item">
                        <div className="dot"></div>
                        <p>Python</p>
                        <img className="logo" src="../static/python.png" alt="python" height="40px"/>
                    </div>
                    <div className="tech-list-item">
                        <div className="dot"></div>
                        <p>React</p>
                        <img className="logo" src="../static/react.png" alt="react" height="40px"/>
                    </div>
                    <div className="tech-list-item">
                        <div className="dot"></div>
                        <p>Next</p>
                        <img className="logo" src="../static/next_black.png" alt="next" height="40px"/>
                    </div>
                    <div className="tech-list-item">
                        <div className="dot"></div>
                        <p>Redux</p>
                        <img className="logo" src="../static/redux.png" alt="redux" height="40px"/>
                    </div>
                    <div className="tech-list-item">
                        <div className="dot"></div>
                        <p>Node</p>
                        <img className="logo" src="../static/node.png" alt="node" height="40px"/>
                    </div>
                    <div className="tech-list-item">
                        <div className="dot"></div>
                        <p>Express</p>
                        <img className="logo" src="../static/express.png" alt="express" height="35px"/>
                    </div>
                    <div className="tech-list-item">
                        <div className="dot"></div>
                        <p>Django</p>
                        <img className="logo" src="../static/django.png" alt="django" height="40px"/>
                    </div>
                    <div className="tech-list-item">
                        <div className="dot"></div>
                        <p>GirHub</p>
                        <img className="logo" src="../static/github.png" alt="github" height="40px"/>
                    </div>
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
                    width: 80%;
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
                margin-right: 10px;
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
                margin-left: 25px;
            }
            @media (max-width: 850px) {
                h1 {
                    font-size: 1.5rem;
                }
            }
        `}</style>
    </Layout>
)

export default Tech;