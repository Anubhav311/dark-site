import React from 'react'
import Layout from '../components/Layout';

const Home = () => (
  <Layout>
    <div className="home-container">
      <h1 style={{fontFamily: 'Roboto'}}><span style={{color: '#E6296D'}}>CODER</span><br/> DEVELOPER</h1>
      <p>I'm Anubhav, a corporate law professional turned full-stack web developer and a huge fan of MCU superhero Iron Man.</p>
    </div>
    <style jsx>{`
      .home-container {
        display: flex;
        justify-content: space-around;
        // padding-left: ;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
      .home-container p {
        width: 30%;
      }
      .home-container h1 {
        font-size: 4rem;
        margin: 0;
      }
    `}</style>
  </Layout>
)

export default Home
