import React from "react";
import styles from "./HeadInfo.module.css";

export const HeadInfo = () => {
  return (
    <div className={styles.headInfo}>
      <div className={styles.symbolWrap}>
        <div className={styles.symbol}>MY_DISPUT_TOKEN</div>
        <div>
          <a href="#">View on explorer</a>
        </div>
      </div>
      <div className={styles.disputeTimeWrap}>
        <div className={styles.disputeTime}>21 DAYS 21:31:56</div>
        <div>Time until the end of the dispute</div>
      </div>
    </div>
  );
};
