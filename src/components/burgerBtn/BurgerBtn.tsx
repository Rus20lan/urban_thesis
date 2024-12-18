import { toggleBurger } from '../../redux/burger/burgerSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import './style.css';

const BurgerBtn = () => {
  const dispatch = useAppDispatch();
  const { toggle } = useAppSelector((state) => state.burger);

  const handleClick = () => {
    dispatch(toggleBurger());
  };

  return (
    <div
      className={'menu' + ' ' + (toggle ? 'open' : '')}
      onClick={handleClick}
    >
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  );
};

export default BurgerBtn;
