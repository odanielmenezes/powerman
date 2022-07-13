import React from "react";
import Styled from "./style";

export function Header() {
  return (
    <Styled>
      <div className="Header">
        <div className="Header__ItemsMenu">
            <div className="Header__Mobile">
                
            </div>
          <ul className="Header__ListMenu">
            <li>SOBRE A EMPRESA</li>
            <li>CONTATO</li>
            <li>NOSSO TRABALHO</li>
          </ul>
        </div>
      </div>
    </Styled>
  );
}
