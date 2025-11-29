import { Header, Nav, Footer } from '../components'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}