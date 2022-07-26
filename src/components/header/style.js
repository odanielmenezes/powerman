import styled from "styled-components";

const styled_header = styled.div`
  .Header {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;

    .Header__Links a{
      transition: .3s;
    }
    .Header__Links {
      padding: 10px 0;
    }
    .Header__Links:hover a {
      color: #ff9979 !important;
      transition: 0.3s;
    }
    .Header__ItemMenu {
      display: flex;
      align-items: center;
      svg {
        margin-right: 5px;
        color: #ff9979;
      }
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
      height: 12vh;
    }
    .Header__ItemMenu {
      font-size: 14px;
      flex-direction: column;
    }
  }
`;

export default styled_header;
