import React from "react";
import { CheckoutProduct } from "../Checkout Product/CheckoutProduct";
import { Footer } from "../Footer/Footer";
import Header from "../Header/Header";
import { useStateValue } from "../StateProvider";
import { Subtotal } from "../Subtotal/Subtotal";
import "./Checkout.css";



export const Checkout = () => {
  const [{ basket,user }, dispatch] = useStateValue();
  return (
    <div style={{backgroundColor:"#C0F1F1"}}>
      <Header />
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg"
            alt="advertisment"
          />
          <h2 className="checkout_title">Hello, <span style={{fontSize:"1.3rem"}}>{user?user.email:""}</span></h2>
          <hr />
          {basket.map((item, i) => {
            return <CheckoutProduct
              key={i}
              id={item.id}
              title={item.title}
              rating={item.rating}
              price={item.price}
              img={item.image}
            />;
          })}
        </div>

        <div className="checkout__Right">
          <Subtotal />
          
        </div>
      </div>
        <Footer />
    </div>
  );
};
