import React,{useEffect} from "react";
import "./App.css";
import Home from "./Home/Home";
import {Routes,Route} from 'react-router-dom';
import { Checkout } from "./Checkout/Checkout";
import { Login } from "./Login/Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { About } from "./About/About";
import { Payment } from "./Payment/Payment.js";




function App() {

  const [{basket},dispatch]=useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser=>{
      console.log("the user is >>",authUser);

      if(authUser){
        //means user is loggedIn
         dispatch({
          type:"SET_USER",
          user:authUser
         }) 

      }
      else{
        //user is loggedOut
          dispatch({
            type:'SET_USER',
            user:null
          })
        
      }


    })

  }, []);


  return (
    <div className="App">

    <Routes>
    <Route path='/'  element={<Home />} />
    <Route path='/checkout'   element={<Checkout />} />
    <Route path='/login'   element={<Login />} />
    <Route path='/About'   element={<About />} />
    <Route path='/Payment'   element={<Payment />} />
    </Routes>
    </div>
  );
}

export default App;
