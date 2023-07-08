import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const AccountDeleteModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" danger onClick={showModal} style={{ marginLeft: "0.5rem" }}>
        Delete
      </Button>
      <Modal title="Delete {demo}?" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okButtonProps={{ disabled: true }}>
        <p>Are you sure you want to delete yout account? (This is a destructive action)</p>
      </Modal>
    </>
  );
};

export default AccountDeleteModal;