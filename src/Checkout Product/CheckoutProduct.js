import React from 'react'
import { useStateValue } from '../StateProvider'
import './CheckoutProduct.css'

export const CheckoutProduct = ({id,img,price,title, rating}) => {
    const[{basket},dispatch]=useStateValue()

    const removeFromCart=()=>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id
        })
    }


  return (
    <div className='CheckoutProduct'>
        <img src={img}   alt="checkout" className='CheckoutProduct_Img'/>
        <div className='CheckoutProduct_Info'>
            <p className='CheckoutProduct_Title'>{title}</p>
            <p className='Checkout_Price'><small>₹</small>{price}</p>
            <p className='rating'>
            {
            Array(rating).fill().map((_,i)=>{
               return  <span key={i}>⭐</span>
            })    
        }
            </p>
            <button onClick={removeFromCart}>Remove from Cart</button>
        </div>
    </div>
  )
}
