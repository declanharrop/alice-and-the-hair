import styled from 'styled-components';

const HotbarStyles = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  background: var(--navy);
  box-shadow: 0px 0px 32px var(--peachf);
  height: 70px;
  nav {
    width: 100%;
    height: 100%;
  }
  ul {
    width: 100%;
    height: 100%;
    list-style-type: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    li {
      .hotbar-button {
        width: calc(100% - 4px);
        margin: 2px;
        padding: auto;
        height: calc(100% - 4px);
        background: none;
        border: none;
        border-radius: 2px;
      }
      .hotbar-button-active {
        width: calc(100% - 4px);
        margin: 2px;
        height: calc(100% - 4px);
        background: none;
        border: none;
        border-radius: 2px;
        .MuiSvgIcon-root {
          color: var(--green);
        }
      }
    }
  }
`;

export default HotbarStyles;
