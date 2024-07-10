import React, { useState } from "react";
import { setGlobalState, useGlobalState } from "../../services/Helper";
import { FaTimes } from "react-icons/fa";
import { giveFeedback } from "../../services/Blockchain";

const CreateNewFeedback = () => {
  const [createNewFeedbackScale] = useGlobalState("createNewFeedbackScale");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const connectedAccount = sessionStorage.getItem("connectedAccount");
    if (connectedAccount) {
      try {
        addFeedback();
      } catch (error) {
        console.log(error.message);
      }
    } else {
      onClose();
      setGlobalState("mustConnectWalletScale", "scale-100");
    }
    reset();
  };

  const addFeedback = async () => {
    await giveFeedback(feedback);
    onClose();
    setGlobalState("successfullyGiveFeedbackScale", "scale-100");
  };

  const onClose = () => {
    setGlobalState("createNewFeedbackScale", "scale-0");
  };

  const reset = () => {
    setFeedback("");
  };

  return (
    <div
      className={`fixed font-poppins flex items-center justify-center w-screen h-screen inset-0 bg-black bg-opacity-50 transform transition-transform duration-300 ${createNewFeedbackScale} popup-visible`}
    >
      <form
        className="bg-white shadow-xl shadow-black rounded-xl w-11/12 md:w-2/5 h-7/12 p-6"
        method="POST"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col">
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
            disabled={feedback == ""}
            className="duration-200 hover:scale-105 inline-block px-6 py-2.5 mt-5 text-white font-medium rounded-full shadow-md bg-primary"
          >
            {" "}
            Send Feedback{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateNewFeedback;
