import styled from "styled-components";

const main_page = styled.div`
  .MainPage {
    width: 99vw;
    animation: opacityAnimation 1s ease-in;

    @keyframes opacityAnimation {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;

export default main_page;
