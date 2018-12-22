import React from 'react';
import { Link } from 'react-router-dom';

const navs = [
  { name: '食品安全抽检报告', enName: 'Food safety spot check report', url: '/' },
  { name: '食品安全抽检分析', enName: 'Food safety spot check analysis', url: '/' },
  { name: '食品安全抽检评价', enName: 'Food safety spot check evaluation', url: '/' },
  { name: '食品安全分类查询', enName: 'Food safety classification query', url: '/' }
];

const Nav = () => {
  return (
    <div>
      {navs.map(({ name, enName, url }) => (
        <Link key={enName} to={url}>
          <p>{name}</p>
          <p>{enName}</p>
        </Link>
      ))}
    </div>
  );
};

export default Nav;
