import React from "react";
import user from "./user.png";

const CarListItem = ({ car, distance }) => {
  return (
    <div>
      <div className="flex tems-center justify-between mt-5">
        <div className="flex items-center gap-5">
          <img src={car.image} alt="" width={75} height={75} />
          <div>
            <h2 className="font-semibold text-[18px] flex gap-3 items-center">
              {car.name}
              <span className="flex gap-2 font-normal text-[14px] items-center">
                <img src={user} alt="" width={15} height={15} />
                {car.seat}
              </span>
            </h2>
            <p>{car.desc}</p>
          </div>
        </div>
        <h2 className="text-[18px] font-semibold">
          ₹{(car.amount * distance).toFixed(2)}
        </h2>
      </div>
    </div>
  );
};

export default CarListItem;
