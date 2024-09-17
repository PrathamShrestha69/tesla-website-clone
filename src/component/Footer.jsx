import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black text-white text-sm text-center px-96 py-20  ">
      <p>
        1 Price before estimated savings is $46,630, including Destination and
        Order Fees, but excluding taxes and other fees. Subject to change.
        Vehicle shown has upgrades that will increase the price. Estimated
        savings includes $6,000 in gas savings estimated over five years, the
        $7,500 Federal Tax Credit and state incentives, available to eligible
        buyers and subject to MSRP caps. Not all vehicles, customers or finance
        options will be eligible. Terms apply.
      </p>
      <br />
      <p>
        2 Price before estimated savings is $44,130, including Destination and
        Order Fees, but excluding taxes and other fees. Subject to change.
        Vehicle shown has upgrades that will increase the price. Estimated
        savings includes $5,000 in gas savings estimated over five years, the
        $7,500 Federal Tax Credit and state incentives, available to eligible
        buyers and subject to MSRP caps. Model 3 Rear-Wheel Drive and leases not
        eligible for the Federal Tax Credit. Terms apply.
      </p>
      <br />
      <p>
        3 Price before estimated savings is $81,630, including Destination and
        Order Fees, but excluding taxes and other fees. Subject to change.
        Vehicle shown has upgrades that will increase the price. Estimated
        savings includes $6,500 in gas savings estimated over five years, the
        $7,500 Federal Tax Credit and state incentives, available to eligible
        buyers and subject to MSRP caps. Not all vehicles, customers or finance
        options will be eligible. Terms apply.
      </p>
      <br />
      <p>
        4 Price before estimated savings is $76,630, including Destination and
        Order Fees, but excluding taxes and other fees. Subject to change.
        Vehicle shown has upgrades that will increase the price. Estimated
        savings includes $6,500 in gas savings estimated over five years and
        state incentives, available to eligible buyers and subject to MSRP caps.
        Not all vehicles, customers or finance options will be eligible. Terms
        apply.
      </p>
      <br />

      {/* Links section */}
      <div className="bg-black text-white py-4 px-6">
        <div className="container mx-auto">
          <ul className="flex flex-wrap justify-center items-center space-x-4 text-sm">
            {[
              "Tesla © 2024",
              "Privacy & Legal",
              "Vehicle Recalls",
              "Contact",
              "News",
              "Get Updates",
              "Locations",
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={`/${item
                    .toLowerCase()
                    .replace(/ & /g, "-")
                    .replace(/ /g, "-")}`}
                  className="hover:underline font-bold text-gray-400"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
