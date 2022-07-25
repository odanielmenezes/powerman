import React from "react";
import Styled from "./style";
import Foto01 from "../../assets/foto-01.jpg";
import Foto02 from "../../assets/foto-02.jpg";
import Foto03 from "../../assets/fotos-03.jpg";
import Foto04 from "../../assets/fotos-04.jpg";
import Foto05 from "../../assets/fotos-05.jpg";
import Foto06 from "../../assets/fotos-06.jpg";
import Foto07 from "../../assets/fotos-07.jpg";
import Foto08 from "../../assets/fotos-08.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export function GaleriaFotos() {
  const fotos = [
    {
      img: Foto01,
    },
    {
      img: Foto02,
    },
    {
      img: Foto03,
    },
    {
      img: Foto04,
    },
    {
      img: Foto05,
    },
    {
      img: Foto06,
    },
    {
      img: Foto07,
    },
    {
      img: Foto08,
    },
  ];
  return (
    <Styled>
      <div className="GaleriaFotos" id="fotos">
        <div className="title">
          <h1>Conheça alguns eventos realizados pela nossa equipe:</h1>
        </div>
        <div className="GaleriaFotos__Fotos">
          {/* <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          > */}
          <div className="imagens">
            {fotos.map((item) => (
              // <SwiperSlide>
              <img src={item.img} alt="fotos"></img>
              // </SwiperSlide>
            ))}
          </div>
          {/* </Swiper> */}
          {/* {fotos.map((item) => (
            <div className="imagens">
              <img src={item.img} alt="fotos"></img>
            </div>
          ))} */}
        </div>
      </div>
    </Styled>
  );
}
