import { Button, Table, Tabs } from "antd";
import React from "react";

const { TabPane } = Tabs;

const dataSource = [
  {
    key: "1",
    asset: "O3SyiBfkuSB/0jzJiiss6DxBhjyjn+1Gm4GJZW8NLSg=",
    cursupp: 32.363,
    drawers: 3213.533,
  },
  {
    key: "2",
    asset: "O3SyiBfkuSB/0jzJiiss6DxBhjyjn+1Gm4GJZW8NLSg=",
    cursupp: 212.383,
    drawers: 123.473,
  },
  {
    key: "3",
    asset: "O3SyiBfkuSB/0jzJiiss6DxBhjyjn+1Gm4GJZW8NLSg=",
    cursupp: 412.363,
    drawers: 13.436,
  },
  {
    key: "4",
    asset: "fdsfsdiBfkuSB/0jzJiiss6DxBhjyjn+1Gm4GJZW8NLSg=",
    cursupp: 3212.353,
    drawers: 43.434,
  },
  {
    key: "5",
    asset: "O3SyiBfkuSB/0jzJiiss6DxBhjyjn+1Gm4GJZW8NLSg=",
    cursupp: 13.332,
    drawers: 166.423,
  },
  {
    key: "6",
    asset: "vsfgstruSB/0jzJiiss6DxBhjyjn+1Gm4GJZW8NLSg=",
    cursupp: 1.333,
    drawers: 1.433,
  },
];

const columns = [
  {
    title: "Asset",
    dataIndex: "asset",
    key: "asset",
  },
  {
    title: "Сurrent support",
    dataIndex: "cursupp",
    key: "cursupp",
  },
  {
    title: "Support in drawers",
    dataIndex: "drawers",
    key: "drawers",
  },
  {
    title: "Action",
    key: "action",
    render: () => {
      return <a href="#">Add support</a>;
    },
  },
];

export const ChallengersInfo = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          marginTop: 48,
          marginBottom: 24,
          justifyContent: "space-between",
        }}
      >
        <div style={{ fontSize: 26 }}>All challengers (24)</div>
        <div>
          <Button type="link" size="large">
            Add new link
          </Button>
        </div>
      </div>

      <div>
        <Tabs defaultActiveKey="1" animated={false}>
          <TabPane tab="DISPUTABLE ASSET" key="1">
            <Table
              dataSource={dataSource}
              columns={columns}
              size="small"
              pagination={{ pageSize: 5 }}
            />
          </TabPane>
          <TabPane tab="DISPUTABLE SYMBOL" key="2">
            <Table
              dataSource={dataSource}
              columns={columns}
              size="small"
              pagination={{ pageSize: 3 }}
            />
          </TabPane>
          <TabPane tab="MY LINKS" key="3">
            <Table
              dataSource={dataSource}
              columns={columns}
              size="small"
              pagination={{ pageSize: 4 }}
            />
          </TabPane>
        </Tabs>
      </div>
    </>
  );
};
