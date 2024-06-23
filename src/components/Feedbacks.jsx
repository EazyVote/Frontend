import React from "react";

const dummyFeedbacks = [
    {
        'name': 'Alissa',
        'feedbacks': 'lorem ipsum dolor sit amet'
    },
    {
        'name': 'Benny',
        'feedbacks': 'Bagus.'
    },
    {
        'name': 'Tyler',
        'feedbacks': 'lorem ipsum dolor sit amet'
    },
]

const Feedbacks = () => {
  return (
    <section id="testimonials" class="py-10 sm:py-32">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
            <div class="mb-12 space-y-5 md:mb-16 md:text-center">
                <div
                    class="inline-block font-poppins px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg md:text-center text-cn bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
                    Words from Others
                </div>
                <h1 class="mb-5 text-3xl font-poppins font-semibold text-white md:text-center md:text-5xl">
                    It's not <span className="text-gradient">just</span> us.
                </h1>
                <p class="text-xl text-gray-100 font-poppins font-normal md:text-center md:text-2xl">
                    Here's what <span className="text-gradient">others</span> have to say about us.
                </p>
            </div>
        </div>
        <ul
          role="list"
          class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          <li>
            <ul role="list" class="flex flex-col gap-y-6 sm:gap-y-8">
              <li>
                <figure class="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                  <svg
                    aria-hidden="true"
                    width="105"
                    height="78"
                    class="absolute left-6 top-6 fill-slate-100"
                  >
                    <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path>
                  </svg>
                  <blockquote class="relative">
                    <p class="text-lg tracking-tight text-slate-900">
                      I love the fitness apparel and gear I purchased from this
                      site. The quality is exceptional and the prices are
                      unbeatable.
                    </p>
                  </blockquote>
                  <figcaption class="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                    <div>
                      <div class="font-display text-base text-slate-900">
                        Sheryl Berge
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </li>
            </ul>
          </li>
          <li>
            <ul role="list" class="flex flex-col gap-y-6 sm:gap-y-8">
              <li>
                <figure class="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                  <svg
                    aria-hidden="true"
                    width="105"
                    height="78"
                    class="absolute left-6 top-6 fill-slate-100"
                  >
                    <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path>
                  </svg>
                  <blockquote class="relative">
                    <p class="text-lg tracking-tight text-slate-900">
                      As a professional athlete, I rely on high-performance gear
                      for my training. This site offers a great selection of
                      top-notch products.
                    </p>
                  </blockquote>
                  <figcaption class="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                    <div>
                      <div class="font-display text-base text-slate-900">
                        Leland Kiehn
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </li>
            </ul>
          </li>
          <li>
            <ul role="list" class="flex flex-col gap-y-6 sm:gap-y-8">
              <li>
                <figure class="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                  <svg
                    aria-hidden="true"
                    width="105"
                    height="78"
                    class="absolute left-6 top-6 fill-slate-100"
                  >
                    <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path>
                  </svg>
                  <blockquote class="relative">
                    <p class="text-lg tracking-tight text-slate-900">
                      The fitness apparel I bought here fits perfectly and feels
                      amazing. I highly recommend this store to anyone looking
                      for quality gear.
                    </p>
                  </blockquote>
                  <figcaption class="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                    <div>
                      <div class="font-display text-base text-slate-900">
                        Peter Renolds
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Feedbacks;
