import React from 'react'
import Layout from '../components/Layout';

const Tech = () => (
    <Layout>
        <div className="tech-container">
            <div className="tech-inner-container">
                <h1>TECH-STACK</h1>
                <div className="tech-logos">
                    <div className="logo-container">
                        <img src="../static/javascript.png" alt="javascript" height="40px"/>
                        <p>JavaScript</p>
                    </div>
                    <div className="logo-container">
                        <img src="../static/python.png" alt="python" height="40px"/>
                        <p>Python</p>
                    </div>
                    <div className="logo-container">
                        <img src="../static/react.png" alt="react" height="40px"/>
                        <p>React</p>
                    </div>
                    <div className="logo-container">
                        <img src="../static/next.png" alt="next" height="40px"/>
                        <p>Next</p>
                    </div>
                    <div className="logo-container">
                        <img src="../static/redux.png" alt="redux" height="40px"/>
                        <p>Redux</p>
                    </div>
                    <div className="logo-container">
                        <img src="../static/node.png" alt="node" height="40px"/>
                        <p>Node</p>
                    </div>
                    <div className="logo-container">
                        <img src="../static/express.png" alt="express" height="40px"/>
                        <p>Express</p>
                    </div>
                    <div className="logo-container">
                        <img src="../static/django.png" alt="django" height="40px"/>
                        <p>Django</p>
                    </div>
                    <div className="logo-container">
                        <img src="../static/github.png" alt="github" height="40px"/>
                        <p>GitHub</p>
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
            .tech-inner-container {
                box-sizing: border-box;
                width: 70%;
                height: 90%;
                margin: auto;
            }
            @media (max-width: 850px) {
                .tech-inner-container {
                    width: 80%;
                }
            }
            .tech-logos {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                height: 100%;
                overflow-y: scroll;
            }
            @media (max-width: 850px) {
                .tech-logos {
                    justify-content: flex-start;
                }
            }
            // width
            .tech-logos::-webkit-scrollbar {
                width: 5px;
                border-radius: 5px;
            }

            // Track
            // .about-inner-container::-webkit-scrollbar-track {
            //     background: #f1f1f1; 
            // }

            // Handle
            .tech-logos::-webkit-scrollbar-thumb {
                background: white; 
                border-radius: 5px;
            }

            // Handle on hover
            .tech-logos::-webkit-scrollbar-thumb:hover {
                background: #9ac6c9;; 
            }
            .logo-container {
                width: 30%;
                text-align: center;
                margin-bottom: 20px;
            }
            @media (max-width: 850px) {
                .logo-container {
                    width: 45%;
                }
            }
            .logo-container p {
                margin: 0;
                font-size: 0.8rem;
            }
            h1 {
                color: #E6296D;
                letter-spacing: 5px;
                margin-left: 10%;
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