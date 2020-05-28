import React, { useState, useRef, ReactNode } from "react";
import { createPortal } from "react-dom";
import { Layout } from "antd";

import styles from "./Sidebar.module.css";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Search } from "./components/Search/Search";
import { SelectorTabs } from "./components/SelectorTabs/SelectorTabs";
import { HeaderSidebar } from "./components/HeaderSidebar/HeaderSidebar";
import useThrottledEffect from "../../hooks/useThrottledEffect";
import { useSelector } from "react-redux";
// eslint-disable-next-line max-len
import { getCurrentSymbolList } from "../../store/selectors/getCurrentSymbolList";
import { IStore } from "../../store/reducers/index.interface";
// eslint-disable-next-line max-len
import { getCurrentDisputeSymbolList } from "../../store/selectors/getCurrentDisputeSymbolList";
// eslint-disable-next-line max-len
import { getCurrentFavoriteSymbolList } from "../../store/selectors/getCurrentFavoriteSymbolList";
// eslint-disable-next-line max-len
import { ICurrentSymbol } from "../../store/selectors/interfaces/currentSymbol.interface";

const { Sider } = Layout;

interface ISidebar {
  children?: ReactNode;
}

export const Sidebar: React.FC<ISidebar> = (props) => {
  const [width, height] = useWindowSize();
  const wrapperHeadSidebar = useRef<HTMLDivElement>(null);
  const [isCollapse, setCollapse] = useState(false);
  const [selectorHeight, setSelectorHeight] = useState(0);
  const [search, setSearch] = useState("");

  const currentSymbolList: ICurrentSymbol[] = useSelector(
    getCurrentSymbolList
  ).filter((current) => current.symbol.indexOf(search.toUpperCase()) !== -1);

  const currentDisputeSymbolList: ICurrentSymbol[] = useSelector(
    getCurrentDisputeSymbolList
  ).filter((current) => current.symbol.indexOf(search.toUpperCase()) !== -1);

  const currentFavoriteSymbolList: ICurrentSymbol[] = useSelector(
    getCurrentFavoriteSymbolList
  ).filter((current) => current.symbol.indexOf(search.toUpperCase()) !== -1);

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
                (64 + 48 + 48 + 48 + 24)
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
    [
      height,
      width,
      setSelectorHeight,
      wrapperHeadSidebar,
      document.body.scrollHeight,
    ]
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
          <Search value={search} onChange={setSearch} />
        </div>
        <div className={styles.selectorWrap}>
          <SelectorTabs
            currentList={currentSymbolList}
            currentDisputeList={currentDisputeSymbolList}
            currentFavoriteList={currentFavoriteSymbolList}
            height={selectorHeight}
            width={width}
          />
        </div>
      </div>
    </Sider>
  );
};

const portalDom: any = document.getElementById("portal");

const Overlay = (props: any) => createPortal(props.children, portalDom);
