import React, { useState } from "react";
import CarListData from "./CarListData.js";
import CarListItem from "./CarListItem";
import CabBooked from "./cab-booked";

function CarListOptions({ distance }) {
  const [activeIndex, setActiveIndex] = useState();
  const [selectedCar, setSelectedCar] = useState([]);

  const handleOpenPaymentWindow = () => {
     const newWindow = window.open("", "_blank", "width=600,height=400");
       newWindow.document.write("<h1>Cab Booked Successfully!</h1>");
  };

  return (
    <div className="mt-5 p-5 overflow-auto h-[350px]">
      <h2 className="text-[22px] font-bold">Recommended</h2>
      {CarListData.map((item, index) => (
        <div
          key={index}
          className={`cursor-pointer p-2 rounded-md border border-black ${
            activeIndex === index ? "border-[3px]" : ""
          }`}
          onClick={() => {
            setActiveIndex(index);
            setSelectedCar(item);
          }}
        >
          <CarListItem car={item} distance={distance} />
        </div>
      ))}
      {selectedCar?.name && (
        <div className="flex justify-between fixed bottom-5 bg-white p-3 rounded-lg shadow-xl w-full md:w-[30%] border-[1px] items-center">
          <h2>Make Payment For</h2>
          <button
            className="p-3 bg-black text-white rounded-lg text-center"
            onClick={handleOpenPaymentWindow}
          >
            Request {selectedCar.name}
          </button>
        </div>
      )}
    </div>
  );
}

export default CarListOptions;
