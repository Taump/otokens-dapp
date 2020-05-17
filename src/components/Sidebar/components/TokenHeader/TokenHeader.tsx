import React from "react";

import styles from "./TokenHeader.module.css";

export const TokenHeader = () => {
  return (
    <div className={styles.tokenHeader}>
      <div className={styles.assetOrSymbol}>
        <b>Symbol</b> / Asset
      </div>
      <div className={styles.support}>Support</div>
      <div className={styles.rivalSupport}>Rival support</div>
      <div className={styles.rate} />
    </div>
  );
};
