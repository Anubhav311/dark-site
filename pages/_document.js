import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <meta name="description" content="A site for my programming portfolio"/>
                    <meta charset="utf-8" />
                    <meta name="robots" content="noindex, nofollow" />
                    <meta name="viewport" content="width=device-width" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"/>
                    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
                <style global jsx>{`
                    body {
                        // font-family: 'Roboto', sans-serif;
                        margin: 0;
                        padding: 0;
                    }
                    h1, h2, h3, h4, h5, h6, p, ul, li {
                        color: #F4F1F3;
                    }
                `}</style>
            </html>
        )
    }
}