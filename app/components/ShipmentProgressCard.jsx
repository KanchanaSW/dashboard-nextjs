"use client";
import React from "react";
import { Progress, Card } from "antd";

const shipmentData = {
  title: "Shipments",
  subtitle: "Delivered",
  percentage: 60,
};

const ShipmentProgressCard = () => {
  return (
   <div className="">
     <Card className="p-5 rounded-xl shadow-lg border border-gray-200 relative overflow-hidden">
      <h3 className="text-lg font-semibold text-black">{shipmentData.title}</h3>
      
      <div className="flex justify-between items-center mt-3 space-x-3">
     <div>
     <p className="text-sm text-gray-400 mt-1 font-medium">{shipmentData.subtitle}</p>
     <span className="text-3xl font-bold text-black">{shipmentData.percentage}%</span>
     </div>
        <Progress
          type="circle"
          percent={shipmentData.percentage}
          strokeColor="#ff3b30"
          trailColor="#e5e5e5"
          format={() => ""}
          size={70}
          strokeWidth={10}
        />
      
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-red-500 rounded-b-xl"></div>
    </Card>
   </div>
  );
};

export default ShipmentProgressCard;