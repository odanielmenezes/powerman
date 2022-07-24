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
              <Link href="#Slider" title="Sobre nós"></Link>
              <Link href="#Slider" title="Contato"></Link>
              <Link href="#Slider" title="Nosso trabalho"></Link>
            </ul>
          </div>
        </div>
      </Anchor>
    </Styled>
  );
}
