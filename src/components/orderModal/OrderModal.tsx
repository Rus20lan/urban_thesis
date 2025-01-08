import { FC } from 'react';
import { useAppSelector } from '../../redux/store/hooks';
import Btn from '../btn/Btn';
import ItemCard from '../itemCard/ItemCard';
import './style.scss';
import { useNavigate } from 'react-router-dom';

type Props = {
  onClose?: () => void;
};

const OrderModal: FC<Props> = () => {
  const { goods, orderAmount } = useAppSelector((state) => state.order);
  const navigate = useNavigate();
  let goodsOk = null;
  let goodsBad = null;

  const handleNavigate = () => {
    navigate('/order');
  };

  if (goods.length > 0) {
    goodsOk = (
      <>
        <div className="view_order_wrapper">
          <ul className="order_info_list_ul ">
            {goods.map((sneaker, index) => (
              <ItemCard key={index} sneaker={sneaker} isLittle={true} />
            ))}
          </ul>
        </div>
        <div className="total_order_wrapper">
          <div>
            <p className="total_order_title">Итого:</p>
            <p className="total_order_value">{orderAmount}</p>
          </div>
          <div className="total_order_btn">
            <Btn
              text="Перейти в корзину"
              btnClose={true}
              style={{
                width: '100%',
                height: '100%',
                background: '#f14f4f',
                color: '#fff',
              }}
              handleClick={() => {
                handleNavigate();
              }}
            />
          </div>
        </div>
      </>
    );
  } else {
    goodsBad = (
      <>
        <div
          className="view_order_wrapper"
          style={{
            height: '323px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <p className="total_order_value">Корзина пуста</p>
        </div>
        <div className="total_order_wrapper">
          <div className="total_order_btn">
            <Btn
              text="Ok"
              btnClose={true}
              style={{
                width: '100%',
                height: '100%',
                background: '#f14f4f',
                color: '#fff',
              }}
            />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="content">
        <div className="wrap_for_modal_order">
          <div className="modal_order_container">
            {goodsOk && goodsOk}
            {goodsBad && goodsBad}
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderModal;
