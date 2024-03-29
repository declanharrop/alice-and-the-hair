import styled from 'styled-components';

const CardSectionStyles = styled.div`
  max-width: 1400px;
  margin: 20px auto;
  padding: 20px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  .card-section-container {
    display: grid;
    grid-gap: 40px;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
  .rotating-card {
    .card-front {
      height: 440px;
      background: var(--pink);
      position: relative;
      box-shadow: 0 0 10px 0px var(--pinkf);
      .maternity {
        background: var(--pink);
        padding: 8px 16px;
        transform: rotate(-8deg);
        border-radius: 30px;
        position: absolute;
        top: 20px;
        left: 10px;
        color: var(--darkBrown);
        p {
          font-size: 1.5rem;
          font-weight: 500;
          text-transform: uppercase;
        }
      }
      .ping {
        position: absolute;
        z-index: 1;
        background-color: var(--pink);
        margin: 10px 0 0 10px;
        height: 40px;
        width: 40px;
        border-radius: 20px;
        -webkit-animation: ping 1.2s ease-in-out infinite both;
        animation: ping 1.2s ease-in-out infinite both;
      }
      @-webkit-keyframes ping {
        0% {
          -webkit-transform: scale(0.2);
          transform: scale(0.2);
          opacity: 0.8;
        }
        80% {
          -webkit-transform: scale(1.2);
          transform: scale(1.2);
          opacity: 0;
        }
        100% {
          -webkit-transform: scale(2.2);
          transform: scale(2.2);
          opacity: 0;
        }
      }
      @keyframes ping {
        0% {
          -webkit-transform: scale(0.2);
          transform: scale(0.2);
          opacity: 0.8;
        }
        80% {
          -webkit-transform: scale(1.2);
          transform: scale(1.2);
          opacity: 0;
        }
        100% {
          -webkit-transform: scale(2.2);
          transform: scale(2.2);
          opacity: 0;
        }
      }

      .clickme {
        background: var(--pinkf);
        position: absolute;
        z-index: 100;
        top: 0;
        left: 0;
        padding: 6px 10px;
        p {
          font-size: 1.6rem;
          color: white;
        }
      }
      img {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
      .overlay {
        position: absolute;
        bottom: 0;
        background: var(--pinkf);
        background: linear-gradient(
          180deg,
          rgba(64, 84, 117, 0) 0%,
          rgba(255, 162, 137, 0.6474790599833684) 8%,
          rgba(255, 162, 137, 0.8995799003195029) 16%
        );
        left: 0;
        padding-top: 20px;
        height: 90px;
        width: 100%;
        color: var(--darkBrown);
        h5 {
          font-size: 2.2rem;
        }
        p {
          text-transform: uppercase;
          font-size: 1.7rem;
        }
      }
    }
    .card-back {
      height: 440px;
      background: var(--pinkf);
      color: var(--darkBrown);
      display: flex;
      justify-content: center;
      align-items: center;
      h4 {
        font-size: 3rem;
      }
      h5 {
        font-size: 2.2rem;
      }
      p {
        font-size: 1.6rem;
        line-height: 1.4;
        padding: 10px;
      }
    }
  }
  @media screen and (max-width: 560px) {
    padding: 20px 0;
  }
`;

export default CardSectionStyles;
