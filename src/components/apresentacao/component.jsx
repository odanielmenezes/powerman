import React from "react";
import Styled from "./style";
import LogoPower from '../../assets/logo_power.png'

export function ApesentacaoInfos() {
  return (
    <Styled>
      <div className="Apresentacao">
        <div className="Apresentacao__MainInfos">
            <img src={LogoPower} alt="Logo Power Man" />
            <span><h1>POWER MAN</h1></span>
            <small>CARREGADORES PARA EVENTOS</small>
        </div>
      </div>
    </Styled>
  );
}
