import React from "react";

const LocationSearchPanel = (props) => {
  // sample array for lectures
  const locations = [
    "Block no-9, near Richmond,Hiranandani sector,Powai mumbai-72",
    "Block no-2, near Castle Rock,Hiranandani sector,Powai mumbai-72",
    "Block no-7, near Lake Rock,Hiranandani sector,Powai mumbai-72",
    "Block no-3, near Lake vila,Hiranandani sector,Powai mumbai-72",
  ];

  return (
    <div>
      {/* Display fetched suggestions */}
      {locations.map(function (elem, idx) {
        return (
          <div
            key={idx}
            onClick={() => {
              props.setVehiclePanel(true);
              props.setPanelOpen(false);
            }}
            className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start"
          >
            <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium">{elem}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
