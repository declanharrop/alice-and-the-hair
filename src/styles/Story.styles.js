import styled from 'styled-components';

const StoryStyles = styled.div`
  img {
    width: 100%;
    height: 100%;
    max-width: 600px;
    max-height: 50vh;
    margin: 0 auto;
    object-fit: cover;
    object-position: center center;
  }
  .story-content {
    .img {
      width: 100%;
      height: 100%;
    }
    .divider {
      background: var(--navy);
      height: 1px;
      width: 100%;
      margin: 10px 0;
    }
    .date {
      margin: 10px 0;
      h3 {
        font-size: 1.6rem;
        letter-spacing: 0.2rem;
      }
    }
    color: var(--navy);
    max-width: 800px;
    margin: 0 auto;
    padding: 10px;
    text-align: left;
  }
`;

export default StoryStyles;
