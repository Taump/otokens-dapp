import React from "react";
import { Button, Divider, Select } from "antd";

import styles from "./AddressSelector.module.css";

const { Option } = Select;

export interface IAddressSelector {}

export const AddressSelector: React.FC<IAddressSelector> = () => {
  return (
    <Select
      className={styles.select}
      showSearch
      placeholder="Select an address"
      bordered={false}
      dropdownClassName={styles.dropdown}
      dropdownRender={(menu) => (
        <div>
          {menu}
          <Divider
            style={{
              marginTop: 5,
              marginBottom: 5,
              borderColor: "#002549",
            }}
          />
          <div style={{ paddingLeft: 5 }}>
            <Button type="link">Add address</Button>
          </div>
        </div>
      )}
    >
      <Option value="jack" bordered={false} className={styles.option}>
        V321LXEXXYS4FZMXE3WNTT4E6XVU4IEL
      </Option>
      <Option value="lucy" bordered={false} className={styles.option}>
        fdsTLXEXXYS4FZMXE3WNTT4E6XVU4IEL
      </Option>
      <Option value="tom" bordered={false} className={styles.option}>
        KFMGLXEXXYS4FZMXE3WNTT4E6XVU4IEL
      </Option>
    </Select>
  );
};
