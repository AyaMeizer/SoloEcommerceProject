import React from "react";
import HeroImage from "./HeroImg";
import product from "./products.json";
import ScrollAnimation from "react-animate-on-scroll";
import "../style/home.css"
function Home() {
  const sales = product.map((element, key) => {
    if (element.sales === "yes") {
      return (
        <div className="featuredItem" key={key}>
          <img className="featuredImg" src={element.img} alt={element.alt} />
          {element.name}
        </div>
      );
    }
  });
  return (
    <div>
      <HeroImage />
          <h2 className="feaTitle">Featured Products</h2>
          <ScrollAnimation
          animateIn="animate__fadeInUp"
          initiallyVisible={false} delay={20} duration={0.7}>
      <div className="featuredCont">
          {sales}</div>
        </ScrollAnimation>
    </div>
  );
}

export default Home;
