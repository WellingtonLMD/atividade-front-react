import React, { useState } from 'react';
import { ImageData } from './CarouselImg.js';
import  './Carousel.css';

function Carousel ({ imgs })  {
  const [current, setCurrent] = useState(0);
  const length = imgs.length;

  function next() {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  function prev() {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(imgs) || imgs.length <= 0) {
    return null;
  }

  return (
    
    <section className='carousel'>
      {ImageData.map((imgs, index) => {
        return (
          <div id='container'
            className={index === current}    
            key={index}>

           
            {index === current && (
              <div className='carousel-text' > 
              <div className='icon'><img src={imgs.icon} /></div> <br/> 
              <div className='title'>{imgs.title}</div> <br/> 
              <div className='text'>{imgs.text}</div>  
              </div>
            )}


            {index === current && (
              <div><img src={imgs.image} className='carousel-image' /></div>
            )}

          </div>
        );
      })}
      <div>
      <button className='left' onClick={prev} />
      <button className='right' onClick={next} />
      </div>
    </section>
    
  );
};

export default Carousel;