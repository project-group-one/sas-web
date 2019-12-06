import React, { Component, Fragment } from "react";
import { observer, inject } from "mobx-react";
import { Link, withRouter } from "react-router-dom";
import { Dropdown, Menu, Modal, Divider } from "antd";
import Search from "~/components/Search";

@withRouter
@inject("authorityStore", "userStore")
@observer
class MainLayout extends Component {
  renderUserMenu() {
    return (
      <Menu
        onClick={({ key }) => {
          if (key === "logout") {
            Modal.confirm({
              title: "确定要退出该账户吗?",
              onOk: () => {
                this.props.history.push("/");
                this.props.authorityStore.logout();
              }
            });
          }
        }}
      >
        <Menu.Item key="person">
          <Link to="/user">个人中心</Link>
        </Menu.Item>
        <Menu.Item key="logout">退出</Menu.Item>
      </Menu>
    );
  }

  render() {
    const { authorityStore, userStore } = this.props;
    const { user } = userStore;
    return (
      <div className="home-header">
        <div className="w">
          <Link to="/">
            <img src="/asset/img/title.jpg" alt="title" />
          </Link>

          <div className="home-user">
            {user ? (
              <Dropdown trigger={["hover"]} overlay={this.renderUserMenu()}>
                <span>{user.name}</span>
              </Dropdown>
            ) : (
              <Fragment>
                <a href="#" onClick={() => authorityStore.showLogin()}>
                  登录
                </a>
                <Divider type="vertical" />
                <a href="#" onClick={() => authorityStore.showRegister()}>
                  注册
                </a>
              </Fragment>
            )}
          </div>

          <Search className="home-search" />
        </div>
      </div>
    );
  }
}

export default MainLayout;
