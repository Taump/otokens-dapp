import { Button, Space, Table, Tabs } from "antd";
import React from "react";

const { TabPane } = Tabs;

const dataSource = [
  {
    key: "1",
    description:
      "O3SyiBfkuSB/Lorem ipsum dolor sit amet" +
      ", consectetur adipiscing elit. Nulla quam velit," +
      " vulputate eu pharetra nec, mattis ac neque. Duis" +
      " vulputate commodo lectus, ac blandit elit tincidunt " +
      "id.+1Gm4GJZW8NLSg= Nulla quam velit, vulputate eu " +
      "pharetra nec, mattis ac neque. ",
    cursupp: 32.363,
    decimals: 1,
  },
  {
    key: "2",
    description:
      "O3SyiBfkuSB/Lorem ipsum dolor sit amet" +
      ", consectetur adipiscing elit. Nulla quam velit," +
      " vulputate eu pharetra nec, mattis ac neque. Duis" +
      " vulputate commodo lectus, ac blandit elit tincidunt " +
      "id.+1Gm4GJZW8NLSg= Nulla quam velit, vulputate eu " +
      "pharetra nec, mattis ac neque. ",
    cursupp: 212.383,
    decimals: 9,
  },
  {
    key: "3",
    description:
      "O3SyiBfkuSB/Lorem ipsum dolor sit amet" +
      ", consectetur adipiscing elit. Nulla quam velit," +
      " vulputate eu pharetra nec, mattis ac neque. Duis" +
      " vulputate commodo lectus, ac blandit elit tincidunt " +
      "id.+1Gm4GJZW8NLSg= Nulla quam velit, vulputate eu " +
      "pharetra nec, mattis ac neque. ",
    cursupp: 412.363,
    decimals: 4,
  },
  {
    key: "4",
    description:
      "O3SyiBfkuSB/Lorem ipsum dolor sit amet" +
      ", consectetur adipiscing elit. Nulla quam velit," +
      " vulputate eu pharetra nec, mattis ac neque. Duis" +
      " vulputate commodo lectus, ac blandit elit tincidunt " +
      "id.+1Gm4GJZW8NLSg= Nulla quam velit, vulputate eu " +
      "pharetra nec, mattis ac neque. ",
    cursupp: 3212.353,
    decimals: 5,
  },
  {
    key: "5",
    description:
      "O3SyiBfkuSB/Lorem ipsum dolor sit amet" +
      ", consectetur adipiscing elit. Nulla quam velit," +
      " vulputate eu pharetra nec, mattis ac neque. Duis" +
      " vulputate commodo lectus, ac blandit elit tincidunt " +
      "id.+1Gm4GJZW8NLSg= Nulla quam velit, vulputate eu " +
      "pharetra nec, mattis ac neque. ",
    cursupp: 13.332,
    decimals: 6,
  },
  {
    key: "6",
    description:
      "O3SyiBfkuSB/Lorem ipsum dolor sit amet" +
      ", consectetur adipiscing elit. Nulla quam velit," +
      " vulputate eu pharetra nec, mattis ac neque. Duis" +
      " vulputate commodo lectus, ac blandit elit tincidunt " +
      "id.+1Gm4GJZW8NLSg= Nulla quam velit, vulputate eu " +
      "pharetra nec, mattis ac neque. ",
    cursupp: 1.333,
    decimals: 8,
  },
];

const columns = [
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Decimals",
    dataIndex: "decimals",
    key: "decimals",
    width: 100,
  },
  {
    title: "Сurrent support",
    dataIndex: "cursupp",
    key: "cursupp",
    width: 150,
  },
  {
    title: "Action",
    key: "action",
    width: 200,
    render: () => {
      return (
        <Space>
          <a href="#">Add support</a>
          <a href="#">Edit</a>
        </Space>
      );
    },
  },
];

export const ChangeInfo = () => {
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
        <div style={{ fontSize: 26 }}>
          Voting for the description and decimals (12)
        </div>
        <div>
          <Button type="link" size="large">
            Edit information
          </Button>
        </div>
      </div>

      <div>
        <Tabs defaultActiveKey="1" animated={false}>
          <TabPane tab="ALL" key="1">
            <Table
              dataSource={dataSource}
              columns={columns}
              size="small"
              pagination={{ pageSize: 5 }}
              expandable={{ defaultExpandAllRows: true }}
            />
          </TabPane>
          <TabPane tab="MY" key="2">
            <Table
              dataSource={dataSource}
              columns={columns}
              size="small"
              pagination={{ pageSize: 3 }}
              expandable={{ defaultExpandAllRows: true }}
            />
          </TabPane>
        </Tabs>
      </div>
    </>
  );
};
