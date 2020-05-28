import React from "react";
import { Button, Input } from "antd";
import { SortAscendingOutlined, FallOutlined } from "@ant-design/icons";

import styles from "./Search.module.css";
export interface ISearch {
  value: string;
  onChange: (search: string) => any;
}
export const Search: React.FC<ISearch> = (props) => {
  return (
    <div className={styles.search}>
      <div className={styles.inputWrap}>
        <Input
          allowClear
          className={styles.input}
          value={props.value}
          onChange={(ev) => props.onChange(ev.target.value)}
          placeholder="Search..."
        />
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
