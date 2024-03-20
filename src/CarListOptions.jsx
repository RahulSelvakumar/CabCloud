import React, { useState } from "react";
import CarListData from "./CarListData.js";
import CarListItem from "./CarListItem";

function CarListOptions({ distance }) {
  const [activeIndex, setActiveIndex] = useState();

  return (
    <div className="mt-5 p-5 overflow-auto h-[350px]">
      <h2 className="text-[22px] font-bold">Recommended</h2>
      {CarListData.map((item, index) => (
        <div
          key={index}
          className={`cursor-pointer p-2 rounded-md border border-black ${
            activeIndex === index ? "border-[3px]" : ""
          }`}
          onClick={() => setActiveIndex(index)}
        >
          <CarListItem car={item} distance={distance} />
        </div>
      ))}
    </div>
  );
}

export default CarListOptions;