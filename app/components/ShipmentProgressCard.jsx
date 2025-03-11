import React from "react";
import { Progress, Card } from "antd";



const ShipmentProgressCard = ({shipmentProgressData}) => {
  return (
   <div className="">

<div className="space-y-4">
    {
        shipmentProgressData.map((shipmentData) => (
<span key={shipmentData.id} className="block"> 
<Card className="p-5 rounded-xl shadow-lg border border-gray-200 relative overflow-hidden bottom-0">
      <h3 className="text-lg font-semibold text-black">{shipmentData.title}</h3>
      
      <div className="flex justify-between items-center mt-3 space-x-3">
     <div>
     <p className="text-sm text-gray-400 mt-1 font-medium">{shipmentData.subtitle}</p>
     <span className="text-3xl font-bold text-black">{shipmentData.count}</span>
     </div>
        <Progress
          type="circle"
          percent={shipmentData.progressPercentage}
          strokeColor={shipmentData.color}
          trailColor="#e5e5e5"
          format={() => ""}
          size={70}
          strokeWidth={10}
        />
      
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 rounded-b-xl" style={{ backgroundColor: shipmentData.color }}></div>
    </Card>
</span>
        ))
    }
  

</div>



     
   </div>
  );
};

export default ShipmentProgressCard;