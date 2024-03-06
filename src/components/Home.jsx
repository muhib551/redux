import React from "react";
import "../App.css";

const Home = () => {
  return (
    <div>
      <div className="add-to-cart">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4357/4357325.png"
          alt=""
        />
      </div>
      <h1>HOME COMPONENT</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src={
              "https://www.ineedamobile.com/wp-content/uploads/2019/03/iphone-x-600x598.png"
            }
            alt=""
          />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <br />
          <span>Price: $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
