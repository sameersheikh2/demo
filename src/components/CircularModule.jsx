// src/components/CircularModule.js
import React from "react";
import "./CircularModule.css";

const services = [
  "Logistics Execution",
  "Cross-Border Solutions",
  "Transportation Management",
  "LTL & Parcel Solutions",
  "Project Logistics",
  "Distribution & Warehousing",
  "Sustainability Solutions",
  "Data & Market Intelligence",
  "Systems Integrations",
  "Digital Rating & Procurement",
];

const CircularModule = () => {
  return (
    <div className="relative w-96 h-96 flex items-center justify-center">
      <svg viewBox="0 0 42 42" className="circular-chart">
        {services.map((service, index) => (
          <g key={index} className={`slice slice-${index}`}>
            <path
              className="circle"
              d="M21 2.0845
                 a 19.9155 19.9155 0 0 1 0 39.831
                 a 19.9155 19.9155 0 0 1 0 -39.831"
              strokeDasharray={`${100 / services.length}, 100`}
              strokeDashoffset={`-${(index * 100) / services.length}`}
            />
            <text
              x="21"
              y="21"
              className="circle-text"
              transform={`rotate(${
                (index * 360) / services.length
              }, 21, 21) translate(0, -11)`}
            >
              {service}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};

export default CircularModule;
