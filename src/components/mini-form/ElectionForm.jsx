import React, { useEffect } from "react";

const ElectionForm = ({
  electionData,
  onElectionChange,
  onTotalCandidatesChange,
}) => {
  const [minDateTime, setMinDateTime] = useState("")

  useEffect(() => {
    const now = new Date();
    const formatedDateTime = now.toISOString().slice(0, 16)
    setMinDateTime(formatedDateTime);
  }, [])

  return (
    <div>
      <h1 className="text-white font-semibold text-lg mb-10">
        Create New Election
      </h1>
      <div className="flex justify-center items-center">
        <div className="rounded-xl overflow-hidden w-36 h-36">
          <img
            src={
              electionData.electionPicture ||
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
              onChange={(e) =>
                onElectionChange("electionTitle", e.target.value)
              }
              value={electionData.electionTitle}
              required
            />
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <label className="text-white">Election Picture (URL) </label>
          <div className="flex justify-between mt-4 items-center rounded-xl bg-gray-300">
            <input
              className="block w-full bg-transparent border-0 text-sm py-3 px-3 text-primary focus:outline focus:ring-0"
              type="url"
              name="electionPicture"
              onChange={(e) =>
                onElectionChange("electionPicture", e.target.value)
              }
              value={electionData.electionPicture}
              required
            />
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <label className="text-white">Election Total Candidates</label>
          <div className="flex justify-between mt-4 items-center rounded-xl bg-gray-300">
            <input
              className="block w-full bg-transparent border-0 text-sm py-3 px-3 text-primary focus:outline focus:ring-0"
              type="number"
              step={1}
              min={2}
              name="electionTotalCandidates"
              onChange={(e) =>
                onTotalCandidatesChange(parseInt(e.target.value))
              }
              value={electionData.electionTotalCandidates}
              required
            />
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <label className="text-white">Election Start</label>
          <div className="flex justify-between mt-4 items-center rounded-xl bg-gray-300">
            <input
              className="block w-full bg-transparent border-0 text-sm py-3 px-3 text-primary focus:outline focus:ring-0"
              type="datetime-local"
              name="electionStart"
              onChange={(e) =>
                onElectionChange("electionStart", e.target.value)
              }
              min={minDateTime}
              value={electionData.electionStart}
              required
            />
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <label className="text-white">Election End</label>
          <div className="flex justify-between mt-4 items-center rounded-xl bg-gray-300">
            <input
              className="block w-full bg-transparent border-0 text-sm py-3 px-3 text-primary focus:outline focus:ring-0"
              type="datetime-local"
              name="electionEnd"
              min={electionData.electionStart}
              onChange={(e) => onElectionChange("electionEnd", e.target.value)}
              value={electionData.electionEnd}
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
              onChange={(e) =>
                onElectionChange("electionDescription", e.target.value)
              }
              value={electionData.electionDescription}
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectionForm;
