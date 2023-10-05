import React from 'react'
import "./MeatShop.scss";
function MeatShop() {
  function myFun(){
    document.getElementById().innerHTML=Date()
  }
  return (
    <div className='MeatShop'>
   
      <div className="MeatShop__banner">
      <img src='/photos/black shadow.png' alt='black'  className='MeatShop__banner__black'/>
        <img src='/photos/meat.png' alt='pic' width={"100%"} />

<div className="MeatShop__title _txt">
  <h1>Meat Shop</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, blanditiis. Praesentium eum quidem corrupti quia!<br></br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, blanditiis. Praesentium eum quidem corrupti quia!</p>
  <button type='button' className='btn'>BUY NOW</button>
  
  <div>
<div className="MeatShop__red">
  <button type='button' className='btn2'>Category</button>
  
</div>

  
  </div>
</div>

      
      
      </div>

     
      
    </div>
  )
}

export default MeatShop
