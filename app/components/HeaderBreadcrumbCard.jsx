import { Breadcrumb, Card } from "antd";
import React from "react";
import { SyncOutlined } from "@ant-design/icons";

const HeaderBreadCrumbCard = () => {
  return (
    <Card className="p-0 m-0">
      <div>
        <Breadcrumb
          items={[
            { title: "Home", className: "text-sm text-[#8C8C8C]" },
            { title: "Carrier", className: "text-sm text-[#8C8C8C]" },
            { title: "Dashboard", className: "text-sm text-[#141414]" },
          ]}
        />

          <div className="flex justify-between items-center mt-1 -mb-2">
            <p className="text-xl text-[141414] font-semibold">Carrier Dashboard</p>

          <div className="flex justify-between items-center">
            <p className="mr-3 text-sm">
              Last Synced: <b>5mins ago</b>
            </p>

            <button className="sync-button">
              <SyncOutlined size={16} />
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default HeaderBreadCrumbCard;
