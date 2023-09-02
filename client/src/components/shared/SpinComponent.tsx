import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const SpinComponent: React.FC = () => <Spin style={{ color: "white" }} indicator={antIcon} />;

export default SpinComponent;
