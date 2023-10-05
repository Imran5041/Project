import React from 'react'
import "./About.scss"
function About() {
  return (
    <div className='About'>
      <div className="About__title">
        <h4>About us</h4>
        <h2>We Best Provide<br></br>Meat</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br> Quod dignissimos earum quidem laudantium, voluptatem<br></br> maxime expedita explicabo perferendis corporis quasi </p>
        &nbsp;
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br> Quod dignissimos earum quidem laudantium, voluptatem<br></br> maxime expedita explicabo perferendis corporis quasi</p>
      </div>
      <div className="About__pic">
        <img src='/photos/whiteChicken.png' alt='about' />
      </div>
    </div>
  )
}

export default About
