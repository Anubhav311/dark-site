import React from 'react'
import Layout from '../components/Layout';

const Tech = () => (
    <Layout>
        <div className="tech-container">
            <div className="tech-inner-container">
                <h1>TECH-STACK</h1>
                <h2>JavaScript || Python || Next || React || Redux || Node || Express || Django || GitHub</h2>
            </div>
        </div>
        <style jsx>{`
            .tech-container {
                position: absolute;
                top: 45%;
                transform: translateY(-45%);
                margin-left: 20px;
                margin-right: 20px;
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