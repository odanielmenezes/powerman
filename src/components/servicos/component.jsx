import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Styled from "./style";
import {
  faChampagneGlasses,
  faNetworkWired,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

export function Servicos() {
  return (
    <Styled>
      <div className="Servicos">
        <div className="item01">
          <h1>Confiança</h1>
          <FontAwesomeIcon icon={faChampagneGlasses} />
          <p>
            "Construção de um negócio é saber fazer algo para se orgulhar, é
            criar algo que vai fazer uma diferença real na vida de outras
            pessoas - Richard Bronson
          </p>
        </div>
        <div className="item02">
          <h1>Lealdade</h1>
          <FontAwesomeIcon icon={faNetworkWired} />
          <p>
          "Construção de um negócio é saber fazer algo para se orgulhar, é
            criar algo que vai fazer uma diferença real na vida de outras
            pessoas - Richard Bronson
          </p>
        </div>
        <div className="item03">
          <h1>Qualidade</h1>
          <FontAwesomeIcon icon={faStar} />
          <p>
          "Construção de um negócio é saber fazer algo para se orgulhar, é
            criar algo que vai fazer uma diferença real na vida de outras
            pessoas - Richard Bronson
          </p>
        </div>
      </div>
    </Styled>
  );
}
