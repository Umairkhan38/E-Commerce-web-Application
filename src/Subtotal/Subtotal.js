import React from 'react'
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from '../Reducer';
import { useStateValue } from '../StateProvider';
import './Subtotal.css';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";


export const Subtotal = () => {

  const [{basket,user}]=useStateValue();
  const navigate=useNavigate();

  console.log(getBasketTotal(basket))

  return (

    <div className='subtotal'>
          <CurrencyFormat 
         renderText = { (value) => (
          <>
                <p>Subtotal ({basket?.length} items) : <strong>{value}</strong> </p>
                <small className="subtotal--gift">
                    <input type="checkbox" /> This order contains a gift
                </small>
          </>
         )}
         decimalScale = {2}
         value = {getBasketTotal(basket)}
         displayType = {"text"}
         thousandSeparator = {true}
         prefix = {"₹"}
      />      
      <button onClick={(e)=>user?navigate('/Payment'):toast.error("Please Sign In to proceed for payment!")}>Proceed to Buy</button>

    </div>
  )
}
