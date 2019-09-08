import React from 'react'
import Layout from '../components/Layout';

const Tech = () => (
    <Layout>
        <div className="about-container">
            <div className="about-text">
                <h1>TECH-STACK</h1>
                <h2>JavaScript || Python || Next || React || Redux || Node || Express || Django || GitHub</h2>
            </div>
        </div>
        <style jsx>{`
            .about-container {
                position: absolute;
                top: 45%;
                transform: translateY(-45%);
                margin-left: 20px;
                margin-right: 20px;
            }
            .about-text {
                box-sizing: border-box;
                width: 70%;
                margin: auto;
            }
            @media (max-width: 850px) {
                .about-text {
                    width: 80%;
                }
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