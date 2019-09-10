import React from 'react'
import Layout from '../components/Layout';

const Tech = () => (
    <Layout>
        <div className="tech-container">
            <div className="tech-inner-container">
                <h1>TECH-STACK</h1>
                <div className="tech-logos">
                    <div className="logo-batch">
                        <img className="tech-logo" src="../static/js.png" alt="redux" height="50px"/>
                        <img src="../static/python.png" alt="python" height="50px"/>
                        <img src="../static/react.png" alt="react" height="50px"/>
                    </div>
                    <div className="logo-batch">
                        <img src="../static/next.png" alt="next" height="50px"/>
                        <img src="../static/redux.png" alt="redux" height="50px"/>
                        <img src="../static/node.png" alt="node" height="50px"/>
                    </div>
                    <div className="logo-batch">
                        <img src="../static/express.png" alt="express" height="50px"/>
                        <img src="../static/django.png" alt="django" height="50px"/>
                        <img src="../static/github.png" alt="github" height="50px"/>
                    </div>
                </div>
            </div>
        </div>
        <style jsx>{`
            .tech-container {
                position: absolute;
                top: 45%;
                transform: translateY(-45%);
                margin-left: 20px;
                margin-right: 20px;
                width: 100%;
            }
            .tech-inner-container {
                box-sizing: border-box;
                width: 70%;
                margin: auto;
            }
            @media (max-width: 850px) {
                .tech-inner-container {
                    width: 80%;
                }
            }
            .logo-batch {
                display: flex;
                width: 100%;
                justify-content: space-evenly;
            }
            .tech-logos {
                display: flex;
                flex-direction: column;
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
            h2 {
                font-weight: 400;
                word-spacing: 40px;
            }
        `}</style>
    </Layout>
)

export default Tech;