import { createGlobalStyle } from 'styled-components';

const Globalstyle = createGlobalStyle`
  @font-face {
    font-family: 'LemonMilk';
    src: url('/LemonMilk.woff2')
    format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  :root {
    --black: #393939;
    --grey: #3A3A3A;
    --lightGrey: #E1E1E1;
    --offWhite: #ededed;
    --peach: #E9958B;
    --peachf: #E9958B85;
    --navy: #405475;
    --navyf: rgba(64, 84, 117, 0.7);
    --navyxf: rgba(64, 84, 117, 0.5);
    --cream: #EAE0D0;
    --green: #5F7C5E;
  }
  html {
    box-sizing: border-box;
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
    font-family: 'Raleway', --apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    text-align: center;
    letter-spacing: 0.1rem;
    font-size: 1.6rem;
    line-height: 1.6;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  button {
    font-weight: 400;
    font-family: 'Raleway', --apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    transition: ease-in-out 0.3s;
    font-size: 1.5rem;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    padding: 2px 18px;
    color: white;
    border-radius: 20px;
    cursor: pointer;
    &:hover {
      background: white;
    }
  }
  a {
    text-decoration: none;
  }
`;

export default Globalstyle;
