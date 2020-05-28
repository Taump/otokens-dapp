import { TokenHeader } from "../TokenHeader/TokenHeader";
import { TokenItem } from "../TokenItem/TokenItem";
import { Tabs } from "antd";
import React, { ReactComponentElement } from "react";
import Scrollbar from "react-scrollbars-custom";
import padEnd from "lodash.padend";
// eslint-disable-next-line max-len
import { ICurrentSymbol } from "../../../../store/selectors/interfaces/currentSymbol.interface";

const { TabPane } = Tabs;

export interface ISelectorTabs {
  height: number;
  width: number;
  currentList: ICurrentSymbol[];
  currentDisputeList: ICurrentSymbol[];
  currentFavoriteList: ICurrentSymbol[];
}

export const SelectorTabs: React.FC<ISelectorTabs> = (props) => {
  const cutSymbolOrAsset = (symbolOrAsset: string) => {
    if (props.width <= 480) {
      if (symbolOrAsset.length >= 11) {
        return padEnd(symbolOrAsset.substring(0, 11), 14, "...");
      } else {
        return symbolOrAsset;
      }
    } else {
      if (symbolOrAsset.length >= 18) {
        return padEnd(symbolOrAsset.substring(0, 15), 18, "...");
      } else {
        return symbolOrAsset;
      }
    }
  };

  return (
    <Tabs
      defaultActiveKey="1"
      animated={false}
      tabBarStyle={{
        marginBottom: 0,
        userSelect: "none",
      }}
    >
      <TabPane tab="ALL" key="1" forceRender={true}>
        <TokenHeader />
        <Scrollbar
          style={{
            height: props.height,
          }}
        >
          {props.currentList.map((current) => (
            <TokenItem
              cutAssetOrSymbol={cutSymbolOrAsset(current.symbol)}
              assetOrSymbol={current.symbol}
              support={current.currentSupport}
              rivalSupport={current.expiry_ts ? current.largestSupport : null}
              rate={current.isFavorite}
              isDispute={current.currentAsset !== current.largestAsset}
              key={"token-" + current.symbol}
            />
          ))}
        </Scrollbar>
      </TabPane>
      <TabPane tab="FAVOURITES" key="2" forceRender={true}>
        <Scrollbar
          style={{
            height: props.height,
          }}
        >
          <TokenHeader />
          {props.currentFavoriteList.map((current) => (
            <TokenItem
              cutAssetOrSymbol={cutSymbolOrAsset(current.symbol)}
              assetOrSymbol={current.symbol}
              support={current.currentSupport}
              rivalSupport={current.expiry_ts ? current.largestSupport : null}
              rate={current.isFavorite}
              isDispute={current.currentAsset !== current.largestAsset}
              key={"token-" + current.symbol}
            />
          ))}
        </Scrollbar>
      </TabPane>
      <TabPane tab="DISPUTED" key="3" forceRender={true}>
        <Scrollbar
          style={{
            height: props.height,
          }}
        >
          <TokenHeader />
          {props.currentDisputeList.map((current) => (
            <TokenItem
              assetOrSymbol={current.symbol}
              cutAssetOrSymbol={cutSymbolOrAsset(current.symbol)}
              support={current.currentSupport}
              rivalSupport={current.expiry_ts ? current.largestSupport : null}
              rate={current.isFavorite}
              isDispute={current.currentAsset !== current.largestAsset}
              key={"token-" + current.symbol}
            />
          ))}
        </Scrollbar>
      </TabPane>
    </Tabs>
  );
};
