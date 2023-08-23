import React, { useState } from 'react';
import { Modal } from 'antd';
import { useNavigate } from 'react-router-dom';

const LeaveDemoModal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Are you sure you want to leave the demo? Your progress will reset.');

  const navigate = useNavigate()

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setModalText('Leaving the demo...');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
      navigate("/Login")
    }, 2500)
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  return (
    <>
      <span onClick={showModal}>Leave the demo</span>
      <Modal
        title="XD"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
    </>
  );
};

export default LeaveDemoModal;