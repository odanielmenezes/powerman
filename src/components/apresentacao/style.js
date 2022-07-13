import styled from "styled-components";

const styled_apresentacao = styled.div`
  .Apresentacao {
    width: 100vw;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -50px;

    .Apresentacao__MainInfos {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 14px;

      h1 {
        letter-spacing: 20px;
      }
      small {
        color: #ff9979;
        font-size: 16px;
      }
      img {
        width: 210px;
      }
    }
  }
  @media (max-width: 600px) {
    .Apresentacao__MainInfos {
        h1 {
            letter-spacing: 10px !important;
        }
    }
  }
`;

export default styled_apresentacao;
