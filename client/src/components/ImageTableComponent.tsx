import React from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import ImageModalComponent from './ImageModalComponent';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Full Name',
    width: 100,
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    width: 100,
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Column 1',
    dataIndex: 'address',
    key: '1',
    width: 150,
  },
  {
    title: 'Column 2',
    dataIndex: 'address',
    key: '2',
    width: 150,
  },
  {
    title: 'Show',
    key: "operation",
    width: 50,
    render: () => <ImageModalComponent />
  },
  {
    title: 'Copy',
    key: 'operation',
    width: 50,
    render: () => <a>Copy</a>
  },
  {
    title: "Download",
    key: "operation",
    width: 50,
    render: () => <a>Download</a>
  }
];

const data: DataType[] = [];
for (let i = 0; i < 10; i++) {
  data.push({
    key: i,
    name: `Edward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}

const ImageTableComponent: React.FC = () => (
  <Table columns={columns} dataSource={data} scroll={{ x: 1500, y: 500 }} />
);

export default ImageTableComponent;