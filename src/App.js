import React from "react";
import Tabs from "./components/Tabs";
import Gallery from "./components/Gallery";

const App = () => {
  const appStyle = {
    background: "linear-gradient(180deg, #373E44 -100%, #191B1F 100%)",
    boxSizing: "border-box", // Corrected to camelCase and added quotes around the value
  };

  return (
    <div style={appStyle} className="overflow-hidden">
      <div className="flex  w-[95vw] center h-[90vh] m-[2%] ">
        <div className="flex-1 flex bg-[#363C43] mx-4 rounded-[24px] "></div>{" "}
        {/* Left side empty */}
        <div className="flex-1 flex-shrink flex space-y-8  flex-col">
          <Tabs />
          <Gallery />
        </div>
      </div>
    </div>
  );
};

export default App;
