"use client"
import React, { useState } from 'react';
import {  Table, Tag,Card } from 'antd';
import { SortAscendingOutlined, FilterOutlined, SearchOutlined } from "@ant-design/icons";
import Image from 'next/image';
import DHLImage from '../../public/dhlImage.svg';

const dataSource = [
  {
    key: "1",
    reference: "#12345",
    status: "Shipped",
    tag: "Bulk 123",
    date: "04-10-2024, 10:30",
    carrier: "DHL",
    shippingMethod: "Domestic Shipping",
    trackingUrl: "32165423",
  },
  {
    key: "2",
    reference: "#12345",
    status: "Delivered",
    tag: "Bulk 123",
    date: "04-10-2024, 10:30",
    carrier: "DHL",
    shippingMethod: "Domestic Shipping",
    trackingUrl: "32165423",
  },
  {
    key: "3",
    reference: "#12345",
    status: "Not Shipped",
    tag: "Bulk 123",
    date: "04-10-2024, 10:30",
    carrier: "DHL",
    shippingMethod: "Domestic Shipping",
    trackingUrl: "32165423",
  },
  {
    key: "4",
    reference: "#12345",
    status: "Shipped",
    tag: "Bulk 123",
    date: "04-10-2024, 10:30",
    carrier: "DHL",
    shippingMethod: "Domestic Shipping",
    trackingUrl: "32165423",
  },
];

const statusColors = {
  Shipped: "green",
  Delivered: "blue",
  "Not Shipped": "red",
};

const columns = [
  {
    title: (
      <div className="flex justify-between items-center">
        References <SearchOutlined className="ml-2" />
      </div>
    ),
    dataIndex: "reference",
    key: "reference",
  },
  {
    title: (
      <div className="flex justify-between items-center">
        Shipment Status
      </div>
    ),
    dataIndex: "status",
    key: "status",
    render: (status) => <Tag color={statusColors[status]}>{status}</Tag>,
  },
  {
    title: (
      <div className="flex justify-between items-center">
        Shipment Tag 
      </div>
    ),
    dataIndex: "tag",
    key: "tag",
    render: (tag) => <a href="#" className="text-blue-500">{tag}</a>,
  },
  {
    title: (
      <div className="flex justify-between items-center">
        Created Date 
      </div>
    ),
    dataIndex: "date",
    key: "date",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: (
      <div className="flex justify-between items-center">
        Carrier Name <SearchOutlined className="ml-2" />
      </div>
    ),
    dataIndex: "carrier",
    key: "carrier",
    render: () => <Image src={DHLImage} alt="DHL" className='w-20' />,
  },
  {
    title: (
      <div className="flex justify-between items-center">
        Shipping Method <FilterOutlined className="ml-2" />
      </div>
    ),
    dataIndex: "shippingMethod",
    key: "shippingMethod",
  },
  {
    title: (
      <div className="flex justify-between items-center">
        Tracking URL 
      </div>
    ),
    dataIndex: "trackingUrl",
    key: "trackingUrl",
    sorter: (a, b) => a.age - b.age,
    render: (url) => <a href="#" className="text-blue-500">{url}</a>,
  },
];

  // rowSelection object indicates the need for row selection
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      // Column configuration not to be checked
      name: record.name,
    }),
  };

const ShipmentTable = () => {
    const [selectionType, setSelectionType] = useState('checkbox');

    return (
        <div className="p-4">
    
     <Card>
        <div className='flex justify-between items-center pb-5'>
            <p className=''>Last Shipment</p>
            <button className="btn" type="submit">
        View all
      </button>
        </div>
     <Table
      bordered
      rowSelection={{
        type: selectionType,
        ...rowSelection,
      }}
      dataSource={dataSource} columns={columns} pagination={false} />
     </Card>
    </div>
    );
  };
  
  export default ShipmentTable;