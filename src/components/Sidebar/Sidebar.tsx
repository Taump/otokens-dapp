import React, { useState, useRef } from "react";
import { createPortal } from "react-dom";
import { Layout } from "antd";

import styles from "./Sidebar.module.css";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Search } from "./components/Search/Search";
import { SelectorTabs } from "./components/SelectorTabs/SelectorTabs";
import { HeaderSidebar } from "./components/HeaderSidebar/HeaderSidebar";
import useThrottledEffect from "../../hooks/useThrottledEffect";

const { Sider } = Layout;

export const Sidebar: React.FC = () => {
  const [width, height] = useWindowSize();
  const wrapperHeadSidebar = useRef<HTMLDivElement>(null);
  const [isCollapse, setCollapse] = useState(false);
  const [selectorHeight, setSelectorHeight] = useState(0);

  let sidebarWidth: number = 400;

  // Calculating the width of the sidebar
  if (width >= 480) {
    sidebarWidth = 400;
  } else if (width < 480) {
    sidebarWidth = 280;
  }

  useThrottledEffect(
    () => {
      if (wrapperHeadSidebar.current) {
        if (wrapperHeadSidebar.current.clientHeight) {
          if (width > 1200) {
            setSelectorHeight(
              height -
                wrapperHeadSidebar.current.clientHeight -
                (64 + 48 + 48 + 48 + 48)
            );
          } else {
            setSelectorHeight(
              height - wrapperHeadSidebar.current.clientHeight - (64 + 48 + 48)
            );
          }
        }
      }
    },
    500,
    [height, width, setSelectorHeight, wrapperHeadSidebar]
  );

  return (
    <Sider
      width={sidebarWidth}
      breakpoint="xl"
      collapsedWidth="0"
      collapsible={isCollapse}
      theme="light"
      onCollapse={(data) => {
        setCollapse(data);
      }}
      className={styles.sider}
    >
      {!isCollapse && width < 1200 && (
        <Overlay>
          <div className={styles.overlay} />
        </Overlay>
      )}

      <div
        className={styles.siderWrap}
        style={{
          minWidth: sidebarWidth,
          opacity: isCollapse ? 0 : 1,
        }}
      >
        <div ref={wrapperHeadSidebar}>
          <HeaderSidebar />
          <Search />
        </div>
        <div className={styles.selectorWrap}>
          <SelectorTabs height={selectorHeight} />
        </div>
      </div>
    </Sider>
  );
};

const portalDom: any = document.getElementById("portal");

const Overlay = (props: any) => createPortal(props.children, portalDom);
