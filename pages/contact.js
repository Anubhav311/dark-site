import React from 'react'
import Layout from '../components/Layout';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope as mail } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn as linkedin, faTwitter as twitter, faGithub as github } from '@fortawesome/free-brands-svg-icons';
// import '@fortawesome/fontawesome-svg-core/styles.css';

let contacts = [
    {
        url: 'https://github.com/Anubhav311',
        icon: github,
        text: '@Anubhav311'
    },
    {
        url: 'https://twitter.com/anubhav_bhambri',
        icon: twitter,
        text: '@anubhav_bhambri'
    },
    {
        url: 'https://www.linkedin.com/in/anubhav-bhambri',
        icon: linkedin,
        text: '@anubhav-bhambri'
    },
]

const Contact = () => (
    <Layout>
        <Head>
            <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css" />
        </Head>
        <div className="contact-container">
            <div className="contact-inner-container">
                <div className="contact-text">
                    <h1>CONTACT</h1>
                    <p>I'm an email away for all your feedback, crazy ideas, working together, to network, geeky talks or just to meet over a coffee.</p>
                </div>
                <div className="contact-details">
                    <a href="mailto:anubhavbhambri1@gmail.com">
                        <div className="contact-medium-container">
                            <FontAwesomeIcon className="icon" icon={mail} size="2x"/>
                            <p className="contact-medium-text">anubhavbhambri1@gmail.com</p>
                        </div>
                    </a>
                    {contacts.map(contact => (
                        <a href={contact.url} target="_blank" rel="noopener noreferrer">
                            <div className="contact-medium-container">
                                <FontAwesomeIcon className="icon" icon={contact.icon} size="2x"/>
                                <p className="contact-medium-text">{contact.text}</p>
                            </div>
                        </a>
                    ))}
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
                    width: 90%;
                    flex-direction: column;
                }
            }
            .contact-text {
                width: 40%;
                height: auto;
            }
            @media (max-width: 850px) {
                .contact-text {
                    margin-left: auto;
                    margin-bottom: 30px;
                    width: 80%;
                    text-align: right;
                }
            }
            .contact-text p {
                text-align: justify;
                letter-spacing: 2px;
                // word-spacing: 5px;
            }
            @media (max-width: 850px) {
                .contact-text p {
                    text-align: justify;
                    letter-spacing: 2px;
                }
            }
            .contact-details {
                width: 40%;
            }
            @media (max-width: 850px) {
                .contact-details {
                    display: flex;
                    width: 80%;
                    margin-left: auto;
                    justify-content: space-between;
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
            .contact-medium-container {
                display: flex;
                align-items: center;
                margin-bottom: 15px;
            }
            .contact-medium-text {
                margin: 0;
            }
            @media (max-width: 850px) {
                .contact-medium-text {
                    display: none;
                }
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