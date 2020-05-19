import { Button, Space } from "antd";
import React from "react";
import { useWindowSize } from "../../../../hooks/useWindowSize";
import { ButtonLink } from "../../../../components/ButtonLink/ButtonLink";
import styles from "./CurrentInfo.module.css";
import { useDispatch } from "react-redux";
import { addSupportOpen } from "../../../../store/actions/modals/addSupport";

export const CurrentInfo = () => {
  const dispatch = useDispatch();
  const [width] = useWindowSize();
  return (
    <Space direction="vertical" size="small" className={styles.currentInfo}>
      <div>
        <b>Current support:</b> <ButtonLink>3242342</ButtonLink>
      </div>
      <div>
        <b>Support in drawers:</b> <ButtonLink>123132</ButtonLink>
      </div>
      <div>
        <b>Asset:</b>{" "}
        <a href="#">O3SyiBfkuSB/0jzJiiss6DxBhjyjn+1Gm4GJZW8NLSg=</a>
      </div>

      <div>
        <Space size="large">
          <div>
            <b>Decimals:</b> 9
          </div>
          <div>
            <b>Status:</b> disput
          </div>
        </Space>
      </div>
      <div>
        <div>
          <b>Description:</b>
        </div>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam
          velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate
          commodo lectus, ac blandit elit tincidunt id.
        </span>
      </div>
      <div>
        <Space
          direction={width > 840 ? "horizontal" : "vertical"}
          size="middle"
        >
          <Button
            size="large"
            type="primary"
            onClick={() => dispatch(addSupportOpen())}
          >
            Add support current link
          </Button>
          <Button size="large">Edit information</Button>
          <Button size="large" type="primary" danger>
            Withdraw support
          </Button>
        </Space>
      </div>
    </Space>
  );
};
