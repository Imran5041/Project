import React from 'react'
import "./Contact.scss";
const data =[
    {
        id: 1,
        title: "Fast Delivery",
        icon:"/photos/helpicon1.png",
    },
    {
        id: 2,
        title: "30 Days Return",
        icon:"/photos/helpicon2.png",
    },
    {
        id: 3,
        title: "24/7 services",
        icon:"/photos/helpicon3.png",
    },
    {
        id: 4,
        title: "Security",
        icon:"/photos/helpicon4.png",
    },
]
function Contact({title}) {
  return (
 
    <div className='Contact' >
         <div className="Contact__titleBar ">
        <p className="_headerText">{title}</p>
        <div className="_spacing">
        {data.map((value,index)=>(

        <div className="Contact__catBox _ptr " key={index} >
           <span className='services'>
            <img src={value?.icon} alt={value?.title} />
           </span>
<p>{ value?.title}</p>
      </div>
        ))}
        </div>
    </div>
    </div>
  )
}

export default Contact
