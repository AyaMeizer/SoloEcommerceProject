import React, { useEffect, useState } from "react";
import product from "./products.json";
import "../style/shop.css";
import { Link } from "react-router-dom";
function Shop() {
  const [shop, setShop] = useState(product);
  const [search, setSearch] = useState("");
  const [visibility, setvisibility] = useState();
  let cartArr = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];
  const [cart, setCart] = useState(cartArr);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(product));
    if (
      !localStorage.getItem("cartItems") ||
      localStorage.getItem("cartItems") === "[]"
    ) {
      setvisibility("hidden");
      localStorage.setItem("visibility", JSON.stringify("hidden"));
    } else {
      setvisibility("visible");
      localStorage.setItem("visibility", JSON.stringify("visible"));
    }
  });

  const filtering = (e) => {
    switch (e.target.value) {
      case "all":
        setShop(product);
        break;
      case "puma":
        setShop(product.filter((item) => item.brand.toLowerCase() === "puma"));
        break;
      case "adidas":
        setShop(
          product.filter((item) => item.brand.toLowerCase() === "adidas")
        );
        break;
      case "nike":
        setShop(product.filter((item) => item.brand.toLowerCase() === "nike"));
        break;
      case "Uomo":
        setShop(product.filter((item) => item.brand.toLowerCase() === "uomo"));
        break;
      case "OM74":
        setShop(product.filter((item) => item.brand.toLowerCase() === "om74"));
        break;
      case "other":
        setShop(
          product.filter(
            (item) =>
              item.brand.toLowerCase() !== "om74" &&
              item.brand.toLowerCase() !== "uomo" &&
              item.brand.toLowerCase() !== "nike" &&
              item.brand.toLowerCase() !== "adidas" &&
              item.brand.toLowerCase() !== "puma"
          )
        );
        break;
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    if (e.target.value !== "" || e.target.value !== null) {
      setShop(
        product.filter(
          (item) =>
            item.name.toLowerCase().match(search.toLowerCase()) ||
            item.texture.toLowerCase().match(search.toLowerCase())
        )
      );
    } else setShop(product);
  };
  const addToCartHandler = (id) => {
    let exist = false;
    cartArr.forEach((element) => {
      if (element.id === id) {
        exist = true;
      }
    });
    if (!exist) {
      cartArr.push(product[id - 1]);
    }

    localStorage.setItem("cartItems", JSON.stringify(cartArr));
    setCart(cartArr);
  };
  let products = shop.map((item, key) => (
    <div className="itemCont" key={key}>
      <img className="itemImg" src={item.img} alt={item.alt} />
      <p>
        {item.name} - {item.texture}
      </p>
      <h3> JOD {item.price}</h3>
      <p>color : {item.color}</p>
      <button
        className="addToCart"
        value={item.id}
        onClick={(e) => addToCartHandler(e.target.value)}
      >
        Add to cart
      </button>
    </div>
  ));

  const deleteItem = (id) => {
    cartArr.forEach((element) => {
      if (element.id === id) {
        cartArr = cartArr.filter((element) => element.id !== id);
        setCart(cartArr);
      }
      localStorage.setItem("cartItems", JSON.stringify(cartArr));
    });
  };

  let inCart = cart.map((item, key) => (
    <div className="sideCart" key={key}>
      <img className="cartSideImg" src={item.img} alt={item.alt} />
      <div>{item.name} </div>
      <div style={{ color: "goldenrod" }}>JOD {item.price} </div>
      <button value={item.id} onClick={(e) => deleteItem(e.target.value)}>
        X
      </button>
    </div>
  ));

  let a = JSON.parse(localStorage.getItem("visibility"));
  return (
    <div className="shopHoleCont">
      <div id="cartDiv" style={{ visibility: a }}>
        <p> In Cart : {inCart.length} items</p>
        {inCart}
        <Link to="/cart">
          <button>View Cart</button>
        </Link>
      </div>
      <div className="shopCont">
        <div className="searchOverlay">
          <input
            className="shopSearch"
            value={search}
            onChange={handleSearch}
            placeholder="search.."
          ></input>
          <select className="categories" onChange={filtering}>
            <option disabled value={"Categories"}>
              Categories
            </option>
            <option className="options" value={"all"}>
              All Shoes
            </option>
            <option className="options" value={"puma"}>
              Puma
            </option>
            <option className="options" value={"nike"}>
              Nike
            </option>
            <option className="options" value={"adidas"}>
              Adidas
            </option>
            <option className="options" value={"Uomo"}>
              Uomo
            </option>
            <option className="options" value={"OM74"}>
              OM74
            </option>
            <option className="options" value={"other"}>
              Other
            </option>
          </select>
        </div>
      </div>
      <div className="items">{products}</div>
    </div>
  );
}

export default Shop;
