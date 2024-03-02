
import React, { useState, useEffect } from "react";
import "./SliderCard.css";

const SliderCard = () => {
  const sliderdata = [
    {
      img: "./assets/cl5gun2uz00090sh9fvcn1ex1.png",
      step: "01",
      title: "Create/Link Your MCHA",
      description: "  to get Started with your Health Account",
      btnName: " Create MCHA ",
    },
    {
      img: "./assets/cl5gun2uz00090sh9fvcn1ex1.png",
      step: "02",
      title: "Store your medical records",
      description: " Started by Uploading your health records",
      btnName: "Upload Now",
    },
    {
      img: "./assets/cl5gun2uz00090sh9fvcn1ex1.png",
      step: "03",
      title: "Build Your Health Profile",
      description: "By Updatating Health Vitals Regularly",
      btnName: "Update Now",
    },
  ];

  return (
    <>
      <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
        {sliderdata.map((item, index) => (
          <div key={index} className="carousel-item">
            <div className="card mainCard">
              <img src={item.img} className="card-img-top imgBG" />
              <h4
                style={{
                  textAlign: "topright",
                  position: "absolute",
                  top: "40px",
                  right: "16px",
                  color: "#d5def5",
                }}
              >
                Step
                <div style={{ textAlign: "center", fontSize: "56px" }}>
                  {item.step}
                </div>
              </h4>
              <div
                className="card-body"
                style={{
                  color: "white",
                  fontFamily: "DM Sans, sans-serif",
                  lineHeight: "24px",
                }}
              >
                <h2>{item.title}</h2>
                <p className="card-text" style={{ fontSize: "20px" }}>
                  {item.description}
                </p>
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: "#222831",
                    color: "white",
                    height: "20%",
                  }}
                >
                  {item.btnName} &#8594;
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SliderCard;
