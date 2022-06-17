import '../styles/globals.css'
import NavBar from '../components/Navbar'
function MyApp({ Component, pageProps }) {
  return( 
    <div>
      <NavBar />
      <Component {...pageProps} />

    </div>
  )
}

export default MyApp
