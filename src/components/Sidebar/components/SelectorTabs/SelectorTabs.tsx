import { TokenHeader } from "../TokenHeader/TokenHeader";
import { TokenItem } from "../TokenItem/TokenItem";
import { Tabs } from "antd";
import React, { ReactComponentElement } from "react";
import Scrollbar from "react-scrollbars-custom";

const { TabPane } = Tabs;

export interface ISelectorTabs {
  height: number;
}

export const SelectorTabs: React.FC<ISelectorTabs> = (props) => {
  const Tokens: ReactComponentElement<any>[] = new Array(40);
  Tokens.fill(
    <TokenItem
      assetOrSymbol="fl6fdsfnsd32kjkKJFNDKfsdfkdlsfkdsf"
      support={5325.433}
      rivalSupport={324}
      rate={true}
      isDispute={false}
    />,
    0,
    40
  );
  return (
    <Tabs
      defaultActiveKey="1"
      animated={false}
      tabBarStyle={{
        marginBottom: 0,
        userSelect: "none",
      }}
    >
      <TabPane tab="ALL" key="1">
        <TokenHeader />
        <Scrollbar
          style={{
            height: props.height,
            // height: "100%",
          }}
        >
          {Tokens}
          <TokenItem
            assetOrSymbol="fl6fdsfnsd32kjkKJFNDKfsdfkdlsfkdsf"
            support={5325.433}
            rivalSupport={324}
            rate={true}
            isDispute={false}
          />
        </Scrollbar>
      </TabPane>
      <TabPane tab="FAVOURITES" key="2">
        <Scrollbar
          style={{
            height: props.height,
            // height: "100%",
          }}
        >
          <TokenHeader />
          <TokenItem
            assetOrSymbol="fl6fdsfnsd32kjkKJFNDKfsdfkdlsfkdsf"
            support={5325.433}
            rivalSupport={324}
            rate={true}
            isDispute={false}
          />
        </Scrollbar>
      </TabPane>
      <TabPane tab="DISPUTED" key="3">
        <Scrollbar
          style={{
            height: props.height,
            // height: "100%",
          }}
        >
          <TokenHeader />
          <TokenItem
            assetOrSymbol="fl6fdsfnsd32kjkKJFNDKfsdfkdlsfkdsf"
            support={5325.433}
            rivalSupport={324}
            rate={true}
            isDispute={false}
          />
          <TokenItem
            assetOrSymbol="fl6fdsfnsd32kjkKJFNDKfsdfkdlsfkdsf"
            support={5325.433}
            rivalSupport={324}
            rate={false}
            isDispute={true}
          />
          <TokenItem
            assetOrSymbol="fl6fdsfnsd32kjkKJFNDKfsdfkdlsfkdsf"
            support={5325.433}
            rivalSupport={324}
            rate={false}
            isDispute={false}
          />
        </Scrollbar>
      </TabPane>
    </Tabs>
  );
};
