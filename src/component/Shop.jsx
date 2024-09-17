import React from "react";
import { shop } from "../constant/shop";

const Shop = () => {
  return (
    <div className="pt-20 bg-white">
      <main className="flex flex-col w-full p-4">
        {/* Flex container to hold the grid of cars and the links */}
        <div className="flex w-full">
          {/* Car section */}
          <div className="flex-1 w-3/4">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
              {shop.map((e) => (
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Shop;
