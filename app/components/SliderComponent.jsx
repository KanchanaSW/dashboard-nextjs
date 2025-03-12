"use client";
import React from "react";
import { Menu, Layout } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import LogoImage from "../../public/logoBlue.svg";
import Image from "next/image";
const { Sider } = Layout;

const siderStyle = {
  height: "100vh",
  position: "sticky",
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: "none", 
  scrollbarColor: "transparent transparent",
  background: "#fff",
};



const SliderComponent = () => {

  return (
    <Sider
        className="sticky top-0 z-100"
        style={siderStyle}
        width={75}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
    >
      <div className="demo-logo-vertical" />

      <div className="ml-[16] mt-[15] mb-[38]">
        <Image src={LogoImage} alt="BlueLogo" className="w-[50] h-8" />
      </div>

      <div className="h-[calc(100vh-8rem)] flex flex-wrap content-between">
        <Menu
          style={{
            background: "transparent",
          }}
          theme="light"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: '',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: '',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: '',
            },
          ]}
        />

        <Menu
          style={{
            background: "transparent",
            padding: 0,
          }}
          theme="light"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={[
            {
              key: '4',
              icon: <UserOutlined />,
              label: '',
            },
            {
              key: '5',
              icon: <VideoCameraOutlined />,
              label: '',
            },
          ]}
        />
      </div>
    </Sider>
  );
};

export default SliderComponent;
