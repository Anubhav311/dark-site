import React from 'react'

const Home = () => (
  <div className='container-div'>

    <div className='inner-div'>

    </div>

    <style jsx>{`
      .container-div {
        background-color: #4B4B4B;
        width: 100vw;
        height: 100vh;
        display: flex;
      }
      .inner-div {
        width: 85%;
        height: 80%;
        background-color: #333333;
        margin: auto;
        box-shadow: 0px 15px 40px 10px;
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
