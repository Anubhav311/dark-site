import React from 'react'
import Layout from '../components/Layout';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope as mail } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn as linkedin, faTwitter as twitter, faGithub as github } from '@fortawesome/free-brands-svg-icons';
// import '@fortawesome/fontawesome-svg-core/styles.css';


const Contact = () => (
    <Layout>
        <Head>
            <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css" />
        </Head>
        <div className="contact-container">
            <div className="contact-inner-container">
                <div className="contact-text">
                    <h1>CONTACT</h1>
                    <p>You have any assignment, job or would just like me to collaborate on some project, feel free to reach out.</p>
                </div>
                <div className="contact-details">
                    <a href="mailto:anubhavbhambri1@gmail.com">
                        <div className="contact-medium-container">
                            <FontAwesomeIcon className="icon" icon={mail} size="2x"/>
                            <p>anubhavbhambri1@gmail.com</p><i class="far fa-envelope"></i>
                        </div>
                    </a>
                    <a href="https://github.com/Anubhav311" target="_blank" rel="noopener noreferrer">
                        <div className="contact-medium-container">
                            <FontAwesomeIcon className="icon" icon={github} size="2x"/>
                            <p>github.com/Anubhav311</p>
                        </div>
                    </a>
                    <a href="https://twitter.com/anubhav_bhambri" target="_blank" rel="noopener noreferrer">
                        <div className="contact-medium-container">
                            <FontAwesomeIcon className="icon" icon={twitter} size="2x"/>
                            <p>twitter.com/anubhav_bhambri</p>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/anubhav-bhambri" target="_blank" rel="noopener noreferrer">
                        <div className="contact-medium-container">
                            <FontAwesomeIcon className="icon" icon={linkedin} size="2x"/>
                            <p>linkedin.com/in/anubhav-bhambri</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <style>{`
            .contact-container {
                position: absolute;
                top: 45%;
                transform: translateY(-45%);
                margin-left: 20px;
                margin-right: 20px;
            }
            .contact-inner-container {
                box-sizing: border-box;
                width: 70%;
                margin: auto;
                display: flex;
                justify-content: space-between;
                align-content: center;
            }
            @media (max-width: 850px) {
                .contact-inner-container {
                    width: 80%;
                }
            }
            .contact-text {
                width: 40%;
                height: auto;
            }
            .contact-details {
                width: 40%;
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
            .contact-medium-container {
                display: flex;
                align-items: center;
            }
            .icon {
                color: #E6296D;
                margin-right: 5px;
            }
            a {
                text-decoration: none;
            }
        `}</style>
    </Layout>
)

export default Contact