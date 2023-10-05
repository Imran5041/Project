import React from "react";
import "./Review.scss";
import Carousel from 'react-elastic-carousel';
import { FaQuoteLeft } from 'react-icons/fa';
const breakPoints=[
    {width:1, itemtToShow:1},
    {width:550, itemtToShow:2},
    {width:768, itemtToShow:3},
    {width:1200, itemtToShow:4},
    
    ];
const Review = ({title}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className="Review">
      <div className="Review__titleBar">
        <p className="_headerText">{title}</p>
      </div>
      <Carousel breakPoints={breakPoints}>
      <div className="Review__ImagesCircle">
        <img src="/photos/young-beautiful-woman.png" alt="girl" />
        <div className="Review__icon">
      <FaQuoteLeft  size="2rem"/>
      </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          distinctio<br></br> ipsa atque autem illum officiis iure velit, quae suscipit
          repellat <br></br>reprehenderit dolorem, eveniet dignissimos quibusdam<br></br> magnam
          facilis quaerat, saepe assumenda?
        </p>
        <h3>Lorem Lipsum</h3>
        <h2>Lorem Lipsum</h2>

      </div>

      <div className="Review__ImagesCircle">
      <img src="/photos/young-beautiful-woman.png" alt="girl" />
      <div className="Review__icon">
      <FaQuoteLeft  size="2rem"/>
      </div>
    
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          distinctio<br></br> ipsa atque autem illum officiis iure velit, quae suscipit
          repellat <br></br>reprehenderit dolorem, eveniet dignissimos quibusdam<br></br> magnam
          facilis quaerat, saepe assumenda?30
        </p>
        <h3>Lorem Lipsum</h3>
        <h2>Lorem Lipsum</h2>
        </div>
        </Carousel>
    </div>
  );
};

export default Review;
