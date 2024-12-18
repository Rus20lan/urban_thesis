import './style.css';
import basket from '../../images/basket.svg';

const Basket = () => {
  return (
    <div className="basket_wrapper">
      <span>Корзина</span>
      <a>
        <img src={basket}></img>
      </a>
    </div>
  );
};

export default Basket;
