import React from "react";
import Styled from "./style";
import { Anchor } from "antd";

const { Link } = Anchor;

export function Header() {
  return (
    <Styled>
      <Anchor affix={false}>
        <div className="Header">
          <div className="Header__ItemsMenu">
            <div className="Header__Mobile"></div>
            <ul className="Header__ListMenu">
              <Link className="Header__Links" href="#Slider" title="SOBRE NÓS"></Link>
              <Link className="Header__Links" href="#servicos" title="SERVIÇOS"></Link>
              <Link className="Header__Links" href="#fotos" title="FOTOS"></Link>
            </ul>
          </div>
        </div>
      </Anchor>
    </Styled>
  );
}
