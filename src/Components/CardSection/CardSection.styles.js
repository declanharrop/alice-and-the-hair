import styled from 'styled-components';

const CardSectionStyles = styled.div`
  max-width: 1400px;
  margin: 20px auto;
  padding: 20px;
  cursor: pointer;
  .card-section-container {
    display: grid;
    grid-gap: 40px;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
  .rotating-card {
    .card-front {
      height: 440px;
      background: var(--navy);
      position: relative;
      box-shadow: 0 0 20px 2px var(--navyxxf);
      .clickme {
        background: var(--navyf);
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
        background: var(--navyf);
        background: linear-gradient(
          180deg,
          rgba(64, 84, 117, 0) 0%,
          rgba(64, 84, 117, 0.6474790599833684) 8%,
          rgba(64, 84, 117, 0.8995799003195029) 16%
        );
        left: 0;
        padding-top: 20px;
        height: 90px;
        width: 100%;
        color: white;
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
      background: var(--navyf);
      color: white;
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
