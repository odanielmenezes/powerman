import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faBriefcase, faImages } from "@fortawesome/free-solid-svg-icons";
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
              <div className="Header__ItemMenu">
                <FontAwesomeIcon icon={faCircleInfo} />
                <Link
                  className="Header__Links"
                  href="#Slider"
                  title="SOBRE NÓS"
                ></Link>
              </div>
              <div className="Header__ItemMenu">
              <FontAwesomeIcon icon={faBriefcase} />
                <Link
                  className="Header__Links"
                  href="#servicos"
                  title="SERVIÇOS"
                ></Link>
              </div>
              <div className="Header__ItemMenu">
              <FontAwesomeIcon icon={faImages} />
                <Link
                  className="Header__Links"
                  href="#fotos"
                  title="FOTOS"
                ></Link>
              </div>
            </ul>
          </div>
        </div>
      </Anchor>
    </Styled>
  );
}
