import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Styled from "./style";
import {
  faBucket,
  faTruck,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

export function Servicos() {
  return (
    <Styled>
      <div className="Servicos" id="servicos">
        <div className="item01">
          <h1>Carregamento</h1>
          <FontAwesomeIcon icon={faTruck} />
          <p>
            Somos especializados em oferecer todo o suporte necessário referente
            a transição de carga e equipamentos utilizados no seu evento.
          </p>
        </div>
        <div className="item03">
          <h1>Segurança</h1>
          <FontAwesomeIcon icon={faLock} />
          <p>
            Nosso time de segurança vai dar todo o apoio e proteção que você
            precisa para que você e todas as pessoas presentes se sintam em
            segurança e protegidas.
          </p>
        </div>
        <div className="item02">
          <h1>Limpeza</h1>
          <FontAwesomeIcon icon={faBucket} />
          <p>
            Também cuidamos de toda a parte da limpeza necessária, tanto antes,
            quanto depois dos eventos.
          </p>
        </div>
      </div>
    </Styled>
  );
}
