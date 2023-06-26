import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
  PictureOutlined,
  FileImageOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Divider } from 'antd';
import ContentComponent from '../../components/ContentComponent';

const { Header, Sider } = Layout;

const DashboardPage: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ height: "calc(100vh)" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Divider></Divider>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
        >
          <Menu.Item key="1" icon={<PictureOutlined />}>
            <Link to="/App/Image-Edit">Edit new image</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<FileImageOutlined />}>
            <Link to="/App/Image-List">Your images</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<SettingOutlined />}>
            <Link to="/App/Settings">Settings</Link>
          </Menu.Item>
        </Menu>

      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <ContentComponent />
      </Layout>
    </Layout>
  );
};

export default DashboardPage;