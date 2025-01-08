import { useEffect, useState } from 'react';
import FeedbackForm from '../../components/feedbackForm/FeedbackForm';
import ItemCard from '../../components/itemCard/ItemCard';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import './style.scss';
import { IFormData } from '../../interface/IFormData';
import {
  getOrderCount,
  postOrder,
  resetIsOrderPosted,
} from '../../redux/order/orderSlice';
import Modal from '../../components/modal';
import InfoModal from '../../components/infoModal/InfoModal';

const OrderPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalActive, setModalActive] = useState(false);
  const [message, setMessage] = useState('');
  const dispatch = useAppDispatch();
  const { goods, count, orderAmount, numberOrder, isOrderPosted } =
    useAppSelector((state) => state.order);
  const [dataForm, setDataForm] = useState<IFormData>({
    name: '',
    phone: '',
    email: '',
  });

  const handleModalOpen = () => {
    setModalActive(true);
    dispatch(resetIsOrderPosted());
  };
  const handleModalClose = () => {
    setModalActive(false);
  };

  useEffect(() => {
    dispatch(getOrderCount());
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (dataForm.name && goods.length !== 0) {
      dispatch(postOrder({ goods, count, orderAmount, dataForm }));
    }
  }, [dataForm]);

  useEffect(() => {
    if (isOrderPosted) {
      setMessage('Спасибо! Заказ успешно оформлен');
      handleModalOpen();
    }
  }, [isOrderPosted]);

  return (
    <div className="item_area order_area">
      <div className="order_container">
        <div className="order_title_wrapper">
          <h3 className="order_title">Оформление заказа</h3>
          <p className="order_number">Заказ {numberOrder}</p>
        </div>
        <div className="order_description_wrapper">
          <p className="order_info_title">
            Товаров в заказе: <strong>{count} шт</strong>
          </p>
          <p className="order_info_title">
            Общая сумма заказа: <strong>{orderAmount} р</strong>
          </p>
          <div className="order_info_list_div">
            <a
              className={`font_family color_text ${
                isOpen ? 'open_order' : 'close_order'
              }`}
              onClick={handleClick}
              style={{ textDecoration: 'none', cursor: 'pointer' }}
            >
              Состав заказа
            </a>
            <ul
              className={`order_info_list_ul ${
                isOpen ? 'ul_open' : 'ul_close'
              }`}
            >
              {isOpen &&
                goods.map((sneaker, index) => (
                  <ItemCard key={index} sneaker={sneaker} isLittle={true} />
                ))}
            </ul>
          </div>
        </div>
        <div className="order_form_wrapper">
          <FeedbackForm
            setDataForm={setDataForm}
            btnProps={{
              text: 'Оформить заказ',
              style: {
                marginTop: '29px',
                background: '#f14f4f',
                padding: '18px 47px',
                borderRadius: '4px',
                fontFamily: '"Intro Regular", sans-serif',
                fontSize: '1rem',
                color: '#fff',
                width: '48%',
              },
            }}
            inputClass={'order_form_input'}
            isEmailField={true}
            isPhoneField={true}
          />
        </div>
      </div>
      {isModalActive && (
        <Modal onClose={handleModalClose}>
          <InfoModal message={message}></InfoModal>
        </Modal>
      )}
    </div>
  );
};

export default OrderPage;
