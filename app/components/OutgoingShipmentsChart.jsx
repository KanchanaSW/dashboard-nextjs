import React from "react";
import { Line } from "@ant-design/charts";
import { Card, Divider, TimePicker } from "antd";

function handelColor(type) {
  if (type === "FedEx") {
    return "#AA20B9";
  } else if (type === "UPS") {
    return "#FFC069";
  } else {
    return "#0050B3";
  }
}

const OutgoingShipmentChart = ({ data }) => {
  const totalValues = data.reduce((acc, curr) => {
    acc[curr.type] = (acc[curr.type] || 0) + curr.value;
    return acc;
  }, {});

  // Find the last time for each type
  const lastPoints = data.reduce((acc, curr) => {
    acc[curr.type] = curr; // The last occurrence of each type will be stored
    return acc;
  }, {});

  const config = {
    data,
    xField: "time",
    yField: "value",
    seriesField: "type",
    smooth: true,
    height: 377,
    legend: false,
    tooltip: {
      showMarkers: false,
    },
    point: {
      shapeField: "square",
      sizeField: 4,
      style: {
        fill: (e) =>
          lastPoints[e.type].id === e.id ? handelColor(e.type) : "transparent",
        stroke: (e) =>
          lastPoints[e.type].id === e.id ? "none" : "transparent", // Hide the border
      },
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

  return (
    <div className="">
      <div className="flex ">
        <Card className=" w-full ">
          <p className="ml-2 text-base font-semibold">Out Going Shipments</p>
          <Divider />
          <div className="flex justify-between items-center">
            <div className="flex justify-between items-center">
              <p className="ml-4 mr-14 text-sm">Daily</p>
              <p className="text-[#1677FF] text-sm">Hourly</p>
            </div>
            <div>
              <TimePicker.RangePicker className="sm:visible sm:opacity-100 opacity-0 invisible"/>
            </div>
          </div>
          <Divider />
          <div className="overflow-x-auto">
            <div style={{ minWidth: "400px" }}>
              <Line {...config} />
            </div>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <span className="flex items-center">
              <span className="w-3 h-3 bg-[#AA20B9] rounded-full inline-block mr-2"></span>{" "}
              FedEx
            </span>
            <span className="flex items-center">
              <span className="w-3 h-3 bg-[#FFC069] rounded-full inline-block mr-2"></span>{" "}
              UPS
            </span>
            <span className="flex items-center">
              <span className="w-3 h-3 bg-[#0050B3] rounded-full inline-block mr-2"></span>{" "}
              USPS
            </span>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default OutgoingShipmentChart;
