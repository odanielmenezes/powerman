import React from "react";
import Styled from "./style";
import Logo from "../../assets/logo_power.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  return (
    <Styled>
      <div className="Footer">
        <div className="Footer__Session01">
          <img src={Logo} alt="Logo Power" />
        </div>
        <div className="Footer__Session03">
          <p>O APOIO QUE SEU EVENTO PRECISA!</p>
        </div>
        <div className="Footer__Session02">
          <p className="Footer__FiquePorDentro">FIQUE POR DENTRO:</p>
          <a href="https://wa.link/aapswt">
            <div className="Footer__WhatsApp">
              <FontAwesomeIcon className="Footer__Icon" icon={faWhatsapp} />
              <span className="Footer__Text">WhatsApp</span>
            </div>
          </a>
          {/* <a href="https://www.facebook.com/cherryilumina">
            <div className="Footer__Face">
              <FontAwesomeIcon className="Footer__Icon" icon={faFacebook} />
              <span className="Footer__Text">Facebook</span>
            </div>
          </a> */}
          <a href="https://www.instagram.com/power.man16staff/">
            <div className="Footer__Insta">
              <FontAwesomeIcon className="Footer__Icon" icon={faInstagram} />
              <span className="Footer__Text">Instagram</span>
            </div>
          </a>
        </div>
      </div>
    </Styled>
  );
}
