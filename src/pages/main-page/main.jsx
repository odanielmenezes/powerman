import React from "react";
import { Header } from "../../components/header/component";
import { ApesentacaoInfos } from "../../components/apresentacao/component";
import { SliderImages } from "../../components/carousel-images/component";
import { GaleriaFotos } from "../../components/galeria-fotos/component";
import { Servicos } from "../../components/servicos/component";

export default function MainPage() {
  return (
    <div className="MainPage">
      <Header />
      <ApesentacaoInfos />
      <SliderImages />
      <Servicos />
      <GaleriaFotos />
    </div>
  );
}
