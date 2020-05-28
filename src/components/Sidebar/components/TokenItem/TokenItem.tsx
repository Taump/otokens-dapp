import padEnd from "lodash.padend";
import { Rate } from "antd";
import React from "react";
import styles from "./TokenItem.module.css";
// eslint-disable-next-line max-len
import { addFavoriteSymbol } from "../../../../store/actions/settings/addFavoriteSymbol";
// eslint-disable-next-line max-len
import { removeFavoriteSymbol } from "../../../../store/actions/settings/removeFavoriteSymbol";
import { useDispatch } from "react-redux";

export interface ITokenItem {
  assetOrSymbol: string;
  cutAssetOrSymbol: string;
  support: number;
  rivalSupport: number | null;
  rate: boolean;
  isDispute: boolean;
}

export const TokenItem: React.FC<ITokenItem> = (props) => {
  const {
    support,
    rivalSupport,
    rate,
    isDispute,
    cutAssetOrSymbol,
    assetOrSymbol,
  } = props;

  const dispatch = useDispatch();
  const handleChangeRate = () => {
    if (props.rate) {
      dispatch(removeFavoriteSymbol(assetOrSymbol));
    } else {
      dispatch(addFavoriteSymbol(assetOrSymbol));
    }
  };
  return (
    <div
      className={`${styles.tokenItem} ${
        isDispute ? styles.dispute : styles.notDispute
      }`}
    >
      <div className={styles.assetOrSymbol}>{cutAssetOrSymbol}</div>
      <div className={styles.support}>{(support / 1e9).toFixed(3)}</div>
      <div className={styles.rivalSupport}>
        {rivalSupport ? (rivalSupport / 1e9).toFixed(3) : "-"}
      </div>
      <div className={styles.rateWrap}>
        <Rate
          value={rate ? 1 : 0}
          onChange={handleChangeRate}
          count={1}
          style={{ fontSize: 16 }}
        />
      </div>
    </div>
  );
};
