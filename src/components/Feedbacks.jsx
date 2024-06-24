import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const Feedbacks = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  var settings = {
    dots: false,
    className: "center",
    focusOnSelect: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    swipeToSlide: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
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
    <section id="testimonials" class="py-10 sm:py-32">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div class="mb-12 space-y-5 md:mb-16 md:text-center">
            <div class="inline-block font-poppins px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg md:text-center text-cn bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
              Words from Others
            </div>
            <h1 class="mb-5 text-3xl font-poppins font-semibold text-white md:text-center md:text-5xl">
              It's not <span className="text-gradient">just</span> us.
            </h1>
            <p class="text-xl text-gray-100 font-poppins font-normal md:text-center md:text-2xl">
              Here's what <span className="text-gradient">others</span> have to
              say about us.
            </p>
          </div>
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            {dummyFeedbacks.map((feedback, index) => (
              <div>
                <div
                  key={index}
                  className="font-normal font-poppins text-white feedback-gradient mx-6"
                >
                  <a
                    href="#testimonials"
                    className="cursor-pointer"
                    onClick={() => toggleExpand(index)}
                  >
                    <div className="relative p-6 space-y-6 leading-none rounded-lg">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
                          className="w-12 h-12 bg-center bg-cover border rounded-full"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-white">
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
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Feedbacks;
