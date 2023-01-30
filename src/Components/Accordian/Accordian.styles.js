import styled from 'styled-components';

const AccordianStyles = styled.div`
  margin: -15vh 0 0 0;
  padding: 10vh 20px 5vh;
  background: var(--green);
  color: var(--darkBrown);
  .inner {
    padding: 10vw 0;
    .header {
      display: flex;
      justify-content: center;
      padding: 40px 20px;
      .title {
        margin: 0 20px;
        cursor: pointer;
        .active {
          color: var(--darkBrown);
          font-weight: 800;
          letter-spacing: 0.3rem;
        }
        .inactive {
          font-weight: 100;
          letter-spacing: 0.3rem;
          color: var(--darkBrown);
          opacity: 0.6;
        }
      }
      h3 {
        color: var(--darkBrown);
        font-size: 3rem;
      }
    }
    .lower {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      max-width: 1000px;
      margin: 0 auto;
      .text {
        margin: 20px;
        p {
          letter-spacing: 0.2rem;
          text-transform: uppercase;
        }
        .cost {
          font-weight: 600;
          letter-spacing: 0.1rem;
        }
        span {
          font-weight: 400;
          font-size: 1rem;
          letter-spacing: 0.1rem;
        }
      }
    }
  }
  @media only screen and (max-width: 500px) {
    .title {
      h3 {
        font-size: 2rem;
      }
    }
  }
`;

export default AccordianStyles;
