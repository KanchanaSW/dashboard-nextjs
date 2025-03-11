import React from "react";
import { Progress, Card } from "antd";

const ShipmentProgressCard = ({ shipmentProgressData }) => {
  return (
    <div className="">
      <div className="space-y-4">
        {shipmentProgressData.map((shipmentData) => (
          <span key={shipmentData.id} className="block">
            <div className="p-6 rounded-xl shadow-lg relative overflow-hidden bg-white">
              <p className=" text-base font-semibold text-black">
                {shipmentData.title}
              </p>

              <div className="flex justify-between items-center mt-2">
                <div>
                  <p className="text-sm text-gray-400 mt-1 font-medium">
                    {shipmentData.subtitle}
                  </p>
                  <span className="text-2xl font-semibold text-black">
                    {shipmentData.count}
                  </span>
                </div>
                <Progress
                  type="circle"
                  percent={shipmentData.progressPercentage}
                  strokeColor={shipmentData.color}
                  trailColor="#e5e5e5"
                  format={() => ""}
                  size={61}
                  strokeWidth={10}
                />
              </div>
              <div
                className="absolute bottom-0 left-0 w-full h-1 rounded-b-xl"
                style={{ backgroundColor: shipmentData.color }}
              ></div>
            </div>
          </span>
        ))}
      </div>
    </div>
  );
};

export default ShipmentProgressCard;
