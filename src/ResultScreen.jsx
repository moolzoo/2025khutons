import React, { useState } from "react";
import CardStack from "./CardStack";
import potatoImg from "./assets/images/potato.png";

export default function ResultScreen() {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        height: "100%",
        width: "100%",
        position: "absolute",
      }}
    >
      <div
        style={{
          width: "180px",
          height: "270px",
          borderRadius: "5px",
          border: "2px solid black",
          left: "10%",
          position: "absolute",
          scale: "1.2",
        }}
      >
        <img
          src={potatoImg}
          alt="Potato"
          style={{ width: "100%", height: "100%", borderRadius: "5px" }}
        />
      </div>
      <div style={{ position: "absolute", left: "70%" }}>
        <CardStack></CardStack>
      </div>
      <h2
        style={{
          position: "absolute",
          left: "60%",
          top: "10%",
          fontSize: "32px",
          textAlign: "center"
        }}
      >
        적합한 윤작 작물
      </h2>
      <h2
        style={{
          position: "absolute",
          left: "65%",
          top: "80%",
          fontSize: "32px",
          textAlign: "center"
        }}
      >
        자세히 &gt;&gt;
      </h2>
    </div>
  );
}
