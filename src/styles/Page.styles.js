import styled from 'styled-components';

export const FaqPageStyles = styled.div`
  input {
    margin: 0px auto 60px;
    color: var(--navy);
    padding: 8px 14px;
    border-radius: 4px;
    border: none;
    box-shadow: 0 0 4px var(--navyxf);
    min-width: 300px;
    font-size: 1.6rem;
  }
  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
    .faq-tile {
      position: relative;
      height: 300px;
      min-width: 300px;
      max-width: 400px;
      cursor: pointer;
      box-shadow: 0 0 10px var(--navyxf);
      border-radius: 4px;
      img {
        border-radius: 4px;
        position: relative;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .overlay {
        border-radius: 4px;
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background: var(--navyxf);
        color: white;
        display: flex;
        align-items: flex-end;
        padding: 20px;
        h3 {
          font-size: 1.8rem;
          letter-spacing: 0.5rem;
        }
      }
    }
  }
`;
