import React from "react";
import regions from "../constant/language";

const Language = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Full width and fixed position */}
      <div className="w-full max-h-[80vh] overflow-y-auto bg-white p-4 shadow-md">
        {/* Adjust height to make it scrollable */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-screen-xl mx-auto">
          {Object.entries(regions).map(([region, countries]) => (
            <div key={region}>
              <h3 className="font-bold text-lg mb-4">{region}</h3>
              {countries.map((item) => (
                <div
                  key={item.country}
                  className={`${
                    item.highlighted ? "bg-gray-100" : ""
                  } p-2 rounded mb-2 language-item`}
                >
                  <p className="font-semibold">{item.country}</p>
                  <p className="text-sm text-gray-500">
                    {item.languages.join(" ")}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Language;
