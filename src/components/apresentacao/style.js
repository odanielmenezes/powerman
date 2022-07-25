import styled from "styled-components";

const styled_apresentacao = styled.div`
  .Apresentacao {
    width: 100vw;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .Apresentacao__MainInfos {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 14px;

      a{
        text-decoration: none;
        color: #fff;
      }
      svg.svg-inline--fa.fa-instagram,
      svg.svg-inline--fa.fa-facebook,
      svg.svg-inline--fa.fa-whatsapp {
        font-size: 40px;
        margin: 20px 10px;
        transition: 0.3s;
        cursor: pointer;
      }
      svg.svg-inline--fa.fa-instagram:hover,
      svg.svg-inline--fa.fa-facebook:hover,
      svg.svg-inline--fa.fa-whatsapp:hover {
        color: #ff9979;
        transition: 0.3s;
      }
      .Apresentacao__RedesSociais {
        width: 400px;
        .Apresentacao__Icons {
          display: flex;
          justify-content: center;
          gap: 20px;

          .Apresentacao__Insta,
          .Apresentacao__Whats,
          .Apresentacao__Face {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: -10px 0;
          }
          .Apresentacao__Insta span,
          .Apresentacao__Whats span,
          .Apresentacao__Face span {
            display: none;
          }
          
        }
      }
      h1 {
        letter-spacing: 20px;
      }
      small {
        color: #ff9979;
        font-size: 16px;
        margin: -20px 0 0 0;
      }
      img {
        width: 210px;
      }
    }
  }
  @media (max-width: 600px) {
    .Apresentacao {
      height: 100vh;
      .Apresentacao__MainInfos {
        width: 100vw !important;

        .Apresentacao__RedesSociais {
          display: flex;
          flex-direction: column;
          margin: 30px 0;

          .Apresentacao__Icons {
            display: flex;
            flex-direction: column;
            justify-content: center;

            .Apresentacao__Insta,
            .Apresentacao__Whats,
            .Apresentacao__Face {
              display: flex;
              flex-direction: row !important;
              align-items: center;
              justify-content: center;
              margin: -10px 0;
            }
            .Apresentacao__Insta span,
            .Apresentacao__Whats span,
            .Apresentacao__Face span {
              display: block !important;
            }
          }
          .Apresentacao__FiquePorDentro {
            color: #fff;
          }
        }
        svg.svg-inline--fa.fa-instagram,
        svg.svg-inline--fa.fa-facebook,
        svg.svg-inline--fa.fa-whatsapp {
          font-size: 40px;
          margin: 20px 10px;
        }
        h1 {
          letter-spacing: 10px !important;
        }
        img {
          width: 130px !important;
        }
      }
    }
  }
`;

export default styled_apresentacao;
