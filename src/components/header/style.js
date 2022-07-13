import styled from "styled-components";

const styled_header = styled.div`
  .Header {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 40px;
    }

    ul {
      display: flex;
      align-items: center;
      gap: 18px;
      padding: 0;
      margin: 0;
      list-style: none;
    }
  }
  @media (max-width: 600px) {
    .Header {
        ul {
            display: none;
        }
    }
  }
`;

export default styled_header;
