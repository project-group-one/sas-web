import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, Menu } from "antd";

const links = [
  {
    name: "食品安全抽检报告",
    enName: "Food safety spot check report",
    url: "http://chou.foodmate.net/xz/"
  },
  {
    name: "食品安全抽检分析",
    enName: "Food safety spot check analysis",
    url: "",
    children: [
      { name: "食品安全抽检分析1", url: "http://120.26.79.122:8087/login" },
      { name: "食品安全抽检分析2", url: "/" },
      { name: "食品安全抽检分析3", url: "/" },
      { name: "食品安全抽检分析4", url: "/" },
      { name: "食品安全抽检分析5", url: "/" },
      { name: "食品安全抽检分析6", url: "/" }
    ]
  },
  {
    name: "食品安全抽检评价",
    enName: "Food safety spot check evaluation",
    url: "",
    children: [
      { name: "食品安全抽检评价", url: "http://120.26.79.122:8087" },
      // { name: "食品安全抽检评价2", url: "/" },
      // { name: "食品安全抽检评价3", url: "/" },
      // { name: "食品安全抽检评价4", url: "/" },
      // { name: "食品安全抽检评价5", url: "/" },
      // { name: "食品安全抽检评价6", url: "/" }
    ]
  },
  {
    name: "食品安全分类查询",
    enName: "Food safety classification query",
    url: "/inside"
    // url: 'http://chou.foodmate.net/xz/category/index.html',
    // children: [
    //   { name: '食品安全分类查询1', url: '/' },
    //   { name: '食品安全分类查询2', url: '/' },
    //   { name: '食品安全分类查询3', url: '/' },
    //   { name: '食品安全分类查询4', url: '/' },
    //   { name: '食品安全分类查询5', url: '/' },
    //   { name: '食品安全分类查询6', url: '/' }
    // ]
  }
];

const Nav = () => {
  const renderMenu = children => {
    if (!children || children.length === 0) return <div />;
    return (
      <Menu>
        {children.map(({ name, url }) => (
          <Menu.Item key={name}>
            {url.startsWith("http") ? (
              <a href={url} target="_blank" rel="noopener noreferrer">
                {name}
              </a>
            ) : (
              <Link to={url} target="_blank" rel="noopener noreferrer">
                {name}
              </Link>
            )}
          </Menu.Item>
        ))}
      </Menu>
    );
  };
  return (
    <div>
      {links.map(l => {
        if (l.children) {
          return (
            <Dropdown
              key={l.name}
              trigger={["hover"]}
              overlayClassName="home-nav-item-dropdown"
              overlay={renderMenu(l.children)}
            >
              <div className="home-nav-item">
                <p>{l.name}</p>
                <p>{l.enName}</p>
              </div>
            </Dropdown>
          );
        }
        return (
          <Link
            key={l.name}
            className="home-nav-item"
            to={l.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>{l.name}</p>
            <p>{l.enName}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Nav;
