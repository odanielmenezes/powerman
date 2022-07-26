import styled from "styled-components";

const styled_footer = styled.div`
  .Footer {
    width: 100vw;
    height: 50vh;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: space-around;
    align-items: center;
    .Footer__Session03 {
      font-size: 24px;
    }
    .Footer__Session02 {
      display: flex;
      flex-direction: column;
      a {
        text-decoration: none;
        color: #fff;
      }

      .Footer__WhatsApp,
      .Footer__Insta,
      .Footer__Face {
        width: 200px;
        background-image: linear-gradient(to right, #0fd94a, #0cad3b);
        padding: 10px;
        margin: 10px auto;
        border-radius: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
        box-shadow: 3px 3px 4px rgba(255, 255, 255, 0.2);
        cursor: pointer;

        span.Footer__Text {
          font-size: 18px;
        }
        .Footer__Icon {
          font-size: 32px;
        }
      }
      p.Footer__FiquePorDentro {
        text-align: center;
      }
      .Footer__Insta {
        background-image: linear-gradient(to right, #f7017a, #ff8100, #ffc800);
      }
      .Footer__Face {
        background-image: linear-gradient(to right, #16a4fb, #036de4);
      }
    }

    img {
      width: 100px;
      border: 5px solid #ff9979;
      cursor: pointer;
    }
  }
  @media (max-width: 600px) {
    .Footer {
      flex-direction: column;
      padding: 50px 0;
      gap: 32px;
      height: 100%;
      justify-content: center;

      p {
        font-size: 16px;
      }
      .Footer__FiquePorDentro {
        display: none;
      }
      img {
        width: 100px;
      }
    }
  }
`;

export default styled_footer;
