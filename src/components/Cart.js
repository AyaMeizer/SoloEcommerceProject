import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "../style/cart.css";
function Cart() {
  let cartArray = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];
  const [state, setState] = useState(1);
  const [Cart, setCart] = useState(cartArray);
   let Navigate=useNavigate()
  let total=0
     cartArray.forEach(element => {
         return total=total+element.count*element.price
        }
        );
        localStorage.setItem("totalPrice",total)
  const plus = (id) => {
    cartArray.forEach((element) => {
      if (element.id === id) {
        if (element.count < 10) {
          element.count += 1;
          setState(element.count);
          setCart(cartArray);
        }
      }
    });
    localStorage.setItem("cartItems", JSON.stringify(cartArray));
  };

  const minus = (id) => {
    cartArray.forEach((element) => {
      if (element.id === id) {
        if (element.count) {
          element.count -= 1;
          setState(element.count);
          setCart(cartArray);
        } else {
          cartArray = cartArray.filter((element) => element.id !== id);
          setCart(cartArray);
        }
      }
      localStorage.setItem("cartItems", JSON.stringify(cartArray));
    });
  };

  const deleteItem = (id) => {
    cartArray.forEach((element) => {
        if (element.id === id) {
            setCart(cartArray.filter((element) => element.id !== id));
            localStorage.setItem(
                "cartItems",
                JSON.stringify(cartArray.filter((element) => element.id !== id))
                );
            }
    });
  };
  let cart = Cart.map((item, key) => (
    <div className="cartItem" key={key}>
      <img className="cartItemImg" src={item.img} alt={item.alt} />
      <div className="cartInfo">
        <p className="cartItemName">
          {item.name} - {item.texture}
        </p>
        <p>color: {item.color}</p>
      </div>
      <h3 className="cartItemPrice">JOD {item.price}</h3>
      <div className="cartBtns">
      <button value={item.id} onClick={(e) => minus(e.target.value)}>
        -
      </button>
      {item.count}
      <button value={item.id} onClick={(e) => plus(e.target.value)}>
        +{" "}
      </button>
      <button value={item.id} onClick={(e) => deleteItem(e.target.value)}>
        X
      </button>
      </div>
    </div>
  ));
  const checkoutHandler=()=>{
    if(localStorage.getItem("logged_in")){
      Navigate("/checkout")
    }
    else{
      Navigate("/account")
    }
  }
  if (cartArray.length) {
    return (
      <div className="cartCont">
        {cart}
        <p>Total price {total}</p>
        <div>
        <button>
          <Link to="/shop">Add Item</Link>{" "}
        </button>
        <button onClick={checkoutHandler}>Check Out</button>
      </div>
      </div>
    );
  } else {
    return (
      <div className="cartCont">
        <img
          src="https://redifo.com/public/images/empty-cart.png"
          alt="empty cart"
        />
          <button>
          <Link to="/shop">Add Item</Link>{" "}
        </button>
      </div>
    );
  }
}
export default Cart;
