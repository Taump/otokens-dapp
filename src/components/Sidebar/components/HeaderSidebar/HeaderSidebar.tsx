import { Button } from "antd";
import React from "react";

import styles from "./HeaderSidebar.module.css";

export const HeaderSidebar = () => {
  return (
    <div className={styles.headerSidebar}>
      <div className={styles.title}>Token list</div>
      <div>
        <Button size="large">CREATE</Button>
      </div>
    </div>
  );
};
