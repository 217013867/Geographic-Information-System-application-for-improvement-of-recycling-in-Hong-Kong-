import '../styles/globals.css'
import '../styles/style.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout";


function MyApp({Component, pageProps}) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
