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

  const siderStyle = {
    overflow: 'auto',  // Keeps scroll functionality
    height: '100vh',
    position: 'sticky',
    insetInlineStart: 0,
    top: 0,
    bottom: 0,
    scrollbarWidth: 'none',  // Hides scrollbar in Firefox
    scrollbarColor: 'transparent transparent', // Transparent scroll thumb and track
    background: '#fff',
  };
  

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

  const items2 = [
    getItem("Option 1", "1", <PieChartOutlined />),
    getItem("Option 2", "2", <DesktopOutlined />),
  ];

const SliderComponent = () => {

    const [collapsed, setCollapsed] = useState(true);

    

  return (
    <Sider
      className="sticky top-0 z-100"
      style={siderStyle}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />

        <div className="ml-[16] mt-[15] mb-[38]">
        <Image src={LogoImage} alt="BlueLogo" className="w-[50] h-8" />
        </div>

        <div className="h-[calc(100vh-8rem)] flex flex-wrap content-between">
        <Menu
          style={{
            background: 'transparent'
          }}
          theme="light"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />

        <Menu
        style={{
          background: 'transparent',
          padding: 0,
        }}
          theme="light"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items2}
        />
        </div>
      </Sider>
  );
};

export default SliderComponent;