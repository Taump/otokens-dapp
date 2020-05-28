import React from "react";
import { Button, Form, Input, Modal, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addSupportClose } from "../../store/actions/modals/addSupport";
import { IStore } from "../../store/reducers/index.interface";
import { IModals } from "../../store/reducers/modals.interface";

const { Option } = Select;

export const AddSupportModal: React.FC = () => {
  const dispatch = useDispatch();

  const addSupportStore: IModals = useSelector(
    (state: IStore) => state.modals.addSupport
  );

  const { visible, loading } = addSupportStore;

  const handleOk = () => {};

  const handleCancel = () => {
    dispatch(addSupportClose());
  };

  return (
    <div>
      <Modal
        visible={visible}
        title="Add support"
        onOk={handleOk}
        style={{ zIndex: -1 }}
        onCancel={handleCancel}
        footer={[
          <Button key="close" onClick={handleCancel}>
            Close
          </Button>,
          <Button
            key="create"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Add support
          </Button>,
        ]}
      >
        <Form size="large">
          <Form.Item>
            <Input
              placeholder="Your deposit in support of this symbol (in GBYTEs)"
              suffix="GB"
            />
          </Form.Item>
          <Form.Item>
            <Select placeholder="Select drawer">
              <Option key="drawer-" value={0}>
                0 days
              </Option>
              <Option key="drawer-1" value={1}>
                1 days
              </Option>
              <Option key="drawer-7" value={7}>
                7 days
              </Option>
              <Option key="drawer-30" value={30}>
                30 days
              </Option>
              <Option key="drawer-90" value={90}>
                90 days
              </Option>
              <Option key="drawer-180" value={180}>
                180 days
              </Option>
              <Option key="drawer-360" value={360}>
                360 days
              </Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
