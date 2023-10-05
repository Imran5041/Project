import React from 'react'
import "./RecipeCard.scss";
import { BsStar } from 'react-icons/bs';
function RecipeCard() {
  return (
    <div className='RecipeCard'>
      <div className="RecipeCard__logo _ptr">
        <img src='/photos/vegitable.png' alt='logo' width={"100%"} height={"100%"} />
      </div>
      <div className="RecipeCardText">
        <p className='RecipeCardText__leftTitle'>Chicken Dum Biryani</p>
        <p className='RecipeCardText__rightTitle'>Rs.198</p>
      </div>
      <h6>Lorem ipsum dolor sit amet, consectetur.<br></br> Est ratione  sed tempore assumenda<br></br></h6>
      <button className='btn'><BsStar className='star' />4.0</button>
    </div>
  )
}

export default RecipeCard

