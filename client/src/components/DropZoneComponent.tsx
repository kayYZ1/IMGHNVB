import React from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';

import { setFile } from '../redux/slices/fileSlice';

const { Dragger } = Upload;

const DropZoneComponent: React.FC = () => {
  const dispatch = useDispatch()

  const props: UploadProps = {
    accept: "image/png, image/jpeg, image/jpg",
    name: 'file',
    multiple: false,
    onChange(info): void {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
        dispatch(setFile(info.file))
        console.log(info.file)
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
        dispatch(setFile(null))
      }
    },
    beforeUpload: (file) => {
      console.log("File upload...", file)
      setTimeout(() => {
        dispatch(setFile(file))
      }, 5000)
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  return (
    <Dragger {...props}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">Click or drag file to this area to upload</p>
      <p className="ant-upload-hint">
        Support for a single or bulk upload. Strictly prohibited from uploading company data or other
        banned files.
      </p>
    </Dragger>
  );
}

export default DropZoneComponent;