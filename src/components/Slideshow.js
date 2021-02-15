import React from 'react';
import './styles/slideshow.css'

const Slideshow = () => {

    const showSlides = (n) => {
        var i;
    }

    var slideIndex = 1;
    showSlides(slideIndex);

    const plusSlides = (n) => {
      showSlides(slideIndex=n);
    }

    const currentSlide = (n) => {
        showSlides(slideIndex=n);

        if(n>3){slideIndex=1}
        if(n<1){slideIndex=3}
        for(var i=0;i<3;i++)
        {
            
        }
    }

    
    return (
        <>
        <div className="slideshow-container">
            <div className="mySlides fade">
              <div className='numbertext'>1/3</div>
              <img src='./styles/melita.jpeg' style={{width: '100%',display: 'block'}} />
              <div className="text">Caption</div>
            </div>
            <div className="mySlides fade">
              <div className='numbertext'>2/3</div>
              <img src='./styles/melita.jpeg' style={{width: '100%'}} />
              <div className="text">Caption</div>
            </div>
            <div className="mySlides fade">
              <div className='numbertext'>3/3</div>
              <img src='./styles/melita.jpeg' style={{width: '100%'}} />
              <div className="text">Caption</div>
            </div>

            <a className="prev" onClick={plusSlides(-1)}>&#10094;</a>
            <a className="next" onClick={plusSlides(1)}>&#10095;</a>
         </div>
         <br />
         
         <div style={{textAlign: 'center'}}>
           <span class="dot" onClick={currentSlide(1)}></span>
           <span class="dot" onClick={currentSlide(2)}></span>
           <span class="dot" onClick={currentSlide(3)}></span>
         </div>
        </>
    )
}

export default Slideshow;
