import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeedbackCard from "../cards/FeedbackCard";

const dummyFeedbacks = [
  {
    name: "Alissa",
    feedbacks: "lorem ipsum dolor sit amet",
  },
  {
    name: "Benny",
    feedbacks: "Bagus.",
  },
  {
    name: "Tyler",
    feedbacks:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque bibendum augue, eget lacinia ante molestie ut. Etiam dignissim turpis dolor, ac pharetra diam varius vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec id euismod nisi. Fusce sollicitudin condimentum tincidunt. Proin fringilla, mauris a cursus ultricies, ante dolor convallis nunc, convallis placerat enim odio vitae turpis. Cras rutrum condimentum tempor. Duis at rhoncus sapien.",
  },
  {
    name: "Tyler",
    feedbacks:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque bibendum augue, eget lacinia ante molestie ut. Etiam dignissim turpis dolor, ac pharetra diam varius vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec id euismod nisi. Fusce sollicitudin condimentum tincidunt. Proin fringilla, mauris a cursus ultricies, ante dolor convallis nunc, convallis placerat enim odio vitae turpis. Cras rutrum condimentum tempor. Duis at rhoncus sapien.",
  },
  {
    name: "Tyler",
    feedbacks:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque bibendum augue, eget lacinia ante molestie ut. Etiam dignissim turpis dolor, ac pharetra diam varius vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec id euismod nisi. Fusce sollicitudin condimentum tincidunt. Proin fringilla, mauris a cursus ultricies, ante dolor convallis nunc, convallis placerat enim odio vitae turpis. Cras rutrum condimentum tempor. Duis at rhoncus sapien.",
  },
  {
    name: "Tyler",
    feedbacks:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque bibendum augue, eget lacinia ante molestie ut. Etiam dignissim turpis dolor, ac pharetra diam varius vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec id euismod nisi. Fusce sollicitudin condimentum tincidunt. Proin fringilla, mauris a cursus ultricies, ante dolor convallis nunc, convallis placerat enim odio vitae turpis. Cras rutrum condimentum tempor. Duis at rhoncus sapien.",
  },
];

const ShowFeedbacks = () => {
  let sliderRef = useRef(null);
  const play = () => {
    sliderRef.slickPlay();
  };

  const settings = {
    dots: false,
    className: "center",
    focusOnSelect: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    swipeToSlide: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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

  useEffect(() => {
    play();
  }, []);

  return (
    <section id="feedbacks" className="py-6 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-12 space-y-5 md:mb-16 text-center">
            <div className="inline-block font-poppins px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg text-center text-cn bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
              Words from Others
            </div>
            <h1 className="mb-5 text-3xl font-poppins font-semibold text-white text-center md:text-5xl">
              It's not <span className="text-gradient">just</span> us.
            </h1>
            <p className="text-xl text-gray-100 font-poppins font-normal text-center md:text-2xl">
              Here's what <span className="text-gradient">others</span> have to
              say about us.
            </p>
          </div>
        </div>
        <div className="slider-container">
          <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
            {dummyFeedbacks.map((feedback, index) => {
              return (
                <div key={index}>
                  <div className="font-normal hover:scale-105 duration-500 font-poppins text-white feedback-gradient m-4">
                    <a
                      href="#feedbacks"
                      className="cursor-pointer"
                      onClick={() => toggleExpand(index)}
                    >
                      <div className="relative p-6 space-y-6 leading-none rounded-lg">
                        <div className="flex items-center space-x-2">
                          <img
                            src={`https://api.dicebear.com/9.x/adventurer/svg?seed=${names[id]}`}
                            className="w-6 h-6 bg-center md:w-16 md:-12 lg:w-12 lg:h-12"
                            alt="avatar"
                          />
                          <div>
                            <h3 className="text-md font-semibold text-white lg:text-lg md:text-lg">
                              {feedback.name}
                            </h3>
                          </div>
                        </div>
                        <p
                          className={`leading-normal text-gray-300 text-md ${
                            expandedIndex === index ? "" : "line-clamp-1"
                          }`}
                        >
                          {feedback.feedbacks}
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              )
              // <FeedbackCard key={index} id={index} feedback={feedback}/>
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ShowFeedbacks;
