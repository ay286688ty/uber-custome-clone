import React from "react";
import { Link } from "react-router-dom";
const Start = () => {
  return (
    <div>
      <div className=" bg-cover bg-center bg-[url(https://thumbs.dreamstime.com/z/genshin-impact-background-desktop-pictures-text-wallpaper-wallpaper-desktop-k-tree-green-wallpaper-k-genshin-impact-background-304395313.jpg?ct=jpeg)]  h-screen pt-8  flex justify-between flex-col w-full bg-blue-400">
        <img
          className="w-16 ml-8"
          src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg"
          alt=""
        />
        <div className="bg-white px-4 pb-7 py-4">
          <h2 className="text-3xl font-bold'">Get Started with Uber</h2>
          <Link
            to="/login"
            className="flex iems-center justify-center w-full bg-black text-white py-3  rounded mt-4"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
