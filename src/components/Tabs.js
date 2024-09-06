import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("about");

  const widgetStyle = {
    //width: "720px",
    //height: "330px",
    gap: "0px",
    opacity: "1",
    backgroundColor: "#363C43",
    borderRadius: "24px",
  };

  return (
    <div
      style={widgetStyle}
      className="flex-grow bg-gray-800 p-4 rounded-[24px] shadow-lg"
    >
      <div className="flex justify-between py-1 px-1 bg-black rounded-[24px] mb-4">
        <button
          className={`px-4 py-2 rounded-[24px] ${
            activeTab === "about"
              ? "bg-[#363C43] rounded-lg shadow-lg text-white"
              : "text-white"
          } mr-4`} // Apply margin-right for spacing
          onClick={() => setActiveTab("about")}
        >
          About Me
        </button>
        <button
          className={`px-4 py-2 rounded-[24px] ${
            activeTab === "experiences"
              ? "bg-[#363C43] rounded-[24px] shadow-lg text-white"
              : "text-white"
          } mr-4`} // Apply margin-right for spacing
          onClick={() => setActiveTab("experiences")}
        >
          Experiences
        </button>
        <button
          className={`px-2  rounded-lg ${
            activeTab === "recommended"
              ? "bg-[#363C43] rounded-[24px] shadow-lg text-white"
              : "text-white"
          }`} // No margin-right for the last button
          onClick={() => setActiveTab("recommended")}
        >
          Recommended
        </button>
      </div>
      <div className="text-gray-300">
        {activeTab === "about" && (
          <p>
            Hello! I'm Dave, your sales rep here from Salesforce. I've been
            working at this awesome company for 3 years now.
            <br />I was born and raised in Albany, NY & have been living in
            Santa Carla for the past 10 years my wife Tiffany and my 4 year old
            twin daughters - Emma and Ella. Both of them are just starting
            school, so my calendar is usually blocked between 9-10 AM.
          </p>
        )}
        {activeTab === "experiences" && <p>{/* Experiences content */}</p>}
        {activeTab === "recommended" && <p>{/* Recommended content */}</p>}
      </div>
    </div>
  );
};

export default Tabs;
