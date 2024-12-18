import { useResize } from '../../hooks/useResize';
import './style.css';
const Nav = () => {
  const resize = useResize();

  const links = [
    'Каталог',
    'О нас',
    'Подбор товара',
    'Наша команда',
    'Доставка и оплата',
    'Контакты',
  ];

  return (
    <ul className="nav_links_group">
      {links.map((link, i) => (
        <li className="nav_link" key={i}>
          <a>{link}</a>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
