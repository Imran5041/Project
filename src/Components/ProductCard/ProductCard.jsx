import React,{useState,useEffect} from 'react';
import axios from "axios";
import "./ProductCard.scss";
import {BsFillStarFill } from "react-icons/bs";
function ProductCard() {
  const [photos, setPhotos] = useState([]);
  useEffect(()=>{
    const fetchPhotos = async () =>{
      try{
        const response = await axios.get("https://api.slingacademy.com/v1/sample-data/photos");
        console.log('API Response:',response.data.photos[0].url);
        setPhotos (response.data.photos[0].url)

      }catch(error){
        console.error('error:',error);
      }
    }
    fetchPhotos();
  },[]);
  return (
    <div className='ProductCard _ptr'>
      <div className="ProductCard__imageBox _ptr">
      <img src={photos}  width="100%" height ="100%"alt='pic' />
        {/* <img src='/photos/Group 78903.jpg'  alt='logo'/> */}
      </div>
      <div className="ContentBox">
        <p className='leftText'>Chicken Leg Pieces</p>
        <p className='rightText'>400G</p>
      </div>
      <div className="ProductCard__stars">
     
      <BsFillStarFill />
    
      

        <BsFillStarFill />
    

<BsFillStarFill />


<BsFillStarFill />


<BsFillStarFill />

      </div>
      <p>Lorem ipsum dolor sit amet, consectetur velit culpa voluptate et modi minus sit  buhgubvukbv?
      </p>
      <div className="PriceBox">
    <p className='PriceBox__newPrice'>Rs.265</p>
    <p className='PriceBox__oldPrice'>Rs.455</p>
      </div>
    <button> Add to Cart</button>
    </div>
  )
}

export default ProductCard
