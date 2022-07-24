import styled from "styled-components";

const styled_slider = styled.div`
  .SliderImages {
    .SliderImages__slide01 {
      width: 100%;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      .SliderImages__InfosSlide01 {
        width: 600px;
        text-align: center;
      }
    }
    .SliderImages__slide02,
    .SliderImages__slide03 {
      width: 100%;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      .SliderImages__InfosSlide02,
      .SliderImages__InfosSlide03 {
        width: 600px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        p {
          width: 600px;
        }
      }
    }
    .SliderImages__ContentMobile01,
    .SliderImages__ContentMobile02,
    .SliderImages__ContentMobile03 {
      display: none;
    }
    .swiper {
      width: 99vw;
      display: flex;
      justify-content: center;
    }
    .swiper-slide.swiper-slide-active {
      display: flex;
      justify-content: space-around;
    }

    .swiper-slide img {
      display: flex;
      height: 90vh;
      margin-top: 100px;
    }
  }

  @media (max-width: 600px) {
    .SliderImages {
      display: flex;
      align-items: center;
      height: 100%;
      .SliderImages__slide01 {
        width: 100vw;
        .SliderImages__InfosSlide01 {
          width: 300px;
          text-align: justify;
          margin: 0 auto;

          h1 {
            font-size: 24px;
            text-align: center;
          }
        }
      }
      .SliderImages__slide02,
      .SliderImages__slide03 {
        width: 100vw;
        .SliderImages__InfosSlide02,
        .SliderImages__InfosSlide03 {
          width: 300px;
          margin: 0 auto;

          h1 {
            font-size: 24px;
            text-align: center;
          }
          p {
            text-align: justify;
            width: 300px;
          }
        }
      }
      .swiper {
        width: 99vw;
        display: flex;
        justify-content: center;
      }
      .swiper-slide.swiper-slide-active {
        display: flex;
        justify-content: space-around;
      }
      /* .swiper-wrapper {
        height: 82vh;
      } */
      .swiper-slide img {
        display: flex;
        height: 70vh;
        margin-top: 0;
      }
      .SliderImages__Image01,
      .SliderImages__Image02,
      .SliderImages__Image03 {
        display: none;
      }
      .SliderImages__ContentMobile01,
      .SliderImages__ContentMobile02,
      .SliderImages__ContentMobile03 {
        display: block;
      }
      .SliderImages__ContentMobile03 img {
        display: block !important;
        margin-right: -150px;
      }
    }
  }

  @media (max-width: 414px) {
    .SliderImages__ContentMobile02 {
      margin-top: 99px;
    }
    .SliderImages__ContentMobile01 {
      margin-top: 93px;
    }
    .SliderImages__ContentMobile03 {
      margin-top: 63px;
    }
  }

  @media (max-width: 375px) {
    .SliderImages__ContentMobile02 {
      margin-top: 30px;
    }
    .SliderImages__ContentMobile01 {
      margin-top: 24px;
    }
    .SliderImages__ContentMobile03 {
      margin-top: -8px;
    }
  }
  @media (max-width: 360px) {
    .SliderImages__ContentMobile02 {
      margin-top: 52px;
    }
    .SliderImages__ContentMobile01 {
      margin-top: 46px;
    }
    .SliderImages__ContentMobile03 {
      margin-top:18px;
    }
  }
`;

export default styled_slider;
