import './style.css';
import logo from '../../images/logo.svg';
import Nav from '../nav/Nav';
import Basket from '../basket/Bascket';
import { useResize } from '../../hooks/useResize';
import BurgerBtn from '../burgerBtn/BurgerBtn';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import BurgerMenu from '../burgerMenu/BurgerMenu';
import { toggleBurger } from '../../redux/burger/burgerSlice';
import Btn from '../btn/Btn';
import label from '../../images/label.png';

const Header = () => {
  const { isScreenLg } = useResize();
  const { toggle } = useAppSelector((state) => state.burger);
  const dispatch = useAppDispatch();

  if (toggle && !isScreenLg) {
    dispatch(toggleBurger());
  }

  return (
    <div className="header_area">
      <div className="nav_wrapper">
        <div className="logo_wrapper">
          <img src={logo} />
        </div>
        <div className="links_wrapper">
          {!isScreenLg && <Nav />}
          <Basket />
          {isScreenLg && <BurgerBtn />}
          {toggle && <BurgerMenu />}
        </div>
      </div>
      <div className="intro_wrapper">
        <div className="label">
          <img src={label}></img>
        </div>

        <div className="intro">
          <h2>Кроссовки известных брендов с доставкой по России и СНГ</h2>
          <p>
            Мы продаем кроссовки брендов Nike, Adidas, Puma, Reebok, Converse и
            многие другие по низким ценам
          </p>
          <Btn text="Перейти к покупкам" />
        </div>
      </div>
    </div>
  );
};

export default Header;
