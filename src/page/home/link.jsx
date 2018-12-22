import React from 'react';
import { Dropdown, Menu } from 'antd';

const data = [
  {
    name: '国家级食品安全监测机构',
    children: [{ name: '国家市场监督管理总局', url: '/' }]
  },
  {
    name: '省级食品安全监测机构',
    children: []
  },
  {
    name: '市级食品安全监测机构',
    children: []
  },
  {
    name: '县级食品安全监测机构',
    children: []
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
      {data.map(item => {
        return (
          <Dropdown key={item.name} trigger={['click', 'hover']} overlay={renderMenu(item.children)}>
            <div className="home-link-item">{item.name}</div>
          </Dropdown>
        );
      })}
    </div>
  );
};

export default HomeLink;
