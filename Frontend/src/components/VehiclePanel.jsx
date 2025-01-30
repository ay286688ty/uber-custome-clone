import React from "react";

const VehiclePanel = (props) => {
  return (
    <div>
      <h5
        className="p-3 text-center w-[93%] absolute top-0"
        onClick={() => {
          props.setVehiclePanelOpen(false);
        }}
      >
        <i className="ri-arrow-down-double-fill text-3xl text-gray-300"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5"> Choose a Vehicle</h3>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
        }}
      >
        <div className="flex border-2 active:border-black mb-2 rounded-xl w-full p-3  items-center justify-between">
          <img
            className="h-13 py-1"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png"
            alt=""
          />
          <div className="-ml-2 w-1/2">
            <h4 className="font-medium text-base">
              UberGo
              <span>
                <i className="ri-user-3-fill">4</i>
              </span>
            </h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-medium text-xs text-gray-600">
              Affordable, compact rides
            </p>
          </div>
          <h2 className="text-xl font-semibold">Rs 192.20</h2>
        </div>
        <div className="flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between">
          <img
            className="h-13"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png"
            alt=""
          />
          <div className=" -ml-2 w-1/2">
            <h4 className="font-medium text-base">
              Moto
              <span>
                <i className="ri-user-3-fill">1</i>
              </span>
            </h4>
            <h5 className="font-medium text-sm">8 mins away</h5>
            <p className="font-medium text-xs text-gray-600">
              Affordable, motorcycle rides
            </p>
          </div>
          <h2 className="text-xl font-semibold">Rs 102.20</h2>
        </div>
        <div className="flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between">
          <img
            className="h-13"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
            alt=""
          />
          <div className="-ml-2 w-1/2">
            <h4 className="font-medium text-base">
              Uber Auto
              <span>
                <i className="ri-user-3-fill">3</i>
              </span>
            </h4>
            <h5 className="font-medium text-sm">19 mins away</h5>
            <p className="font-medium text-xs text-gray-600">
              Affordable, auto rides
            </p>
          </div>
          <h2 className="text-xl font-semibold">Rs 152.20</h2>
        </div>
      </div>
    </div>
  );
};

export default VehiclePanel;
