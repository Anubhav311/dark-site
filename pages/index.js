import React from 'react'

const Home = () => (
  <div className='container-div'>
    <div className='inner-div'>

    </div>

    <style jsx>{`
      .container-div {
        background-color: black;
        width: 100vw;
        height: 100vh;
        display: flex;
      }
      .inner-div {
        width: 85%;
        height: 80%;
        background-color: red;
        margin: auto;
      }
    `}</style>
    <style global jsx>{`
      body {
          margin: 0;
          padding: 0;
      }
    `}</style>
  </div>
)

export default Home
