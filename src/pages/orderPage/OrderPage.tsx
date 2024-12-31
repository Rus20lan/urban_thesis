import { FC, useEffect, useState } from 'react';
import FeedbackForm from '../../components/feedbackForm/FeedbackForm';
import ItemCard from '../../components/itemCard/ItemCard';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import './style.css';
import { IFormData } from '../../interface/IFormData';
import { getOrderCount, postOrder } from '../../redux/order/orderSlice';

const OrderPage: FC<IFormData> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { goods, count, orderAmount, numberOrder } = useAppSelector(
    (state) => state.order
  );
  const [dataForm, setDataForm] = useState<IFormData>({
    name: '',
    phone: '',
    email: '',
  });

  useEffect(() => {
    dispatch(getOrderCount());
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (dataForm.name) {
      dispatch(postOrder({ goods, count, orderAmount, dataForm }));
      // setDataForm({
      //   name: '',
      //   phone: '',
      //   email: '',
      // });
    }
  }, [dataForm]);

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
            Общая сумма заказа:{' '}
            <strong>{orderAmount.toLocaleString('ru-RU')} р</strong>
          </p>
          <div className="order_info_list_div">
            <a
              className={`order_info_list ${
                isOpen ? 'close_order' : 'open_order'
              }`}
              onClick={handleClick}
            >
              Состав заказа
            </a>
            <ul
              className={`order_info_list_ul ${
                isOpen ? 'ul_open' : 'ul_close'
              }`}
            >
              {goods.map((sneaker, index) => (
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
                background: 'var(--accent)',
                padding: '18px 47px',
                borderRadius: '4px',
                fontFamily: 'var(--second-family)',
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
    </div>
  );
};

export default OrderPage;
