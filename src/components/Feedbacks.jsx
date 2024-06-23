import React, { useState } from "react";

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
];

const Feedbacks = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
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

        <ul
          role="list"
          class="mx-auto font-poppins mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {dummyFeedbacks.map((feedback) => (
            <li class="text-sm leading-6">
              <div class="relative group">
                <div
                  className={`absolute transition rounded-lg opacity-50 -inset-1 bg-blue-gradient blur duration-400 ${
                    expanded ? "opacity-100 duration-200" : ""
                  }`}
                ></div>
                <a
                  href="#testimonials"
                  className="cursor-pointer"
                  onClick={toggleExpand}
                >
                  <div
                    className="relative p-6 space-y-6 leading-none rounded-lg bg-primary ring-1 ring-gray-900/5"
                  >
                    <div class="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
                        class="w-12 h-12 bg-center bg-cover border rounded-full"
                      />
                      <div>
                        <h3 class="text-lg font-semibold text-white">
                          {feedback.name}
                        </h3>
                      </div>
                    </div>
                    <p
                      className={`leading-normal text-gray-300 text-md ${
                        expanded ? "" : "line-clamp-2"
                      }`}
                    >
                      {feedback.feedbacks}
                    </p>
                  </div>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Feedbacks;
