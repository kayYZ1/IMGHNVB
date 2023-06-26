import React, { useState } from 'react';
import { Button, Modal } from 'antd';

import DropZoneComponent from '../DropZoneComponent';

const AddImageModal: React.FC = () => {
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
      <Button type="primary" onClick={showModal}>
        Upload image
      </Button>
      <Modal title="Drag&Drop or select your image" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <DropZoneComponent />
      </Modal>
    </>
  );
};

export default AddImageModal;