import React from 'react'
import Layout from '../components/Layout';

const Projects = () => (
    <Layout>
        <div className="projects-container">
            <div className="projects-inner-container">
                <h1>PROJECTS</h1>
                <p>During my three years experience in legal industry, I've learned how to prevent problems. But if you cannot prevent one, I've learned how to find the solution for it.</p>
                <p>I've realized that software industry and legal industry have a lot of similarities. Both industries are complex and almost everything is time-bound with huge penalties.</p>
            </div>
        </div>
        <style jsx>{`
            .projects-container {
                position: absolute;
                top: 45%;
                transform: translateY(-45%);
                margin-left: 20px;
                margin-right: 20px;
            }
            .projects-inner-container {
                box-sizing: border-box;
                width: 70%;
                margin: auto;
            }
            @media (max-width: 850px) {
                .projects-inner-container {
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
        `}</style>
    </Layout>
)

export default Projects;