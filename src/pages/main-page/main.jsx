import React from "react";
import Style from "./style";
import { Header } from "../../components/header/component";
import { ApesentacaoInfos } from "../../components/apresentacao/component";
import { SliderImages } from "../../components/carousel-images/component";
import { GaleriaFotos } from "../../components/galeria-fotos/component";
import { Servicos } from "../../components/servicos/component";
import { Footer } from "../../components/footer/component";
import { Copyright } from "../../components/copyright/component";

export default function MainPage() {
  return (
    <Style>
      <div className="MainPage">
        <Header />
        <ApesentacaoInfos />
        <SliderImages />
        <Servicos />
        <GaleriaFotos />
        <Footer />
        <Copyright />
      </div>
    </Style>
  );
}
