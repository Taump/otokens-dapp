import React from "react";
import styles from "./Header.module.css";
import { Layout, Menu } from "antd";
import { AddressSelector } from "../AddressSelector/AddressSelector";

const HeaderAnt = Layout.Header;

export const Header: React.FC = () => {
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
        <AddressSelector />
      </div>
    </HeaderAnt>
  );
};
