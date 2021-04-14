import React from "react";

import jiangZaoImg from "./assets/images/jiangzao_default.svg";
import jiangZaoMov1 from "./assets/vidoes/jiangzao_1.mov";

import "./scss/index.scss";

export default function App() {
  return (
    <div className="oppo-container">
      <div className="header">
        <div className="header-title">OPPO Enco X</div>
        <div className="header-sub-title">声学旗舰，听见灵感</div>
      </div>
      <div className="main">
        <img className="enco-image" src={jiangZaoImg} alt="OPPO Enco X" />
        {/* todo image */}
        {/*<video muted className="enco-video" autoplay="autoplay">*/}
        {/*  <source style={{ height: "100%" }} src={jiangZaoMov1} />*/}
        {/*</video>*/}
      </div>
      <div className="footer">
        <div className="buy-button">立即购买</div>
      </div>
    </div>
  );
}
