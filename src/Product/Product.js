import React from "react";
import "./Product.css";
import { useStateValue } from "../StateProvider";

export const Product = ({id,img,title,price,rating}) => {

  const [{basket},dispatch]=useStateValue();
  
  const addBasket=()=>{
    console.log("this is basket" , basket)
    dispatch({
      type:'ADD_TO_CART',
      item:{
        id:id,
        title:title,
        image:img,
        price:price,
        rating:rating
      }
    })
  }

  return (
    <div className="Product">
      <div className="product_Info">
        <p>{title}</p>

        <p className="product_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>

        <div className="product_rating">
        {
            Array(rating).fill().map((_,i)=>{
               return  <span key={i}>⭐</span>
            })    
        }
        </div>
      </div>

      <img
        src={img}
        alt="product"
      />

        <button onClick={addBasket}>
          Add to Cart
        </button>
    </div>
  );
};
