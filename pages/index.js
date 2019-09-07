import React from 'react'
import Layout from '../components/Layout';

const Home = () => (
  <Layout>
    <div className="home-container">
      <h1 style={{fontFamily: 'Roboto'}}><span className="coder">CODER</span><br/> DEVELOPER</h1>
      <p>I'm Anubhav, a corporate law professional turned full-stack web developer and a huge fan of MCU superhero Iron Man.</p>
    </div>
    <style jsx>{`
      .home-container {
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: absolute;
        top: 45%;
        transform: translateY(-45%);
      }
      @media (max-width: 850px) {
        .home-container {
          flex-direction: column;
          padding: 20px;
        }
      }
      .home-container p {
        width: 30%;
        letter-spacing: 3px;
        word-spacing: 5px;
      }
      @media (max-width: 850px) {
        .home-container p {
          margin-left: auto;
          width: 60%;
          text-align: right;
        }
      }
      .home-container h1 {
        font-size: 3rem;
        margin: 0;
        letter-spacing: 10px;
      }
      @media (max-width: 850px) {
        .home-container h1 {
          font-size: 1.5rem;
          margin-left: auto;
          text-align: right;
          margin-bottom: 10%;
        }
      }
      .coder {
        color: #E6296D;
        font-size: 6.2rem;
      }
      @media (max-width: 850px) {
        .home-container .coder {
          font-size: 4rem;
        }
      }
    `}</style>
  </Layout>
)

export default Home
