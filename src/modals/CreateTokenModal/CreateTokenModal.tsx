import React from "react";
import { Button, Form, Input, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../../store/reducers/index.types";
import { IModals } from "../../store/reducers/modals.types";
import { createTokenClose } from "../../store/actions/modals/createToken";

const { TextArea } = Input;

export const CreateTokenModal: React.FC = () => {
  const dispatch = useDispatch();

  const createTokenStore: IModals = useSelector(
    (state: IStore) => state.modals.createToken
  );

  const { visible, loading } = createTokenStore;

  const handleOk = () => {};

  const handleCancel = () => {
    dispatch(createTokenClose());
  };

  return (
    <div>
      <Modal
        visible={visible}
        title="Create token"
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
            Create
          </Button>,
        ]}
      >
        <Form size="large">
          <Form.Item>
            <Input placeholder="Symbol" autoFocus />
          </Form.Item>
          <Form.Item>
            {/* eslint-disable-next-line max-len */}
            <Input
              placeholder="Your deposit in support of this symbol (in GBYTEs)"
              suffix="GB"
            />
          </Form.Item>
          <Form.Item>
            <Input placeholder="Decimals" />
          </Form.Item>
          <Form.Item>
            <TextArea rows={5} placeholder="Description" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
