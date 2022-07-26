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
      .imagens {
        width: 90vw;
        display: flex;
        justify-content: center;
        gap: 22px;
        flex-wrap: wrap;
      }
      img {
        border-radius: 5px;
        width: 325px;
        height: 440px;
        box-shadow: 4px 4px 6px rgba(255, 255, 255, 0.3);
      }
    }
  }
  @media (max-width: 600px) {
    .GaleriaFotos {
      height: 100%;

      .GaleriaFotos__Fotos {
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
