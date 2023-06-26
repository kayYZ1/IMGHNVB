import React from 'react';
import { Descriptions } from 'antd';
import SettingsPanelExtraComponent from '../../components/SettingsPanelExtraComponent';

const SettingsPanel: React.FC = () => (
  <div>
    <Descriptions title="User account information" layout="vertical" extra={<SettingsPanelExtraComponent/>}>
    <Descriptions.Item label="Email">RobertLewandowski@wp781.pl</Descriptions.Item>
    <Descriptions.Item label="Username">Rupert Von Lowandowski</Descriptions.Item>
    <Descriptions.Item label="Password">*************</Descriptions.Item>
    <Descriptions.Item label="Address" span={2}>
      No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
    </Descriptions.Item>
    <Descriptions.Item label="Images uploaded">6</Descriptions.Item>
  </Descriptions>
  </div>
);

export default SettingsPanel;