import React from "react";
import Header from "../Header/Header";
import "./About.css";

export const About = () => {
  return (
    
    <div className="about">
      <Header />
      <div className="about-section">
        <div className="wrapper">
          <div className="typing-demo">
            <h1>Quickbuy.com E-commerce</h1>
          </div>
        </div>
        <h3>Global Ecommerce, We're Committed</h3>
        <h4>Mobile Ecommerce, We Are Here.</h4>
      </div>

      <h1 style={{ textAlign: "center",fontWeight:'800',fontSize:"2.3rem",backgroundColor:"white",padding:"20px 0px",borderRadius:"20px",margin:"5px 5px" }}>Our Services</h1>
      <hr />
      <section>
        <div className="row">
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <i className="fa fa-shopping-cart"></i>
            </div>
            <h3>Cart Functionality</h3>
            <p>
             Add the Items of your choice into cart ,
             get the wide variety of a collections of diffrent items 
            </p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <i className="fas fa-gift"></i>
            </div>
            <h3>Gifts and Rewards</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <i className="fas fa-film"></i>
            </div>
            <h3>Movies & Web Series</h3>
            <p>
             Watch your Favourite shows and Web Series with 
             Premium video quality.
            </p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <i className="fas fa-motorcycle"></i>
            </div>
            <h3>Instant Delivery</h3>
            <p>
              Get Your Ordered Items in just one Click within very short time , 
              No Need to wait More!  
            </p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <i className="fas fa-user"></i>
            </div>
            <h3>Customer Service</h3>
            <p>
           Get 24X7 Customer Support ans Share whatever query or Suggestions and Experience you have   
            </p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <i className="fas fa-plug"></i>
            </div>
            <h3>Electronics</h3>
            <p>
             All types of disital and electronics items available in a very affordable price !
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>

  );
};
