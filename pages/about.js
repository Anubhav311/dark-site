import React from 'react'
import Layout from '../components/Layout';

const About = () => (
    <Layout>
        <div className="about-container">
            <div className="about-text">
                <h1>EXPERIENCE</h1>
                <p>During my three years experience in legal industry, I've learned how to prevent problems. But if you cannot prevent one, I've learned how to find the solution for it.</p>
                <p>I've realized that software industry and legal industry have a lot of similarities. Both industries are complex and almost everything is time-bound with huge penalties.</p>
                <p>During my three years experience in legal industry, I've learned how to prevent problems. But if you cannot prevent one, I've learned how to find the solution for it.</p>
                <p>I've realized that software industry and legal industry have a lot of similarities. Both industries are complex and almost everything is time-bound with huge penalties.</p>
                <p>During my three years experience in legal industry, I've learned how to prevent problems. But if you cannot prevent one, I've learned how to find the solution for it.</p>
                <p>I've realized that software industry and legal industry have a lot of similarities. Both industries are complex and almost everything is time-bound with huge penalties.</p>
            </div>
        </div>
        <style jsx>{`
            .about-container {
                height: 60%;
                position: absolute;
                top: 45%;
                transform: translateY(-45%);
                margin-left: 20px;
                margin-right: 20px;
            }
            .about-text {
                box-sizing: border-box;
                width: 70%;
                height: 100%;
                overflow-y: scroll;
                margin-left: auto;
                padding-right: 20px;
            }
            @media (max-width: 850px) {
                .about-text {
                    width: 90%;
                    // text-align: right;
                }
            }
            // width
            .about-text::-webkit-scrollbar {
                width: 5px;
                border-radius: 5px;
            }

            // Track
            // .about-text::-webkit-scrollbar-track {
            //     background: #f1f1f1; 
            // }

            // Handle
            .about-text::-webkit-scrollbar-thumb {
                background: white; 
                border-radius: 5px;
            }

            // Handle on hover
            .about-text::-webkit-scrollbar-thumb:hover {
                background: #9ac6c9;; 
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
                    p {
                letter-spacing: 3px;
                word-spacing: 5px;        
            }
        `}</style>
    </Layout>
)

export default About;