import { HashLink } from 'react-router-hash-link';

import './style.css';
const Nav = () => {
  const links = [
    { name: 'Каталог', anchor: '#catalog' },
    { name: 'О нас', anchor: '#about' },
    { name: 'Подбор товара', anchor: '#quiz' },
    { name: 'Наша команда', anchor: '#team' },
    { name: 'Доставка и оплата', anchor: '#' },
    { name: 'Контакты', anchor: '#contacts' },
  ];

  return (
    <ul className="nav_links_group">
      {links.map((link, i) => (
        <li className="nav_link" key={i}>
          <HashLink to={`/${link.anchor}`}>{link.name}</HashLink>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
