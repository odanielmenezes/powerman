import styled from "styled-components";

const style_galeriaFotos = styled.div`
  .GaleriaFotos {
    height: 100%;
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    .swiper.swiper-coverflow.swiper-3d.swiper-initialized.swiper-horizontal.swiper-pointer-events.swiper-watch-progress.mySwiper {
      width: 50vw;
      display: flex;
      justify-content: center;
      margin: 0 auto;
    }

    .GaleriaFotos__Fotos {
      display: flex;
      justify-content: center;
      flex-wrap: nowrap;
      border-radius: 5px;
      width: 600px;
      height: 100%;

      .imagens {
        width: 90vh;
        display: grid;
        grid-template-columns: 40% 40% 40%;
        gap: 30px 110px;
        justify-content: space-around;
      }
      img {
        border-radius: 5px;
        width: 425px;
        height: 600px;
        box-shadow: 4px 4px 6px rgba(255, 255, 255, 0.3);
      }
    }
  }
  @media (max-width: 600px) {
    .GaleriaFotos {
      height: 100%;

      .GaleriaFotos__Fotos {
        width: 100vw !important;
        height: 100% !important;
      }
      h1 {
        text-align: center;
        font-size: 18px;
        width: 80vw;
      }
      .imagens {
        width: 80vw !important;
        display: flex !important;
        flex-direction: column !important;
        justify-content: center !important;
        align-items: center;
        img {
          width: 300px;
          height: 420px;
        }
      }
    }
  }
`;

export default style_galeriaFotos;
