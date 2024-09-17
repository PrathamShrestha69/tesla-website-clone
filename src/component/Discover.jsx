import React from "react";

const Discover = () => {
  // Footer content data as an array of objects
  const footerData = [
    {
      title: "Resources",
      links: [
        { name: "Demo Drive" },
        { name: "Insurance" },
        { name: "Military Purchase Program" },
        { name: "Video Guides" },
        { name: "Customer Stories" },
        { name: "Events" },
      ],
    },
    {
      title: "Location Services",
      links: [
        { name: "Find Us", url: "#" },
        { name: "Find a Collision Center" },
        { name: "Find a Certified Installer" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About" },
        { name: "Careers" },
        { name: "Investor Relations" },
      ],
    },
  ];

  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Dynamically render each section */}
        {footerData.map((section, index) => (
          <div key={index}>
            <h4 className="text-gray-600 font-semibold mb-4">
              {section.title}
            </h4>
            <ul className="space-y-2">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href="#" className="text-gray-700 hover:underline">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Discover;
