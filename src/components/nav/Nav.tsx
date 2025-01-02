import { HashLink } from 'react-router-hash-link';
import './style.css';
import { FC } from 'react';

type Props = {
  handleClick?: () => void;
};

const Nav: FC<Props> = ({ handleClick }) => {
  const links = [
    { name: 'Каталог', anchor: '#catalog' },
    { name: 'О нас', anchor: '#about' },
    { name: 'Подбор товара', anchor: '#quiz' },
    { name: 'Наша команда', anchor: '#team' },
    { name: 'Доставка и оплата', anchor: '#' },
    { name: 'Контакты', anchor: '#contacts' },
  ];

  const handleClickNav = () => {
    if (handleClick) {
      handleClick();
    }
  };

  return (
    <ul className="nav_links_group">
      {links.map((link, i) => (
        <li className="nav_link" key={i}>
          <HashLink to={`/${link.anchor}`} onClick={handleClickNav}>
            {link.name}
          </HashLink>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
