import React from 'react'
import Layout from '../components/Layout';

const About = () => (
    <Layout>
        <div className="about-container">
            <div className="about-inner-container">
                <h1>ABOUT</h1>
                <p>I like teaching</p>
                <p>I used to work as a corporate lawyer</p>
                <p>I'm a Lambda School graduate</p>
                <p>I like reading books, startups, swimming and table tennis</p>
                <p>I like making friends. So don't hesitate to reach out if you think we can be friends.</p>
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
            .about-inner-container {
                box-sizing: border-box;
                width: 70%;
                height: 100%;
                overflow-y: scroll;
                margin: auto;
                padding-right: 40px;
            }
            @media (max-width: 850px) {
                .about-inner-container {
                    width: 90%;
                    margin-left: auto;
                    padding-right: 20px;
                }
            }
            // width
            .about-inner-container::-webkit-scrollbar {
                width: 5px;
                border-radius: 5px;
            }

            // Track
            // .about-inner-container::-webkit-scrollbar-track {
            //     background: #f1f1f1; 
            // }

            // Handle
            .about-inner-container::-webkit-scrollbar-thumb {
                background: white; 
                border-radius: 5px;
            }

            // Handle on hover
            .about-inner-container::-webkit-scrollbar-thumb:hover {
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