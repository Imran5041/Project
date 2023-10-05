import React from 'react'
import { RecipeCard } from '../../Components'
import "./Recipe.scss";

const product =[1,1,1,1];
function Recipe({title}) {
  return (
    <div className='Recipe__product _box'>
            <div className="Recipe__titleBar _logo">
     
        <p className="_headerText">{title}</p>
      <div className="Recipe__container">
{product.map((value,index)=>(
  <div className='proBox' key={index}>
    <RecipeCard />
    </div>
))}
      </div>
     
      </div>
    </div>
  )
}

export default Recipe
