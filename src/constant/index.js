import {
  model3,
  modelS,
  modelX,
  modelY,
  powershell,
  solarPanel,
  solarRoof,
  accessories,
  cybertruck,
} from "../assets/index";

export const navLinks = [
  {
    id: "modelS",
    title: "Model S",
  },
  {
    id: "model3",
    title: "Model 3",
  },
  {
    id: "modelX",
    title: "Model X",
  },
  {
    id: "modelY",
    title: "Model Y",
  },
  {
    id: "solarRoof",
    title: "Solar Roof",
  },
  {
    id: "solarPanels",
    title: "Solar Panels",
  },
];

export const hero = [
  {
    id: "modelY",
    img: modelY,
    title: "Model Y",
    fine: "1.99% APR Financing",
    price: "From $31,490",
    button: ["Custom Order", "Demo Drive"],
  },
  {
    id: "model3",
    img: model3,
    title: "Model 3",
    fine: "1.99% APR Financing",
    price: "From $34,990",
    button: ["Custom Order", "Experience Model 3"],
  },
  {
    id: "modelX",
    img: modelX,
    title: "Model X",
    fine: "From $65,990",
    price: "After Federal Tax Credit $7,500 " + "and Est.Gas Saving $6,500",
    button: ["Custom Order", "Demo Drive"],
  },
  {
    id: "modelS",
    img: modelS,
    title: "Model S",
    fine: "From $68,490",
    price: "Est.Gas Saving $6,500",
    button: ["Custom Order", "Demo Drive"],
  },
  {
    id: "cybertruck",
    img: cybertruck,
    title: "Cyber Truck",
    fine: "Foundation Series",
    button: ["Custom Order", "Demo Drive"],
  },

  {
    id: "solarPanels",
    img: solarPanel,
    title: "Solar Panels",
    fine: "Schedule a Virtual Consultation",
    button: ["Order Now", "Learn More"],
  },
  {
    id: "solarRoof",
    img: solarRoof,
    title: "Solar Roof",
    fine: "Produce Clean Energy From Your Roof",
    button: ["Order Now", "Learn More"],
  },
  {
    id: "powershell",
    img: powershell,
    title: "Powerwall",
    fine: "",
    button: ["Order Now", "Learn More"],
  },
  {
    id: "accessories",
    img: accessories,
    title: "Accessories",
    fine: "",
    button: ["Shop Now"],
  },
];
