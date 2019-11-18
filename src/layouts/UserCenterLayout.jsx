import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Menu, Icon } from "antd";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import UserDetail from "../page/user/Detail";
import Password from "../page/user/Password";

const SubMenu = Menu.SubMenu;

const LeftMenu = () => {
  return (
    <div>
      <Menu defaultOpenKeys={["/user"]} mode="inline">
        <SubMenu
          key="/user"
          title={
            <span>
              <Icon type="user" />
              <span>个人中心</span>
            </span>
          }
        >
          <Menu.Item key="basic">
            <Link to="/user/detail">基本信息</Link>
          </Menu.Item>
          <Menu.Item key="password">
            <Link to="/user/password">修改密码</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
};

const Container = styled.main`
  width: 1100px;
  margin: 0 auto;
`;
const UserCenter = () => {
  return (
    <Container>
      <Row gutter={40}>
        <Col span={6}>
          <LeftMenu />
        </Col>
        <Col span={18}>
          <Switch>
            <Route exact={true} path="/user/detail" component={UserDetail} />
            <Route exact={true} path="/user/password" component={Password} />
          </Switch>
        </Col>
      </Row>
    </Container>
  );
};

export default UserCenter;
