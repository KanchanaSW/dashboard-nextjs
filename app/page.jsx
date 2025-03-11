"use client";
import { useEffect, useState } from "react";
import ShipmentTable from "./components/ShipmentsTable";
import ShipmentProgressCard from "./components/ShipmentProgressCard";
import OutgoingShipmentChart from "./components/OutgoingShipmentsChart";
import LoadingPage from "./loading";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

export default function Home() {
  const [shipmentProgressData, setShipmentProgressData] = useState([]);
  const [shipmentTableData, setShipmentTableData] = useState([]);
  const [outgoingShipmentsData, setOutgoingShipmentsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [collapsed, setCollapsed] = useState(true);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

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

    <Layout
      style={{
        minHeight: "100vh",
        background: colorBgContainer,
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        className="bg-white"
        style={{
          background: colorBgContainer,
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="light"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
            items={[{ title: "User" }, { title: "Home" }]}
          />

          <div
            style={{
              minHeight: "100vh",
            }}
          >
            <div className="grid grid-cols-5 grid-rows-5 gap-4">
              <div className="col-span-4">
                <OutgoingShipmentChart data={outgoingShipmentsData} />
              </div>
              <div className="col-start-5">
                <ShipmentProgressCard
                  shipmentProgressData={shipmentProgressData}
                />
              </div>
              <div className="col-span-5 row-start-2">
                <ShipmentTable dataSource={shipmentTableData} />
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
