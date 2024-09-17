import React from "react";
import { energy, links } from "../constant/energy";

const Energy = () => {
  return (
    <div className="pt-20 bg-white">
      <main className="flex flex-col w-full p-4">
        {/* Flex container to hold the grid of cars and the links */}
        <div className="flex w-full">
          {/* Car section */}
          <div className="flex-1 w-3/4">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
              {energy.map((e) => (
                <div className="flex flex-col items-center" key={e.title}>
                  <img
                    src={e.img}
                    alt={e.title}
                    className="h-48 justify-end"
                    width="300"
                    height="200"
                    style={{ aspectRatio: "300/200", objectFit: "cover" }}
                  />
                  <h2 className="mt-2 text-xl font-semibold">{e.title}</h2>
                  <div className="flex space-x-4">
                    <a href="#" className="text-blue-500">
                      {e.button[0]}
                    </a>
                    <a href="#" className="text-blue-500">
                      {e.button[1]}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vertical line */}
          <div className="w-px bg-gray-400 mx-3  justify-center"></div>

          {/* Links section */}
          <div className="w-1/4 flex justify-center">
            <div className="space-y-2 md:block">
              {links.map((link, index) => (
                <ul className="space-y-2" key={index}>
                  <li>
                    <a href="#" className="text-lg">
                      {link}
                    </a>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Energy;
