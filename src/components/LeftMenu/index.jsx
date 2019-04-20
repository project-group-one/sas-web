import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;
// #e1eafd #49a4f8;
const Container = styled.main``;
const WrapperMenu = styled(Menu)`
    background: #e1eafd;
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

const LeftMenu = () => {
    const handleClick = (e) => {
        console.log('click ', e);
    };
    return (
        <Container>
            <WrapperMenu onClick={handleClick} defaultSelectedKeys={['/user/detail']} defaultOpenKeys={['sub1']} mode='inline'>
                <SubMenu
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
                </SubMenu>
                {/* <Menu.Item key='/user/detail'>
                    <Link to={'/user/detail'}>
                        <Icon type='user' />
                        <span>个人中心</span>
                    </Link>
                </Menu.Item> */}
                <Menu.Item key='/news/list'>
                    <Link to={'/news/list'}>
                        <Icon type='schedule' />
                        <span>新闻资讯</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key='/report/list'>
                    <Link to={'/report/list'}>
                        <Icon type='schedule' />
                        <span>报告列表</span>
                    </Link>
                </Menu.Item>
            </WrapperMenu>
        </Container>
    );
};

export default LeftMenu;
