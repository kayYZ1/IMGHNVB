import { useState } from 'react';
import { Button, Modal } from 'antd';
import { IFile } from '../../ts/interfaces/file.interface';

const ImageModalComponent = (file: IFile) => {
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
        Show
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>{file.uid}</p>
        <p>{file.name}</p>
        <p>{file.size}</p>
        <p>{file.type}</p>
      </Modal>
    </>
  );
};

export default ImageModalComponent;