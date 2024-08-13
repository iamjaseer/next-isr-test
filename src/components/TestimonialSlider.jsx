'use client'
import Slider from "react-slick";


export default function TestimonialSlider({data}) {






  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '',
    prevArrow: '',
    autoplay: true,
    arrows: false,
    autoplaySpeed: 7000,
  };


  return (<>

<Slider {...settings}>

{data.map((item, key) => {
    return( 
 <div key={key} className="testimonial-slider-wrpr">
      <div className="content" dangerouslySetInnerHTML={{ __html: item.content} } />
      <p>{item.title}</p>
    </div>
    )
   })}
    </Slider>

  </>)
}