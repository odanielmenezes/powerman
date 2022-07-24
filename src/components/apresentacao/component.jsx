import React from "react";
import Styled from "./style";
import LogoPower from "../../assets/logo_power.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export function ApesentacaoInfos() {
  return (
    <Styled>
      <div className="Apresentacao">
        <div className="Apresentacao__MainInfos">
          <img src={LogoPower} alt="Logo Power Man" />
          <span>
            <h1>POWER MAN</h1>
          </span>
          <small>SERVIÇOS PARA EVENTOS</small>
          <div className="Apresentacao__RedesSociais">
            <div>
              {/* <small className="Apresentacao__FiquePorDentro">
                Acompanhe nosso trabalho:
              </small> */}
            </div>
            <div className="Apresentacao__Icons">
              <div className="Apresentacao__Insta">
                <FontAwesomeIcon icon={faInstagram} />
                <a href="https://www.instagram.com/cherryilumina/">
                  <span>INSTAGRAM</span>
                </a>
              </div>
              <div className="Apresentacao__Face">
                <FontAwesomeIcon icon={faFacebook} />
                <a href="https://www.facebook.com/cherryilumina">
                  <span>FACEBOOK</span>
                </a>
              </div>
              <div className="Apresentacao__Whats">
                <FontAwesomeIcon icon={faWhatsapp} />
                <a href="https://wa.link/aapswt">
                  <span>WHATSAPP</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Styled>
  );
}
