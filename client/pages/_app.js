import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import Script from 'next/script';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider attribute="class">
    <div className="dark:bg-nft-dark bg-white min-h-screen">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
    <Script src="https://kit.fontawesome.com/39505310bd.js" crossOrigin="anonymous" />
  </ThemeProvider>
);

export default MyApp;
