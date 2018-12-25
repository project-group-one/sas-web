import React from 'react';
import { Dropdown, Menu } from 'antd';

const data = [
  {
    name: '国家级食品安全监督机构',
    children: [{ name: '国家市场监督管理总局', url: '/' }]
  },
  {
    name: '省级食品安全监督机构',
    children: [
      {name: '浙江省食品药品监督管理局', url: '/'},
      {name: '江苏省食品药品监督管理局', url: '/'},
      {name: '上海市食品药品监督管理局', url: '/'},
      {name: '山东省食品药品监督管理局', url: '/'},
      {name: '北京市食品药品监督管理局', url: '/'}
    ]
  },
  {
    name: '市级食品安全监督机构',
    children: [
      {name: '杭州市', url: '/'},
      {name: '宁波市', url: '/'},
      {name: '湖州市', url: '/'},
    ]
  },
  {
    name: '县级食品安全监督机构',
    children: [
      {name: '西湖区', url: '/'},
      {name: '余杭区', url: '/'},
      {name: '滨江区', url: '/'},
    ]
  }
];

const HomeLink = () => {
  const renderMenu = children => {
    if (!children || children.length === 0) return <div />;
    return (
      <Menu>
        {children.map(item => (
          <Menu.Item key={item.url}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.name}
            </a>
          </Menu.Item>
        ))}
      </Menu>
    );
  };
  return (
    <div className="home-link-list">
      {data.map((item, index) => {
        return (
          <Dropdown key={item.name + index} trigger={['hover']} overlay={renderMenu(item.children)}>
            <div className="home-link-item">{item.name}</div>
          </Dropdown>
        );
      })}
    </div>
  );
};

export default HomeLink;
