import styled from 'styled-components';

const FaqItemStyles = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  color: var(--navy);
  .uppersection {
    margin: 20px;
    height: 40vh;
    border-radius: 4px;
    box-shadow: 0 0 14px 2px var(--navyxxf);
    img {
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: 4px;
      object-fit: cover;
    }
    .overlay {
      border-radius: 4px;
      position: absolute;
      top: 0;
      height: 100%;
      width: 100%;
      padding: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      background: var(--navyxf);
    }
  }
  .pageWrapper {
    margin: 60px 10px;
    .accordian {
      margin: 20px;
      .q {
        background: var(--peach);
        padding: 16px 10px;
        cursor: pointer;
        h4 {
          font-size: 2rem;
          font-weight: 400;
          letter-spacing: 0.4rem;
        }
        .section-hint {
          font-size: 1.3rem;
          font-style: italic;
          letter-spacing: 0.05rem;
        }
      }
      .a {
        margin-top: 3px;
        background: var(--navy);
        color: white;
        /* padding: 20px 10px; */
        overflow: hidden;
        img {
          margin-top: 20px;
          height: 300px;
          max-width: 300px;
          object-fit: cover;
        }
        p {
          margin: 20px 10px;
          a {
            color: white;
            font-size: 2.4rem;
            &:hover {
              color: var(--peach);
            }
          }
        }
      }
    }
  }
  .slide-in-top {
    -webkit-animation: slide-in-top 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s
      both;
    animation: slide-in-top 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s both;
  }
  @-webkit-keyframes slide-in-top {
    0% {
      -webkit-transform: translateY(-1000px);
      transform: translateY(-1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes slide-in-top {
    0% {
      -webkit-transform: translateY(-1000px);
      transform: translateY(-1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
  .slide-in-bottom {
    -webkit-animation: slide-in-bottom 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      1s both;
    animation: slide-in-bottom 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s both;
  }
  @-webkit-keyframes slide-in-bottom {
    0% {
      -webkit-transform: translateY(1000px);
      transform: translateY(1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes slide-in-bottom {
    0% {
      -webkit-transform: translateY(1000px);
      transform: translateY(1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export default FaqItemStyles;
