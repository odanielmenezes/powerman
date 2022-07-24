import styled from "styled-components";
import ImgBG from "../../assets/city-background.jpg";

const style_servicos = styled.div`
  .Servicos {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-image: url(${ImgBG});
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */

    .item01,
    .item02,
    .item03 {
      width: 350px;
      text-align: center;
      background-color: rgba(0, 0, 0, 0.6);
      padding: 20px;
      backdrop-filter: blur(2px);
      border-radius: 5px;
      box-shadow: 2px 2px 4px rgba(100, 100, 100, 0.5);

      svg {
        font-size: 42px;
        color: #ff9979;
      }
      p {
        font-size: 18px;
      }
    }
  }
  @media (max-width: 600px) {
    .Servicos {
      flex-direction: column;
      padding: 50px 0;

      .item01,
      .item02,
      .item03 {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        p {
          display: none;
        }
      }
    }
  }
  @media (max-width: 375px) {
      .item01,
      .item02,
      .item03 {
        margin: 10px 0;
        p {
          display: none;
        }
      }
    }
`;

export default style_servicos;
