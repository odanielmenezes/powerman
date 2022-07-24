import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Styled from "./style";
import Foto01 from "../../assets/mulher.png";
import Foto02 from "../../assets/homem.png";
import Foto03 from "../../assets/homem02.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPeopleGroup,
  faStar,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

export function SliderImages() {
  return (
    <Styled>
      <div className="SliderImages" id="Slider">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div className="SliderImages__slide01">
              <div className="SliderImages__InfosSlide01">
                <h1>
                  Equipe especializada <FontAwesomeIcon icon={faPeopleGroup} />
                </h1>
                <p>
                  Somos uma equipe especializada de alta qualidade que
                  proporcionamos segurança e comprometimento com nossos
                  clientes, para que você e sua equipe se preocupe apenas com o
                  planejamento de seus eventos. A mão de obra é com a gente!
                </p>
                <div className="SliderImages__ContentMobile01">
                  <img src={Foto01} alt="" />
                </div>
              </div>
              <div className="SliderImages__Image01">
                <img src={Foto01} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SliderImages__slide02">
              <div className="SliderImages__Image02">
                <img src={Foto02} alt="" />
              </div>
              <div className="SliderImages__InfosSlide02">
                <h1>
                  Garantia de satisfação <FontAwesomeIcon icon={faStar} />
                </h1>
                <p>
                  Contamos com diversos feedbacks positivos de clientes onde
                  prestamos nossos serviços. Garantia de satisfação é um dos
                  nosso principais objetivos.
                </p>
                <div className="SliderImages__ContentMobile02">
                  <img src={Foto02} alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SliderImages__slide02">
              <div className="SliderImages__InfosSlide02">
                <h1>
                  Somos a <b>POWER MAN</b> <FontAwesomeIcon icon={faRocket} />
                </h1>
                <p>
                  Somos uma equipe especializada de alta qualidade que
                  proporcionamos segurança e comprometimento com nossos
                  clientes, para que você e sua equipe se preocupe apenas com o
                  planejamento de seus eventos. A mão de obra é com a gente!
                </p>
                <div className="SliderImages__ContentMobile03">
                  <img src={Foto03} alt="" />
                </div>
              </div>
              <div className="SliderImages__Image02">
                <img src={Foto03} alt="" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </Styled>
  );
}
