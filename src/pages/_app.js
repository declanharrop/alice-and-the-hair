import CookieConsent from 'react-cookie-consent';
import { AnimateSharedLayout, motion } from 'framer-motion';
import Footer from '../Components/Footer/Footer';
import Hotbar from '../Components/Navigation/Hotbar';
import { SiteProvider } from '../Context/SiteContext';
import Globalstyle from '../styles/Global.styles';
import Typography from '../styles/Typography.styles';

function MyApp({ Component, pageProps }) {
  return (
    <SiteProvider>
      <Globalstyle />
      <Typography />
      <AnimateSharedLayout>
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Component {...pageProps} />
        </motion.main>
      </AnimateSharedLayout>
      <Hotbar />
      <Footer />
      <CookieConsent
        location="top"
        buttonText="Im cool with that"
        cookieName="Alice and the Hair Cookie Consent v3"
        style={{
          background: 'var(--navyf)',
          boxShadow: 'var(--cream)',
          fontSize: '14px',
          fontWeight: '500',
        }}
        buttonStyle={{
          background: 'var(--peach)',
          color: 'var(--navy)',
          fontSize: '12px',
        }}
        expires={150}
      >
        By using this website you agree to the use of cookies to enhance the
        user experience.
      </CookieConsent>
    </SiteProvider>
  );
}

export default MyApp;
