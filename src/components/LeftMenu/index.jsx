import React from 'react';
import { Menu, Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;
// #e1eafd #49a4f8;
const Container = styled.main``;
const WrapperMenu = styled(Menu)`
    background: #e1eafd;
    .ant-menu-submenu-title {
        i,
        span {
            color: #000;
        }
    }
    .ant-menu-item {
        background: #e1eafd;
        margin: 0;
        margin-bottom: 0 !important;
    }
    .ant-menu-item-selected {
        background: #49a4f8 !important;
        a {
            color: #fff;
        }
    }
    .ant-menu-item-active {
    }
    a {
        color: #000;
    }
`;

const LeftMenu = props => {
    const selectedKey = props.location.pathname.indexOf('news') > -1 ? 'news' : 'report'
    return (
        <Container>
            <WrapperMenu selectedKeys={[selectedKey]} mode='inline'>
                {/* <SubMenu
                    key='/user'
                    title={
                        <span>
                            <Icon type='user' />
                            <span>个人中心</span>
                        </span>
                    }>
                    <Menu.Item key='/user/detail'>
                        <Link to={'/user/detail'}>
                            <span>基本设置</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key='/user/password'>
                        <Link to={'/user/password'}>
                            <span>修改密码</span>
                        </Link>
                    </Menu.Item>
                </SubMenu> */}
                {/* <Menu.Item key='/user/detail'>
                    <Link to={'/user/detail'}>
                        <Icon type='user' />
                        <span>个人中心</span>
                    </Link>
                </Menu.Item> */}
                <Menu.Item key='news'>
                    <Link to={'/news/list'}>
                        <Icon type='schedule' />
                        <span>新闻资讯</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key='report'>
                    <Link to={'/report/list'}>
                        <Icon type='schedule' />
                        <span>报告列表</span>
                    </Link>
                </Menu.Item>
            </WrapperMenu>
        </Container>
    );
};

export default withRouter(LeftMenu);
