"use client";
import { useEffect, useState } from "react";
import ShipmentTable from "./components/ShipmentsTable";
import ShipmentProgressCard from "./components/ShipmentProgressCard";
import OutgoingShipmentChart from "./components/OutgoingShipmentsChart";
import LoadingPage from "./loading";

export default function Home() {
  const [shipmentProgressData, setShipmentProgressData] = useState([]);
  const [shipmentTableData, setShipmentTableData] = useState([]);
  const [outgoingShipmentsData, setOutgoingShipmentsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShipmentProgressData = async () => {
      const res = await fetch("/api/shipmentProgressCard");
      const data = await res.json();
      setShipmentProgressData(data);
      setLoading(false);
    };

    fetchShipmentProgressData();
  }, []);

  useEffect(() => {
    const fetchShipmentTableData = async () => {
      const res = await fetch("/api/shipments");
      const data = await res.json();
      setShipmentTableData(data);
      setLoading(false);
    };

    fetchShipmentTableData();
  }, []);

  useEffect(() => {
    const fetchOutgoingShipmentsData = async () => {
      const res = await fetch("/api/outgoingShipments");
      const data = await res.json();
      setOutgoingShipmentsData(data);
      setLoading(false);
    };

    fetchOutgoingShipmentsData();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div className="grid grid-cols-5 grid-rows-5 gap-4 p-4">
      <div className="col-span-4">
        <OutgoingShipmentChart data={outgoingShipmentsData} />
      </div>
      <div className="col-start-5">
        <ShipmentProgressCard shipmentProgressData={shipmentProgressData} />
      </div>
      <div className="col-span-5 row-start-2">
        <ShipmentTable dataSource={shipmentTableData} />
      </div>
    </div>
  );
}
