import CookieConsent from 'react-cookie-consent';
import GlobalStyle from '../styles/GlobalStyles';
import { MenuProvider } from '../Context/MenuContext';
import Footer from '../Components/Footer/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <MenuProvider>
      <GlobalStyle />
      <Component {...pageProps} />
      <CookieConsent
        location="top"
        buttonText="Im cool with that"
        cookieName="Alice and the Hair Cookie Consent"
        style={{ background: '', boxShadow: '' }}
        buttonStyle={{
          background: '',
          color: '',
          fontSize: '14px',
        }}
        expires={150}
      >
        By using this website you agree to the use of cookies to enhance the
        user experience.
      </CookieConsent>
    </MenuProvider>
  );
}

export default MyApp;
