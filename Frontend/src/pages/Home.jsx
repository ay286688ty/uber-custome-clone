import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);

  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          padding: 24,
          // opacity:1
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          padding: 0,
          // opacity:0
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );
  useGSAP(
    function () {
      if (vehiclePanelOpen) {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehiclePanelOpen]
  );

  useGSAP(
    function () {
      if (confirmRidePanel) {
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePanel]
  );
  useGSAP(
    function () {
      if (vehicleFound) {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehicleFound]
  );

  useGSAP(
    function () {
      if (waitingForDriver) {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehicleFound]
  );
  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />
      <div
        onClick={() => {
          setVehiclePanelOpen(false);
        }}
      ></div>
      <div className="h-screen w-screen">
        {/* image for temporary use  */}
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/format:webp/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>

      <div className="flex flex-col justify-end h-screen absolute top-0 w-full ">
        <div className="h-[30%] p-5 bg-white relative ">
          <h6
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false);
            }}
            className="absolute opacity-0 right-6 top-6 text-2xl"
          >
            <i className="ri-arrow-down-double-fill"></i>
          </h6>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form
            className="relative py-3"
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-16 w-1 top-[59%] -translate-y-1/2 left-5 bg-gray-700 rounded-full"></div>
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5"
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              type="text"
              placeholder="Add a pickup location"
            />
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3"
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              type="text"
              placeholder="Add a pick-up location"
            />
          </form>
        </div>
        <div ref={panelRef} className=" bg-white h-0">
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVehiclePanel={setVehiclePanelOpen}
          />
        </div>
      </div>
      <div
        ref={vehiclePanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white p-3 py-6 pt-12"
      >
        <VehiclePanel
          setConfirmRidePanel={setConfirmRidePanel}
          setVehiclePanelOpen={setVehiclePanelOpen}
        />
        <div
          ref={confirmRidePanelRef}
          className="fixed w-full z-10 bottom-0 translate-y-full bg-white p-3 py-6 pt-12"
        >
          <ConfirmRide
            setConfirmRidePanel={setConfirmRidePanel}
            setVehicleFound={setVehicleFound}
          />
        </div>
        <div
          ref={vehicleFoundRef}
          className="fixed w-full z-10 bottom-0 translate-y-full bg-white p-3 py-6 pt-12"
        >
          <LookingForDriver />
        </div>
        <div
          ref={waitingForDriverRef}
          className="fixed w-full z-10 bottom-0  bg-white p-3 py-6 pt-12"
        >
          <LookingForDriver waitingForDriver={waitingForDriver} />
        </div>
      </div>
    </div>
  );
};

export default Home;
