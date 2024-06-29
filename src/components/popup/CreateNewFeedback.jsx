import React, { useState } from "react";
import { setGlobalState, useGlobalState } from "../../services/Helper";
import { FaTimes } from "react-icons/fa";

const CreateNewFeedback = () => {
  const [createNewFeedbackScale] = useGlobalState("createNewFeedbackScale");

  const [feedback, setFeedback] = useState("");

  const onClose = () => {
    setGlobalState("createNewFeedbackScale", "scale-0");
    reset();
  };

  const reset = () => {
    setFeedback("");
  };

  return (
    <div
      className={`fixed font-poppins flex items-center justify-center w-screen h-screen inset-0 bg-black bg-opacity-50 transform transition-transform duration-300 ${createNewFeedbackScale} popup-visible`}
    >
      <div className="bg-white shadow-xl shadow-black rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
        <form className="flex flex-col" onSubmit={onClose} method="POST">
          <div className="flex justify-between items-center">
            <p className="font-bold">Give Feedback</p>
            <button
              type="button"
              className="border-0 bg-transparent focus:outline-none"
              onClick={onClose}
            >
              <FaTimes />
            </button>
          </div>
          <div className="flex justify-between items-center mt-5 rounded-xl bg-gray-200">
            <textarea
              className="block w-full bg-transparent border-0 text-sm py-3 px-3 text-primary custom-text-placeholder"
              type="text"
              name="feedback"
              placeholder="Your insights matter, type here..."
              onChange={(e) => setFeedback(e.target.value)}
              value={feedback}
              required
            />
          </div>
          <button
            type="submit"
            className="duration-200 hover:scale-105 inline-block px-6 py-2.5 mt-5 text-white font-medium rounded-full shadow-md bg-primary"
          >
            {" "}
            Send Feedback{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateNewFeedback;
