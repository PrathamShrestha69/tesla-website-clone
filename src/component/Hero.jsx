import React from "react";
import { hero } from "../constant/index";
import Footer from "./Footer";

const Hero = ({ blurred }) => {
  return (
    <div className={`relative h-screen ${blurred ? "blur-lg" : ""}`}>
      {hero.map((e, index) => (
        <div className="relative h-full" key={index}>
          <img src={e.img} alt="Hero" className="object-cover w-full h-full" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h1 className="text-white text-5xl font-bold">{e.title}</h1>
            <h2 className="text-white text-4xl font-bold underline">
              {e.price}
            </h2>
            <p className="text-white text-lg mt-2">{e.fine}</p>

            <div className="mt-80">
              <button className="bg-blue-600 text-white py-2 px-20 rounded-lg mr-9">
                {e.button[0]}
              </button>
              {e.button[1] && (
                <button className="bg-white text-gray-800 py-2 px-20 rounded-lg">
                  {e.button[1]}
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
      <Footer></Footer>
    </div>
  );
};

export default Hero;
