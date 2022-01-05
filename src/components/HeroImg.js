import ScrollAnimation from "react-animate-on-scroll";
import React, { Component, useEffect, useState } from "react";
import "../style/slider.css";
import { Link } from "react-router-dom";

export function HeroImage() {
  const [state, setState] = useState({
    arrayOfImages: [
      "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/07/285960-9-Best-Shoe-Brands-for-Bunions_Header.jpg?w=1155&h=1528",
      "http://kicksguru.com/wp-content/uploads/2020/12/Nike-SB-Nyjah-Free-2-BV2078-103-removebg.jpg",
    ],
    currentImgLink:
      "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/07/285960-9-Best-Shoe-Brands-for-Bunions_Header.jpg?w=1155&h=1528",
    imgArrCounter: 0,
  });
  useEffect(() => {
    const interval = setInterval(timer, 5000);
    function timer() {
      if (state.imgArrCounter === state.arrayOfImages.length - 1) {
        setState({
          ...state,
          imgArrCounter: 0,
        });
      }
      if (state.currentImgLink === state.arrayOfImages[state.imgArrCounter]) {
        document.querySelector(".heroImageContainer").style.backgroundColor =
          "#f8c009";
        setState({
          ...state,
          currentImgLink: state.arrayOfImages[state.imgArrCounter + 1],
          imgArrCounter: state.imgArrCounter,
        });
      } else {
        document.querySelector(".heroImageContainer").style.backgroundColor =
          "rgb(251 238 222)";
        setState({
          ...state,
          currentImgLink: state.arrayOfImages[state.imgArrCounter],
        });
      }
    }
    return () => {
      clearInterval(interval);
    };
  });

  const handleToggleClick = (e) => {
    let buttonClass = e.target.className;
    if (buttonClass === "toggle1") {
      setState({
        ...state,
        currentImgLink: state.arrayOfImages[1],
      });
      document.querySelector(".heroImageContainer").style.backgroundColor =
        "#f8c009";
    } else {
      setState({
        ...state,
        currentImgLink: state.arrayOfImages[0],
      });
      document.querySelector(".heroImageContainer").style.backgroundColor =
        "rgb(251 238 222)";
    }
  };
  return (
    <div
      className="heroImageContainer"
      style={{
        backgroundImage: `url(${state.currentImgLink})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundColor: "rgb(251 238 222)",
      }}
    >
      <div className="buttonsArea">
        <ScrollAnimation
          animateIn="animate__lightSpeedInLeft"
          initiallyVisible={true}
        >
          <p className="welcome"> Welcome to shoes store</p>
          <h1 style={{ color: "white" }}>
            {" "}
            you can get a diccount by using{" "}
            <b style={{ color: "gold" }}>"OCA2022"</b> coupon for 10% Discount
          </h1>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="animate__tada"
          delay={800}
          initiallyVisible={false}
        >
          <button className="shopNowBtn">
            <Link to="/shop">Shop now</Link>{" "}
          </button>
        </ScrollAnimation>
        <div className="toggeleSlider">
          <button className="toggle1" onClick={handleToggleClick}></button>
          <button className="toggle2" onClick={handleToggleClick}></button>
        </div>
      </div>
    </div>
  );
}

export default HeroImage;
