import React from "react";
import Slider from "react-slick";

function Responsive() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings} className="text-white">
        <div>
        <button className="mt-5 text-white font-poppins font-normal rounded-lg btn-blue-gradient py-2 px-4 rounded-lg">
              Explore Elections
            </button>
        </div>
        <div>
        <button className="mt-5 text-white font-poppins font-normal rounded-lg btn-blue-gradient py-2 px-4 rounded-lg">
              Explore Elections
            </button>
        </div>
        <div>
        <button className="mt-5 text-white font-poppins font-normal rounded-lg btn-blue-gradient py-2 px-4 rounded-lg">
              Explore Elections
            </button>
        </div>
        <div>
        <button className="mt-5 text-white font-poppins font-normal rounded-lg btn-blue-gradient py-2 px-4 rounded-lg">
              Explore Elections
            </button>
        </div>
        <div>
        <button className="mt-5 text-white font-poppins font-normal rounded-lg btn-blue-gradient py-2 px-4 rounded-lg">
              Explore Elections
            </button>
        </div>
        <div>
        <button className="mt-5 text-white font-poppins font-normal rounded-lg btn-blue-gradient py-2 px-4 rounded-lg">
              Explore Elections
            </button>
        </div>
      </Slider>
    </div>
  );
}

export default Responsive;
