import React from 'react'
import "./CategoryHeader.scss";
const Product =[

{
    id: 1,
    title: "Chicken",
    icon: "/photos/icon5.png",
},
{
    id: 2,
    title: "Mutton",
    icon: "/photos/icon4.png",
},
{
    id: 3,
    title: "Fish",
    icon: "/photos/icon3.png",
},
{
    id: 4,
    title: "Non Veg",
    icon: "/photos/icon2.png",
},
{
    id: 5,
    title: "See Food",
    icon: "/photos/icon1.png",
},
{
    id: 6,
    title: "Chicken",
    icon: "/photos/icon5.png",
},
{
    id: 7,
    title: "Mutton",
    icon: "/photos/icon4.png",
},
{
    id: 8,
    title: "Chicken",
    icon: "/photos/icon5.png",
},
];
function CategoryHeader () {
  return (
    <div className='CategoryHeader'>
        <div className="CategoryHeader__titleBar">
        </div>
        {Product.map((item, index)=>(
           <div className='CategoryHeader__catBox _ptr' key={index}>
            
            <span className='icon'>

  <img src={item?.icon} alt={item.title}/>
            </span>
            <p>{item?.title}</p>
           </div>

        ))}
      
    </div>
  )
}

export default CategoryHeader
