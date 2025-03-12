'use client'
import React,{useState} from "react";
import {Menu, Layout } from "antd";
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
  } from "@ant-design/icons";
  import LogoImage from "../../public/logoBlue.svg";
import Image from "next/image";
  const {  Sider } = Layout;


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

const SliderComponent = () => {

    const [collapsed, setCollapsed] = useState(true);

    

  return (
    <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{
          background: "#fff",
        }}
      >
        <div className="demo-logo-vertical" />

        <div className="ml-[16] mt-[13] mb-[38]">
        <Image src={LogoImage} alt="BlueLogo" className="w-[50] h-8" />
        </div>

        <Menu
          theme="light"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
  );
};

export default SliderComponent;