import React from "react";
import { Line } from "@ant-design/charts";
import { Card } from "antd";

const data = [
  { id: 123 ,time: "09:00", type: "USPS", value: 1100 },
  { id: 124 ,time: "09:00", type: "UPS", value: 600 },
  { id: 125 ,time: "09:00", type: "FedEx", value: 0 },
  { id: 126 ,time: "10:00", type: "USPS", value: 950 },
  { id: 127 ,time: "10:00", type: "UPS", value: 700 },
  { id: 128 ,time: "10:00", type: "FedEx", value: 300 },
  { id: 129 ,time: "11:00", type: "USPS", value: 980 },
  { id: 130 ,time: "11:00", type: "UPS", value: 550 },
  { id: 131 ,time: "11:00", type: "FedEx", value: 100 },
  { id: 132 ,time: "12:00", type: "USPS", value: 860 },
  { id: 133 ,time: "12:00", type: "UPS", value: 500 },
  { id: 134 ,time: "12:00", type: "FedEx", value: 350 },
  { id: 135 ,time: "13:00", type: "USPS", value: 750 },
  { id: 136 ,time: "13:00", type: "UPS", value: 700 },
  { id: 137 ,time: "13:00", type: "FedEx", value: 200 },
  { id: 138 ,time: "14:00", type: "USPS", value: 870 },
  { id: 139 ,time: "14:00", type: "UPS", value: 650 },
  { id: 140 ,time: "14:00", type: "FedEx", value: 400 },
  { id: 141 ,time: "15:00", type: "USPS", value: 300 },
  { id: 142 ,time: "15:00", type: "UPS", value: 600 },
  { id: 143 ,time: "15:00", type: "FedEx", value: 900 },
  { id: 144 ,time: "16:00", type: "USPS", value: 300 },
  { id: 145 ,time: "16:00", type: "UPS", value: 500 },
  { id: 146 ,time: "16:00", type: "FedEx", value: 2300 },
];

const totalValues = data.reduce((acc, curr) => {
  acc[curr.type] = (acc[curr.type] || 0) + curr.value;
  return acc;
}, {});

function handelColor(type) {
  if (type === "FedEx") {
    return "#AA20B9";
  } else if (type === "UPS") {
    return "#FFC069";
  } else {
    return "#0050B3";
  }
}

// Find the last time for each type
const lastPoints = data.reduce((acc, curr) => {
  acc[curr.type] = curr; // The last occurrence of each type will be stored
  return acc;
}, {});

console.log(lastPoints);

const config = {
  data,
  xField: "time",
  yField: "value",
  seriesField: "type",
  smooth: true,
  
  legend: false,
  tooltip: {
    showMarkers: false,
  },
  point: {
    shapeField: 'square',
    sizeField: 4,
    style: {
        fill: (e) => lastPoints[e.type].id === e.id ? handelColor(e.type) : 'transparent',
        stroke: (e) => lastPoints[e.type].id === e.id ? 'none' : 'transparent' // Hide the border
    }
  },
  label: {
    text: (e) =>
      totalValues[e.type] >= 1000
        ? ` ${(totalValues[e.type] / 1000).toFixed(1)}k`
        : ` ${totalValues[e.type]}`,
    selector: "last",
    style: {
      fontSize: 12,
      fill: (e) => handelColor(e.type),
    },
  },
  colorField: "type",
  scale: {
    color: {
      domain: ["FedEx", "UPS", "USPS"],
      range: ["#AA20B9", "#FFC069", "#0050B3"],
    },
  },
  tooltip: false,
};

const OutgoingShipmentChart = () => {
  return (
    <div className="flex flex-col items-center">
      <Card className="p-4 w-full max-w-4xl shadow-lg">
   
        <Line {...config} />
        <div className="flex justify-center space-x-4 mt-4">
          <span className="flex items-center">
            <span className="w-3 h-3 bg-[#AA20B9] rounded-full inline-block mr-2"></span> FedEx
          </span>
          <span className="flex items-center">
            <span className="w-3 h-3 bg-[#FFC069] rounded-full inline-block mr-2"></span> UPS
          </span>
          <span className="flex items-center">
            <span className="w-3 h-3 bg-[#0050B3] rounded-full inline-block mr-2"></span> USPS
          </span>
        </div>
      </Card>
    </div>
  );
};

export default OutgoingShipmentChart;
