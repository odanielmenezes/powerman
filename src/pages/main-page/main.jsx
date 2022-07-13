import React from "react";
import { Header } from "../../components/header/component";
import { ApesentacaoInfos } from "../../components/apresentacao/component";

export default function MainPage() {
  return (
    <div className="MainPage">
      <Header />
      <ApesentacaoInfos />
    </div>
  );
}
