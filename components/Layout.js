import Head from 'next/head';

const Layout = ({ children }) => (
    <div className='container-div'>
        <Head>
            <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
        </Head>
    <div className='inner-div'>
        <h2><span style={{color: '#E6296D'}}>ANUBHAV</span> BHAMBRI</h2>
        <nav>
            <ul>
                <li><a href="">ABOUT</a></li>
                <li><a href="">TECH</a></li>
                <li><a href="">PROJECTS</a></li>
            </ul>  
        </nav>
        {children}
        <p className='contact'>CONTACT</p>
    </div>

    <style jsx>{`
    .test {
        float: left;
        display: block;
    }
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
        padding: 20px;
        position: relative;
    }
    .inner-div h2 {
        margin: 0;
    }
    nav{
        margin-top: 30px;
        transform-origin: left top;
        transform: rotate(-90deg) translateX(-100%);  
        width: 65vh;
        height: auto;
        // background-color: white;
    }      
    ul{
        display:flex;
        flex-flow: row wrap;
        align-items: center;
    }
    li{
        // border: 1px solid;
        
        height: auto;
        list-style: none;
        color: white;
        text-align: center;
        transition: background .5s;
        
        display: flex;
        align-items: center;
        flex: 1;
    }
    a{  
        flex:1;
        color:#F4F1F3;
        transition: color .5s;
        display: block;
        text-decoration: none;
    }    
    a:hover{ 
        background: black;
        color:white;
    }      
    .contact {
        margin: 0;
        position: absolute;
        bottom: 20px;
        right: 20px;
    }
    `}</style>
    <style global jsx>{`
    body {
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
    }
    h1, h2, h3, h4, h5, h6, p, ul, li {
        color: #F4F1F3;
    }
    `}</style>
</div>
)

export default Layout;