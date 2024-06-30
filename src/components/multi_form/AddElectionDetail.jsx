import React, { useContext } from "react";
import { StepperContext } from "./context/StepperContext";
import { FaTimes } from "react-icons/fa";

const AddElectionDetail = () => {
  const { addElectionDetail, setAddElectionDetail } = useContext(StepperContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddElectionDetail({
      ...addElectionDetail,
      [name]: value,
    });
  };

  return (
    <div className="rounded-xl w-full overflow-y-auto">
      <div className="flex flex-col custom-text-placeholder">
        <div className="flex justify-center items-center">
          <div className="rounded-xl overflow-hidden w-36 h-36">
            <img
              src={
                addElectionDetail.electionPicture ||
                "https://www.hdwallpapers.in/download/cell_biology_background_hd_wallpaper_cellular-HD.jpg"
              }
              alt="title"
              className="h-full w-full object-cover cursor-pointer"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-5">
          <div className="col-span-2">
            <label className="text-white">Election Title</label>
            <div className="flex justify-between items-center mt-4 rounded-xl bg-gray-300">
              <input
                className="block w-full bg-transparent border-0 text-sm py-3 px-3 text-primary focus:outline focus:ring-0"
                type="text"
                name="electionTitle"
                onChange={handleChange}
                value={addElectionDetail.electionTitle}
                required
              />
            </div>
          </div>
          <div>
            <label className="text-white">Election Picture (URL) </label>
            <div className="flex justify-between mt-4 items-center rounded-xl bg-gray-300">
              <input
                className="block w-full bg-transparent border-0 text-sm py-3 px-3 text-primary focus:outline focus:ring-0"
                type="url"
                name="electionPicture"
                onChange={handleChange}
                value={addElectionDetail.electionPicture}
                required
              />
            </div>
          </div>
          <div>
            <label className="text-white">Election Total Candidates</label>
            <div className="flex justify-between mt-4 items-center rounded-xl bg-gray-300">
              <input
                className="block w-full bg-transparent border-0 text-sm py-3 px-3 text-primary focus:outline focus:ring-0"
                type="number"
                step={1}
                min={2}
                name="electionTotalCandidates"
                onChange={handleChange}
                value={addElectionDetail.electionTotalCandidates}
                required
              />
            </div>
          </div>
          <div>
            <label className="text-white">Election Start</label>
            <div className="flex justify-between mt-4 items-center rounded-xl bg-gray-300">
              <input
                className="block w-full bg-transparent border-0 text-sm py-3 px-3 text-primary focus:outline focus:ring-0"
                type="date"
                name="electionStart"
                onChange={handleChange}
                value={addElectionDetail.electionStart}
                required
              />
            </div>
          </div>
          <div>
            <label className="text-white">Election End</label>
            <div className="flex justify-between mt-4 items-center rounded-xl bg-gray-300">
              <input
                className="block w-full bg-transparent border-0 text-sm py-3 px-3 text-primary focus:outline focus:ring-0"
                type="date"
                name="electionEnd"
                onChange={handleChange}
                value={addElectionDetail.electionEnd}
                required
              />
            </div>
          </div>
          <div className="col-span-2">
            <label className="text-white">Election Description</label>
            <div className="flex justify-between mt-4 items-center rounded-xl bg-gray-300">
              <textarea
                className="block w-full bg-transparent border-0 text-sm py-3 px-3 text-primary focus:outline focus:ring-0"
                type="text"
                name="electionDescription"
                onChange={handleChange}
                value={addElectionDetail.electionDescription}
                required
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddElectionDetail;
