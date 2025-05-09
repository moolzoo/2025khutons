import React from "react";
// import x12 from "./assets/images/가지.png";
// import x13 from "./assets/images/토마토.png";
// import x14 from "./assets/images/샐러리.png";
// import x1 from "./assets/images/당근.png";
// import image from "./assets/images/감자.png";
import "./Slide.css";


export function Slide() {
  return (
    <div className="slide">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">
            <img className="element" alt="당근" src={x1} />
            <img className="img" alt="백그라운드 이미지" src={image} />
            <img className="element-2" alt="가지" src={x12} />
            <img className="element-3" alt="토마토" src={x13} />
            <img className="element-10" alt="감자" src={x14} />


            <div className="label-list">
              <div className="label-item">
                <span>1. 지역</span>
                <div className="line" />
              </div>
              <div className="label-item">
                <span>2. 토양 면적</span>
                <div className="line" />
              </div>
              <div className="label-item">
                <span>3. 토양 pH</span>
                <div className="line" />
              </div>
              <div className="label-item">
                <span>4. 질소 포화도</span>
                <div className="line" />
              </div>
              <div className="label-item">
                <span>5. 이전 재배 작물</span>
                <div className="line" />
              </div>
              <div className="label-item">
                <span>6. 작부 가능 시기</span>
                <div className="line" />
              </div>
              <div className="label-item">
                <span>7. 기존 병해충</span>
                <div className="line" />
              </div>
            </div>


            <div className="title">왓츠 인 마이 팜</div>
            <div className="result-button">결과보기</div>
          </div>
        </div>
      </div>
    </div>
  );
};
