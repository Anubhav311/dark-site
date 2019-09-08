import Head from 'next/head';
import Link from 'next/link';

const Layout = ({ children }) => (
    <div className='container-div'>
        <Head>
            <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
        </Head>
    <div className='inner-div'>
        <Link href="/">
            <a>
                <h2><span style={{color: '#E6296D', fontWeight: '900'}}>ANUBHAV</span>  BHAMBRI</h2>
            </a>
        </Link>
        <nav>
            <ul>
                <li><Link href="/about"><a>ABOUT</a></Link></li>
                <li><Link href="/tech"><a>TECH</a></Link></li>
                <li><Link href="/projects"><a>PROJECTS</a></Link></li>
            </ul>  
        </nav>
        {children}
        <p className='contact'>CONTACT</p>
    </div>

    <style jsx>{`
    .container-div {
        background-color: #4B4B4B;
        width: 100vw;
        height: 100vh;
        display: flex;
    }
    .inner-div {
        width: 80%;
        height: 80%;
        background-color: #333333;
        margin: auto;
        box-shadow: 0px 15px 40px 10px;
        padding: 20px;
        position: relative;
    }
    .inner-div h2 {
        margin: 0;
        font-weight: 400;
        letter-spacing: -2px;
        word-spacing: 3px;
    }
    @media (max-width: 850px) {
        .inner-div h2 {
            font-size: 1.2rem;
        }
    }
    nav{
        margin-top: 100px;
        transform-origin: left top;
        transform: rotate(-90deg) translateX(-100%);  
        width: 50vh;
        height: auto;
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
        // flex: 1;
        margin-left: 25px;

        font-size: 0.8rem;
    }
    a{  
        // flex:1;
        color:#F4F1F3;
        transition: color .5s;
        display: block;
        text-decoration: none;
        color: #C7C7C7;
        letter-spacing: 3px;
    }    
    a:hover{ 
        // background: black;
        // color:white;
        cursor: pointer;
    }      
    .contact {
        margin: 0;
        position: absolute;
        bottom: 20px;
        right: 20px;
        letter-spacing: 3px;
        padding-bottom: 8px;
        font-size: 0.9rem;
    }
    .contact:before{
        content: "";
        position: absolute;
        width: 70%;
        height: 1px;
        bottom: 0;
        left: 15%;
        border-bottom: 2px solid #E6296D;
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