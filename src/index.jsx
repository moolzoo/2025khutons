import React from "react";
import x12 from "./1-2.png";
import x13 from "./1-3.png";
import x14 from "./1-4.png";
import x1 from "./1.png";
import image from "./image.png";
import image1 from "./image.svg";
import line12 from "./line-1-2.svg";
import line13 from "./line-1-3.svg";
import line14 from "./line-1-4.svg";
import line15 from "./line-1-5.svg";
import line16 from "./line-1-6.svg";
import line1 from "./line-1.svg";
import "./style.css";

export const Slide = () => {
  return (
    <div className="slide">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">
            <img className="element" alt="Element" src={x1} />

            <img className="img" alt="Element" src={image} />

            <img className="element-2" alt="Element" src={x12} />

            <img className="element-3" alt="Element" src={x13} />

            <div className="div">
              <img className="line" alt="Line" src={line15} />

              <div className="text-wrapper">작부 가능 시기</div>
            </div>

            <div className="element-4">
              <img className="line" alt="Line" src={line16} />

              <div className="text-wrapper">기존 병해충</div>
            </div>

            <div className="text-wrapper-2">왓츠 인 마이 팜</div>
          </div>

          <div className="element-5">
            <img className="line" alt="Line" src={line1} />

            <div className="text-wrapper">지역</div>
          </div>

          <div className="element-6">
            <img className="line" alt="Line" src={image1} />

            <div className="text-wrapper">토양 면적</div>
          </div>

          <div className="element-7">
            <img className="line" alt="Line" src={line12} />

            <div className="text-wrapper">토양 pH</div>
          </div>

          <div className="element-8">
            <img className="line" alt="Line" src={line13} />

            <div className="text-wrapper">질소 포화도</div>
          </div>

          <div className="element-9">
            <img className="line" alt="Line" src={line14} />

            <div className="text-wrapper">이전 재배 작물</div>
          </div>

          <img className="element-10" alt="Element" src={x14} />

          <div className="text-wrapper-3">결과보기</div>
        </div>
      </div>
    </div>
  );
};
