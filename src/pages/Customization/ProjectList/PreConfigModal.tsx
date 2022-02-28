import { Modal, Button, Input } from '@arco-design/web-react';
import React from 'react';
import { useHistory } from 'react-router-dom';

const PreConfigModal = ({
  visible,
  setVisible,
}: {
  visible: any;
  setVisible: any;
}) => {
  const history = useHistory();
  return (
    <Modal
      onCancel={() => {
        setVisible(false);
      }}
      visible={visible}
      footer={
        <>
          <Button
            type="secondary"
            style={{ marginRight: 10 }}
            onClick={() => {
              setVisible(false);
            }}>
            取消
          </Button>
          <Button
            type="primary"
            style={{ marginRight: 10 }}
            onClick={() => {
              setVisible(false);
              history.push('/customization/canvas');
            }}>
            确认
          </Button>
        </>
      }>
      <>
        <div>
          项目名称
          <Input />
        </div>
        <div>
          画布大小
          <Input />
        </div>
      </>
    </Modal>
  );
};

export default PreConfigModal;
