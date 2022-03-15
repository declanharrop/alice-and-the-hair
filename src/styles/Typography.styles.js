import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
  h1 {
    font-family: 'LemonMilk', 'Raleway', sans-serif;
    letter-spacing: 0.7rem;
    font-size: 5.4rem;
    line-height: 1.6;
  }
  h2 {
    letter-spacing: 0.5rem;
    font-size: 5rem;
    line-height: 1.2;
    font-weight: 700;
    text-transform: uppercase;
  }
  h3 {
    letter-spacing: 1rem;
    font-size: 4rem;
    line-height: 1.2;
    font-weight: 200;
    text-transform: uppercase;
  }
  h4 {
    letter-spacing: 1rem;
    font-size: 3.6rem;
    line-height: 1.4;
    font-weight: 200;
    text-transform: uppercase;
  }
  h5 {
    letter-spacing: 0.5rem;
    font-size: 3.2rem;
    line-height: 1.4;
    font-weight: 400;
    text-transform: uppercase;
  }
  p {
    letter-spacing: 0.1rem;
    font-size: 1.8rem;
    line-height: 1.6;
    font-weight: 400;
  }
  @media screen and (max-width: 560px) {
    h1 {
      font-size: 3rem;
      letter-spacing: 0.3rem;
    }
    h2 {
      font-size: 3.6rem;
    }
    h3 {
      font-size: 3rem;
    }
    h4 {
      font-size: 2.6rem;
    }
    h5 {
      font-size: 2.2rem;
    }
    p {
      font-size: 1.6rem;
    }
  }
`;

export default Typography;
