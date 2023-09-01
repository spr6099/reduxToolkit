import React from 'react'
import "./CartButtons.css"
const BeforeCart = ({addTocart}) => {
  return (
    <div className='before-cart'>
      <button className='add-cart-button' onClick={addTocart}>Add to cart</button>
    </div>
  )
}

export default BeforeCart
