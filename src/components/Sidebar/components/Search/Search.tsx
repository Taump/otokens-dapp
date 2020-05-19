import React from "react";
import { Button, Input } from "antd";
import {
  SortAscendingOutlined,
  RiseOutlined,
  FallOutlined,
} from "@ant-design/icons";

import styles from "./Search.module.css";

export const Search = () => {
  return (
    <div className={styles.search}>
      <div className={styles.inputWrap}>
        <Input allowClear className={styles.input} placeholder="Search..." />
      </div>
      <div className={styles.switchers}>
        {/*<SortDescendingOutlined />*/}
        <Button
          type="link"
          icon={<SortAscendingOutlined className={styles.switchersBtn} />}
        />
        {/*<FallOutlined />*/}
        <Button
          type="link"
          icon={<FallOutlined className={styles.switchersBtn} />}
        />
      </div>
    </div>
  );
};
