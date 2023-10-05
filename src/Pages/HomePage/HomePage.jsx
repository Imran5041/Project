
import React from 'react'
import { Header,About,Contact,MeatShop,CategoryHeader } from '../../Containers';
import "./HomePage.scss";
import Seller from '../../Containers/Best-Seller/Seller';
import Recipe from '../../Containers/Recipe/Recipe';
import Review from '../../Containers/Review/Review';
import Foot from '../../Containers/Footer/Foot';

function HomePage() {
  return (
    <div className='HomePage'>
      <Header />
        <MeatShop />
       
     <CategoryHeader />
    
       <About  />
    
      <div className='_text'>
        <div className='logo'></div>
     <Contact title={"Why Meat Shop"}/>
     </div>
     <div className='_text'>
     <div className='logo'></div>
     <Seller title={"Best Seller"}/>
     </div>
      
   
      
      <div className="HomePage__fillRed _txt">
        <button className='btn'>See More</button>
      </div>
    <div className='_text'>
    <div className='logo'></div>
      <Seller title={"Today' Deal"}/>
    </div>
      <div className="HomePage__fillRed _txt">
        <button className='btn'>See More</button>
      </div>
    <div className='_text'>
    <div className='logo'></div>
      <Recipe  title={"Recipe"}/>
    </div>
    <div className="_text">
      <div className='logo'></div>
      <Review title={"Real People By Real Review"} />
      </div>
    <Foot />
      </div>
          
  )
}

export default HomePage
