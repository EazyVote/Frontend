import { faker } from "@faker-js/faker";
import React from "react";
import { getRandomId } from "../../services/Helper";

const FeedbackCard = ({ id, feedback,  isExpanded, toggleExpand }) => {
  const names = Array.from({ length: 20 }, () => faker.person.fullName());
  const randId = getRandomId(0, 19);

  return (
    <div>
      <div className="font-normal hover:scale-105 duration-500 font-poppins text-white feedback-gradient m-4">
        <a
          href="#feedbacks"
          className="cursor-pointer"
          onClick={() => toggleExpand(id)}
        >
          <div className="relative p-6 space-y-6 leading-none rounded-lg">
            <div className="flex items-center space-x-2">
              <img
                src={`https://api.dicebear.com/9.x/adventurer/svg?seed=${names[randId]}`}
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
                isExpanded ? "" : "line-clamp-1"
              }`}
            >
              {feedback.feedbacks}
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default FeedbackCard;
