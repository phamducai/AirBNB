import React from "react";
import { PieChartOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { useState } from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const { Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem(<Link to="/admin"> Quản Lý Người Dùng</Link>, "1", <UserOutlined />),

  getItem(
    <Link to="/admin/location"> Quản Lý Thông Tin Vị Trí</Link>,
    "2",
    <PieChartOutlined />
  ),
  getItem(
    <Link to="/admin/rooms"> Quản Lý Thông Tin Phòng</Link>,
    "3",
    <PieChartOutlined />
  ),
];

export default function AdminTemplate() {
  const dispatch = useDispatch();
  useEffect(() => {}, []);
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <img
          src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
          alt="haha"
        />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}
