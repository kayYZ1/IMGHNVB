import React from 'react';
import { Table, Empty } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useSelector } from 'react-redux';

import ImageModalComponent from './modals/ImageModalComponent';
import { IFile } from '../ts/interfaces/file.interface';

const ImageTableComponent: React.FC = () => {
  const file: IFile = useSelector((state: any) => state.file)
  const data: IFile[] = file ? [{
    uid: file.uid,
    name: file.name,
    size: file.size,
    type: file.type
  }] : []

  const columns: ColumnsType<IFile> = [
  {
    title: 'UID',
    width: 50,
    dataIndex: 'uid',
    key: 'uid',
  },
  {
    title: 'Name',
    width: 50,
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Size',
    dataIndex: 'size',
    key: 'size',
    width: 50,
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    width: 50,
  },
  {
    title: 'Show',
    key: "operation",
    width: 25,
    render: () => <ImageModalComponent {...file}/>
  },
  {
    title: 'Copy',
    key: 'operation',
    width: 25,
    render: () => <a>Copy</a>
  },
  {
    title: "Download",
    key: "operation",
    width: 25,
    render: () => <a>Download</a>
  }
];

  return (
    <div>
      {file !== null ? <Table columns={columns} dataSource={data} scroll={{ x: 1500, y: 300 }} /> : <Empty
        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
        imageStyle={{ height: 60 }}
        description={
          <span>
            <a>Nothing here yet..</a>
          </span>
        }
      />}
    </div>
  )
};

export default ImageTableComponent;