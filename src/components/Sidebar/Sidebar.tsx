import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import { Layout } from "antd";
import { useWindowSize } from "../../hooks/useWindowSize";
const { Sider } = Layout;

export const Sidebar: React.FC = () => {
  const [width] = useWindowSize();
  const [isCollapse, setCollapse] = useState(false);

  let sidebarWidth: number = 400;

  if (width >= 480) {
    sidebarWidth = 400;
  } else if (width < 480) {
    sidebarWidth = 280;
  }

  return (
    <Sider
      width={sidebarWidth}
      breakpoint="xl"
      collapsedWidth="0"
      theme="light"
      onCollapse={(data) => {
        setCollapse(data);
      }}
      className={styles.sider}
    >
      <div
        className={styles.siderWrap}
        style={{
          minWidth: sidebarWidth,
          opacity: isCollapse ? 0 : 1,
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusamus
        adipisci consequatur dicta dolor doloribus eaque eius harum iusto libero
        placeat quaerat quis, quo ratione, repudiandae rerum saepe sapiente
        sunt?
      </div>
    </Sider>
  );
};
