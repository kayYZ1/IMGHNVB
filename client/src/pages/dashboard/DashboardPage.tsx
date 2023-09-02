import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
  PictureOutlined,
  FileImageOutlined,
  RollbackOutlined,
  HomeOutlined
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Divider } from 'antd';
import { useSelector } from 'react-redux';

import ContentComponent from '../../components/shared/ContentComponent';
import LeaveDemoModal from '../../components/modals/LeaveDemoModal';

import "./DashboardPage.css"

const { Header, Sider } = Layout;

const DashboardPage: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const user = useSelector((state: any) => state.data.user.user)

  return (
    <Layout style={{ height: "calc(100vh)" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical"></div>
        <Divider></Divider>
        <Menu
          theme="dark"
          mode="inline"
        >
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/App/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<PictureOutlined />}>
            <Link to="/App/Image-Edit">Edit new image</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<FileImageOutlined />}>
            <Link to="/App/Image-List">Your images</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<SettingOutlined />}>
            <Link to="/App/Settings">Settings</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<RollbackOutlined />}>
            {user && user.email === "demo@demo.demo" ? <LeaveDemoModal/> : "Log out"}
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