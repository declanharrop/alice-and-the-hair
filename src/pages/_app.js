import CookieConsent from 'react-cookie-consent';
import Hotbar from '../Components/Navigation/Hotbar';
import Globalstyle from '../styles/Global.styles';
import Typography from '../styles/Typography.styles';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Globalstyle />
      <Typography />
      <Component {...pageProps} />
      <Hotbar />
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
    </>
  );
}

export default MyApp;
