import { createGlobalStyle } from 'styled-components';

const Globalstyle = createGlobalStyle`
  /* @font-face {
    font-family: 'LemonMilk';
    src: url('/LemonMilk.woff2')
    format('woff2');
    font-weight: normal;
    font-style: normal;
  } */
  :root {
    --black: #393939;
    --grey: #3A3A3A;
    --lightGrey: #E1E1E1;
    --offWhite: #ededed;
    --peach: #FFA289;
    --pink: #FFA289;
    --pinkf: #ffa389b7;
    --peachf: #E9958B85;
    --navy: #BD9463;
    --navyf: rgba(64, 84, 117, 0.7);
    --navyxf: rgba(64, 84, 117, 0.5);
    --navyxxf: rgba(64, 84, 117, 0.2);
    --cream: #FFF7DC;
    --green: #FFF7DC;
    --darkBrown: #603B0E;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  * {
    margin: 0;
    padding: 0;
  }
  body {
    background: var(--cream);
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Josefin Sans', --apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    text-align: center;
    letter-spacing: 0.1rem;
    font-size: 1.6rem;
    line-height: 1.6;
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  button {
    font-weight: 500;
    font-family: 'Josefin Sans', --apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    transition: ease-in-out 0.3s;
    font-size: 1.6rem;
    letter-spacing: 0.5rem;
    text-transform: uppercase;
    cursor: pointer;
    &:hover {
      background: white;
      color: var(--navy);
    }

  }
  a {
    text-decoration: none;
  }
  .universal-button {
    margin: 30px 20px;
    padding: 16px 26px;
    color: white;
    background: none;
    border: 2px solid white;
    border-radius : 0px;
  }
  .booking {
    height: 100vh;
    width: 100%;
  }
  .booking-page {
    height: 100%;
    width: 100%;
  }
  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 20px; 
  }
  @media screen and (max-width: 560px) {
    body {
      margin: 0;
      width: 100%;
    }
    .booking {
      height: calc(100vh - 130px);
    }
  }
  
  `;

export default Globalstyle;
