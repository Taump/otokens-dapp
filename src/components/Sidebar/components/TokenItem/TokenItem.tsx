import padEnd from "lodash.padend";
import { Rate } from "antd";
import React from "react";

import styles from "./TokenItem.module.css";

export interface ITokenItem {
  assetOrSymbol: string;
  support: number;
  rivalSupport: number;
  rate: boolean;
  isDispute: boolean;
}

export const TokenItem: React.FC<ITokenItem> = (props) => {
  let assetOrSymbol = props.assetOrSymbol;
  const { support, rivalSupport, rate, isDispute } = props;
  if (assetOrSymbol.length >= 12) {
    const sub = assetOrSymbol.substring(0, 10);
    assetOrSymbol = padEnd(sub, 14, "...");
  }
  return (
    <div
      className={`${styles.tokenItem} ${
        isDispute ? styles.dispute : styles.notDispute
      }`}
    >
      <div className={styles.assetOrSymbol}>{assetOrSymbol}</div>
      <div className={styles.support}>{support}</div>
      <div className={styles.rivalSupport}>{rivalSupport}</div>
      <div className={styles.rateWrap}>
        <Rate defaultValue={rate ? 1 : 0} count={1} style={{ fontSize: 16 }} />
      </div>
    </div>
  );
};
