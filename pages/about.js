import React from 'react'
import Layout from '../components/Layout';

const About = () => (
    <Layout>
        <div className="about-container">
            <h1>EXPERIENCE</h1>
            <p>During my three years experience in legal industry, I've learned how to prevent problems. But if you cannot prevent one, I've learned how to find the solution for it.</p>
            <p>I've realized that software industry and legal industry have a lot of similarities. Both industries are complex and almost everything is time-bound with huge penalties.</p>
            <p>During my three years experience in legal industry, I've learned how to prevent problems. But if you cannot prevent one, I've learned how to find the solution for it.</p>
            <p>I've realized that software industry and legal industry have a lot of similarities. Both industries are complex and almost everything is time-bound with huge penalties.</p>
        </div>
        <style jsx>{`
            .about-container {
                width: 70%;
                margin: auto;
            }
            h1 {
                color:#E6296D;
            }
        `}</style>
    </Layout>
)

export default About;