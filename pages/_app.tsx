import '../styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.css" />
                <script async src="https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.js"></script>
                <div hidden id="snipcart" data-api-key="YzAwNWM2MTctOWZlNy00YjE1LTlkNGItZDg2NjRmMmJiYWZkNjM4NzIwMTM0Njc0NTc3MDcz"></div>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
