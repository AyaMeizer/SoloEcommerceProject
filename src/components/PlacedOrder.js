import ScrollAnimation from "react-animate-on-scroll";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export class PlacedOrder extends Component {
  render() {
    return (
      <ScrollAnimation animateIn="animate__zoomIn" initiallyVisible={true} style={{
    minHeight: "52vh"
      }}>
      <div className="orderCont">
        <h1 className="orderMessage">Thank You!!!</h1>
        <h3 className="orderMessage">
          Your order is placed, We appreciate your trust
        </h3>
        <ScrollAnimation animateIn="animate__pulse" initiallyVisible={true} delay={1300}>
          <button className="emptyCartBtn">
            <Link to="/shop">Back to shop</Link>{" "}
          </button>
        </ScrollAnimation>
      </div>
        </ScrollAnimation>
    );
  }
}

export default PlacedOrder;
