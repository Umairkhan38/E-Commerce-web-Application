import React from "react";
import "./Payment.css";
import { useStateValue } from "../StateProvider";
import { CheckoutProduct } from "../Checkout Product/CheckoutProduct.js";
import Header from "../Header/Header";
import CurrencyFormat from "react-currency-format";

import { getBasketTotal } from "../Reducer.js";
import { Footer } from "../Footer/Footer";

export const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="payment">
      <Header />

      {/* Customer's Address */}
      <div className="payment--container">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <h2>
                Total Amount of ( {basket?.length} ) Items :{" "}
                <strong>{value} /-</strong>{" "}
              </h2>
            </>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₹"}
        />
        <hr />

        <div className="payment--section">
          <div className="payment--address">
            <div>
              <h3>Delivery Address:</h3>
              <p>
                <i>{user?.email}</i>
              </p>
            </div>
            <input className="payment-ip" type="text" 
              value="Royal Apt, Room 208, Shivaji Nagar, Bandra,Mumbai-400050"  />
          </div>
        </div>

          <hr />  

        {/* Cart Review */}
        <div className="payment--section">
          <div className="payment--items">
          <h2>Review Your Product Details:</h2>
            {basket.map((item) => (
              <CheckoutProduct
              key={item.id}
                id={item.id}
                title={item.title}
                img={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment--section">
          <h2>Payment Method:</h2>
          <div className="payment--details">
              <button className="cash">Cash Buy</button>
              <button className="online">Online</button>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
