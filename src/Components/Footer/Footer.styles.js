import styled from 'styled-components';

const FooterStyles = styled.div`
  margin: 6vw auto 3vw;
  .opening-times {
    padding: 6vw 20px;
    background-color: var(--navy);
    h3 {
      margin: 30px 0 20px;
      font-family: LemonMilk;
      color: var(--cream);
    }
    p {
      color: var(--cream);
      font-size: 2rem;
      margin-top: 10px;
    }
  }
  .lower-section {
    color: var(--navy);
    p {
      font-size: 1.4rem;
    }
    max-width: 800px;
    margin: 40px auto 80px;
    padding: 20px;
  }
`;

export default FooterStyles;
