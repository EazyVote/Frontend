import React from "react";

const AddCandidateForm = ({ index, candidate, handleCandidateChange }) => {
  return (
    <div>
      <h1 className="text-white mt-8 font-semibold text-lg">
        Add Candidate Detail ({index + 1})
      </h1>
      <div className="flex justify-center items-center mt-14">
        <div className="rounded-xl overflow-hidden w-36 h-36">
          <img
            src={
              candidate.photo ||
              "https://www.hdwallpapers.in/download/cell_biology_background_hd_wallpaper_cellular-HD.jpg"
            }
            alt="title"
            className="h-full w-full object-cover cursor-pointer"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-5">
        <div className="col-span-2">
          <label className="text-white">Candidate Name</label>
          <div className="flex justify-between items-center mt-4 rounded-xl bg-gray-300">
            <input
              className="block w-full bg-transparent border-0 text-sm py-3 px-3 text-primary focus:outline focus:ring-0"
              type="text"
              name="electionTitle"
              onChange={(e) =>
                handleCandidateChange(index, "name", e.target.value)
              }
              value={candidate.name}
              required
            />
          </div>
        </div>
        <div className="col-span-2">
          <label className="text-white">Candidate Photo (URL) </label>
          <div className="flex justify-between items-center mt-4 rounded-xl bg-gray-300">
            <input
              className="block w-full bg-transparent border-0 text-sm py-3 px-3 text-primary focus:outline focus:ring-0"
              type="text"
              name="electionTitle"
              onChange={(e) =>
                handleCandidateChange(index, "photo", e.target.value)
              }
              value={candidate.photo}
              required
            />
          </div>
        </div>
        <div className="col-span-2">
          <label className="text-white">Candidate Vision</label>
          <div className="flex justify-between items-center mt-4 rounded-xl bg-gray-300">
            <textarea
              className="block w-full bg-transparent border-0 text-sm py-3 px-3 text-primary focus:outline focus:ring-0"
              type="text"
              name="electionTitle"
              onChange={(e) =>
                handleCandidateChange(index, "vision", e.target.value)
              }
              value={candidate.vision}
              required
            />
          </div>
        </div>
        <div className="col-span-2">
          <label className="text-white">Candidate Mission</label>
          <div className="flex justify-between items-center mt-4 rounded-xl bg-gray-300">
            <textarea
              className="block w-full bg-transparent border-0 text-sm py-3 px-3 text-primary focus:outline focus:ring-0"
              type="text"
              name="electionTitle"
              onChange={(e) =>
                handleCandidateChange(index, "mission", e.target.value)
              }
              value={candidate.mission}
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCandidateForm;
