import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Row, Col, Menu, Icon } from "antd";
import styled from "styled-components";
import { Switch, Route, Redirect } from "react-router-dom";
import UserDetail from "../page/user/Detail";
import Password from "../page/user/Password";
import Organization from "../page/user/Organization";
import Verification from "../page/user/Verification";

const SubMenu = Menu.SubMenu;

const LeftMenu = props => {
  const selectedKey = props.location.pathname;
  return (
    <div>
      <Menu
        selectedKeys={[selectedKey]}
        defaultOpenKeys={["/user"]}
        mode="inline"
      >
        <SubMenu
          key="/user"
          title={
            <span>
              <Icon type="user" />
              <span>个人中心</span>
            </span>
          }
        >
          <Menu.Item key="/user/detail">
            <Link to="/user/detail">基本信息</Link>
          </Menu.Item>
          <Menu.Item key="/user/verification">
            <Link to="/user/verification">身份验证</Link>
          </Menu.Item>
          <Menu.Item key="/user/password">
            <Link to="/user/password">修改密码</Link>
          </Menu.Item>
          <Menu.Item key="/user/organization">
            <Link to="/user/organization">组织</Link>
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
const UserCenter = props => {
  return (
    <Container>
      <Row gutter={40}>
        <Col span={6}>
          <LeftMenu location={props.location} />
        </Col>
        <Col span={18}>
          <Switch>
            <Redirect exact from="/user" to="/user/detail" />
            <Route path="/user/detail" component={UserDetail} />
            <Route path="/user/verification" component={Verification} />
            <Route path="/user/password" component={Password} />
            <Route path="/user/organization" component={Organization} />
          </Switch>
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(UserCenter);
