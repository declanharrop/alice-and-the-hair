import styled from 'styled-components';

const XmasMenuStyles = styled.div`
  background-color: var(--navy);
  padding: 5vh 10px;
  color: var(--peach);
  h1 {
    margin-bottom: 50px;
  }
  main {
    max-width: 1200px;
    margin: 0 auto;
    .item {
      margin-top: 30px;
      margin-bottom: 60px;
    }
    h3 {
      font-size: 2.6rem;
      letter-spacing: 0.4rem;
    }
    h5 {
      margin-top: 20px;
      font-size: 2.2rem;
      letter-spacing: 0.1rem;
      text-transform: none;
    }
  }
  @media screen and (max-width: 560px) {
    h1 {
      font-size: 4rem;
    }
    main {
      h2 {
        font-size: 2.6rem;
        letter-spacing: 0.4rem;
      }
      h3 {
        font-size: 2rem;
        letter-spacing: 0.4rem;
      }
    }
  }

  /* customizable snowflake styling */
  .snowflake {
    color: #fff;
    font-size: 1em;
    font-family: Arial, sans-serif;
    text-shadow: 0 0 5px #000;
  }

  @-webkit-keyframes snowflakes-fall {
    0% {
      top: -10%;
    }
    100% {
      top: 100%;
    }
  }
  @-webkit-keyframes snowflakes-shake {
    0%,
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    50% {
      -webkit-transform: translateX(80px);
      transform: translateX(80px);
    }
  }
  @keyframes snowflakes-fall {
    0% {
      top: -10%;
    }
    100% {
      top: 100%;
    }
  }
  @keyframes snowflakes-shake {
    0%,
    100% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(80px);
    }
  }
  .snowflake {
    position: fixed;
    top: -10%;
    z-index: 9999;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: default;
    -webkit-animation-name: snowflakes-fall, snowflakes-shake;
    -webkit-animation-duration: 10s, 3s;
    -webkit-animation-timing-function: linear, ease-in-out;
    -webkit-animation-iteration-count: infinite, infinite;
    -webkit-animation-play-state: running, running;
    animation-name: snowflakes-fall, snowflakes-shake;
    animation-duration: 10s, 3s;
    animation-timing-function: linear, ease-in-out;
    animation-iteration-count: infinite, infinite;
    animation-play-state: running, running;
  }
  .snowflake:nth-of-type(0) {
    left: 1%;
    -webkit-animation-delay: 0s, 0s;
    animation-delay: 0s, 0s;
  }
  .snowflake:nth-of-type(1) {
    left: 10%;
    -webkit-animation-delay: 1s, 1s;
    animation-delay: 1s, 1s;
  }
  .snowflake:nth-of-type(2) {
    left: 20%;
    -webkit-animation-delay: 6s, 0.5s;
    animation-delay: 6s, 0.5s;
  }
  .snowflake:nth-of-type(3) {
    left: 30%;
    -webkit-animation-delay: 4s, 2s;
    animation-delay: 4s, 2s;
  }
  .snowflake:nth-of-type(4) {
    left: 40%;
    -webkit-animation-delay: 2s, 2s;
    animation-delay: 2s, 2s;
  }
  .snowflake:nth-of-type(5) {
    left: 50%;
    -webkit-animation-delay: 8s, 3s;
    animation-delay: 8s, 3s;
  }
  .snowflake:nth-of-type(6) {
    left: 60%;
    -webkit-animation-delay: 6s, 2s;
    animation-delay: 6s, 2s;
  }
  .snowflake:nth-of-type(7) {
    left: 70%;
    -webkit-animation-delay: 2.5s, 1s;
    animation-delay: 2.5s, 1s;
  }
  .snowflake:nth-of-type(8) {
    left: 80%;
    -webkit-animation-delay: 1s, 0s;
    animation-delay: 1s, 0s;
  }
  .snowflake:nth-of-type(9) {
    left: 90%;
    -webkit-animation-delay: 3s, 1.5s;
    animation-delay: 3s, 1.5s;
  }
  .snowflake:nth-of-type(10) {
    left: 25%;
    -webkit-animation-delay: 2s, 0s;
    animation-delay: 2s, 0s;
  }
  .snowflake:nth-of-type(11) {
    left: 65%;
    -webkit-animation-delay: 4s, 2.5s;
    animation-delay: 4s, 2.5s;
  }
`;

export default XmasMenuStyles;
