import "./style.css";
import basket from "../../images/basket.svg";
import Badge from "../badge/Badge";

const Basket = () => {
  return (
    <div className="basket_wrapper">
      <span>Корзина</span>
      <a>
        <img src={basket}></img>
        <Badge />
      </a>
    </div>
  );
};

export default Basket;
