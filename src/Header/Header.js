import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import "./Header.css";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import { Logo } from "./Logo";

function Header() {
  const [{ basket, user }] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  const responsive=()=>{
    const r=document.getElementById("resHeader");
    const i=document.getElementById("rIcon");
    if (r.className === "Header") {
      r.className += " responsive";
      i.className += " resIcon";
    } else {
      r.className = "Header";
      i.className = "icon";

    }
  }




  return (
    <div className="Header" id="resHeader">

  <div className="icon" onClick={responsive} id="rIcon">
  <i className="fa fa-bars"></i>
  </div>


      <div className="logo">
        <Link style={{ textDecoration: "none" }} to="/">
          <Logo />
        </Link>

      </div>
      <div className="leftItems">
        <div className="headeroption">
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            <span className="headerOptLineTwo">Home</span>
          </Link>
        </div>
        <div style={{ marginLeft: "30px" }} className="headeroption">
          <Link to="/About" style={{ color: "white", textDecoration: "none" }}>
            <span className="headerOptLineTwo">About</span>
          </Link>
        </div>
      </div>

      <div className="header_nav">
        <div className="header_search">
          <input
            type="text"
            placeholder="Search Items ..."
            className="header__input"
          />
          <SearchIcon className="yellowIcon" />
        </div>

        <Link to="/Login" style={{ color: "white", textDecoration: "none" }}>
          <div onClick={handleAuthentication} className="headerOption">
            <span className="headerOptLineOne">
              {user ? user.email : "Hello Dear!"}
            </span>
            <span className="headerOptLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link style={{ color: "white" }} to="/checkout">
          <div className="headerOption_basket">
            <ShoppingCartIcon />
            <span className="headerOptLineTwo basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
