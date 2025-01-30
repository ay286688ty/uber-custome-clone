import React from "react";

const LookingForDriver = (props) => {
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
      <div className="items-center flex justify-between">
        <img
          className="h-10"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png"
          alt=""
        />
        <div className="text-right">
          <h2 className="text-lg font-medium">Abhishek</h2>
          <h4 className="text-xl font-semibold -mt-1 -mb-1">MH 04 EQ 9449</h4>
          <p className="text-sm text-gray-600">BMW X</p>
        </div>
      </div>
      <h3 className="text-2xl font-semibold mb-5"> Looking for a Driver</h3>
      <div className="flex gap-2 justify-between flex-col items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-user-fill"></i>

            <div>
              <h3 className="text-lg font-medium">Lake Vania</h3>
              <p className="text-sm mt-1 text-gray-600">Lily Flower Society</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">Lake Vania</h3>
              <p className="text-sm text-gray-600">Lily Flower Society</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i class="ri-currency-line"></i>

            <div>
              <h3 className="text-lg font-medium">192.20</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookingForDriver;
