import './style.scss';
import basket from '../../images/basket.svg';
import Badge from '../badge/Badge';
import { useAppSelector } from '../../redux/store/hooks';
import { useState } from 'react';
import Modal from '../modal';
import OrderModal from '../orderModal/OrderModal';

const Basket = () => {
  const [isModalActive, setModalActive] = useState(false);
  const { count } = useAppSelector((state) => state.order);

  const handleModalOpen = () => {
    setModalActive(true);
  };
  const handleModalClose = () => {
    setModalActive(false);
  };

  return (
    <div onClick={handleModalOpen} className="basket_wrapper">
      <span>Корзина</span>
      <a>
        <img src={basket}></img>
        <Badge
          value={'' + count}
          style={{
            backgroundColor: '#f14f4f',
            position: 'absolute',
            right: '-5px',
            bottom: '-5px',
          }}
        />
      </a>
      <div>
        {isModalActive && (
          <Modal onClose={handleModalClose}>
            <OrderModal onClose={handleModalClose} />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Basket;
