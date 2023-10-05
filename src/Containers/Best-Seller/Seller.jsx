import React from 'react';
import { ProductCard } from '../../Components'
import "./Seller.scss";


const data =[1, 1, 1, 1];
function Seller({title}) {
  
  return (
    <div className='Seller'>
            <div className="Seller__titleBar">
        <p className="_headerText">{title}</p>
      <div className="Seller__container">
        {data.map((value, index)=>(
<div className='proBox' key={index}>
<ProductCard />
</div>
      
    ))}
      </div>
      </div>
    </div>
  );
}

export default Seller
