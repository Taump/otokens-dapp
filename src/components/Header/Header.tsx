import React from "react";
import styles from "./Header.module.css";
import { Layout, Menu, Select } from "antd";

const { Option } = Select;
const HeaderAnt = Layout.Header;

export const Header = () => {
  return (
    <HeaderAnt className={styles.header}>
      <div className={styles.serviceName}>Token registry</div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        className={styles.menu}
      >
        <Menu.Item key="1">Main</Menu.Item>
        <Menu.Item key="2">Create token</Menu.Item>
        <Menu.Item key="3">Full list</Menu.Item>
      </Menu>
      <div className={styles.selectWrap}>
        <Select className={styles.select} placeholder="Selected address">
          <Option value="jack">VYC2LXEXXYS4FZMXE3WNTT4E6XVU4IEL</Option>
          <Option value="lucy">VYC2LXEXXYS4FZMXE3WNTT4E6XVU4IEL</Option>
          <Option value="tom">VYC2LXEXXYS4FZMXE3WNTT4E6XVU4IEL</Option>
        </Select>
      </div>
    </HeaderAnt>
  );
};
