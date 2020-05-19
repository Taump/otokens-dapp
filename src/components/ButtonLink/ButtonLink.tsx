import React from "react";
import styles from "./ButtonLink.module.css";
export const ButtonLink = (props: any) => {
  const { children, ...rest } = props;
  return (
    <span {...rest} className={styles.buttonLink}>
      {children}
    </span>
  );
};
