import styled from 'styled-components';

export const HeroVideoStyles = styled.div`
  position: absolute;
  min-height: 100%;
  width: 100%;
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

export const HeroImageStyles = styled.div``;
