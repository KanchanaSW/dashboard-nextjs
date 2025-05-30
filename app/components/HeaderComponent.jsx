"use client";
import React from "react";
import { DownOutlined, UserOutlined, BellOutlined } from "@ant-design/icons";
import { Avatar, Badge, Button, Dropdown, Progress, Space } from "antd";
import { Layout } from "antd";
const { Header } = Layout;

const items = [
  {
    label: "1st menu item",
    key: "1",
    icon: <UserOutlined />,
  },
  {
    label: "2nd menu item",
    key: "2",
    icon: <UserOutlined />,
  },
  {
    label: "3rd menu item",
    key: "3",
    icon: <UserOutlined />,
  },
  {
    label: "4rd menu item",
    key: "4",
    icon: <UserOutlined />,
  },
];

const menuProps = {
  items,
  onClick: () => {},
};

const HeaderComponent = () => {
  return (
    <Header
    className="hidden sm:block sm:opacity-100 opacity-0" 
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        width: '100%',
        padding: 0,
        backgroundColor: "#fff",
      }}
    >
      <div className="flex items-center justify-end px-6 shadow-md">
        <div className="flex flex-col items-start px-6 pb-3 w-[162] sm:visible sm:opacity-100 opacity-0 invisible">
          <span className="text-gray-700 font-semibold text-xs  mt-3">
            4,934 Credits Left
          </span>
          <Progress percent={40} showInfo={false} />
        </div>

        <div className="mr-6 sm:visible sm:opacity-100 opacity-0 invisible">
          <Dropdown className="dropdown-btn text-sm" menu={menuProps}>
            <Button>
              <DownOutlined size={12} />
              <span>API Genie</span>
            </Button>
          </Dropdown>
        </div>

        <div className="pr-6">
          <Badge
            className="notification-badge"
            count={21}
            offset={[-2, 5]}
            size="small"
          >
            <button className="notification-btn">
              <BellOutlined className=" cursor-pointer" />
            </button>
          </Badge>
        </div>

        <Avatar size={32} className="avater" icon={<UserOutlined />} />
      </div>
    </Header>
  );
};

export default HeaderComponent;
