import styled from 'styled-components';

export const HeroVideoStyles = styled.div`
  position: absolute;
  min-height: 100%;
  width: calc(100% - 70px);
  .overlay {
    height: 100%;
    width: 100%;
    position: absolute;
    background: var(--navyxf);
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 4rem;
      color: white;
    }
    @media screen and (max-width: 500px) {
      h1 {
        font-size: 7vw;
      }
    }
  }
  @media screen and (max-width: 560px) {
    width: 100%;
  }
  .video {
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    overflow: hidden;
    z-index: -10;
    top: 0;
    height: 100%;
    width: 100%;
    video {
      position: absolute;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`;

export const HeroImageStyles = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  margin-bottom: 100px;
  margin-top: -6vh;
  transform: skewY(-3deg);
  position: relative;
  overflow: hidden;
  img {
    position: absolute;
    top: 0;
    left: 0;
    transform: skewY(3deg);
    object-fit: cover;
    height: 110%;
    width: 100%;
  }
  .overlay {
    position: relative;
    background: var(--navyxf);
    padding-top: 3vh;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    h1 {
      transform: skewY(3deg);
      font-size: 8rem;
    }
    .smaller-title {
      font-size: 5rem;
    }
  }
  @media screen and (max-width: 560px) {
    .overlay {
      h1 {
        font-size: 6rem;
      }
      .smaller-title {
        font-size: 3rem;
      }
    }
  }
`;
