import styled from "styled-components";

const styled_header = styled.div`
  .Header {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;

    .Header__Links {
      border-bottom: 1px solid #ff9979;
      padding: 10px 0;
    }
    .Header__Links:hover {
      border-bottom: 5px solid #ff9979;
    }
    ul {
      display: flex;
      align-items: center;
      gap: 38px;
      padding: 0;
      margin: 0 40px;
      list-style: none;

      a.ant-anchor-link-title {
        text-decoration: none;
        color: #fff;
      }
    }
  }
  @media (max-width: 600px) {
    .Header {
      display: none;
      ul {
        display: none;
      }
    }
  }
`;

export default styled_header;
