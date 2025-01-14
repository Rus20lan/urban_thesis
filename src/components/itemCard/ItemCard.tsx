import './style.scss';
import { FC, useRef, useState } from 'react';
import RoundBtn from '../RoundBtn/RoundBtn';
import eye from '../../images/eye.svg';
import basket from '../../images/basket.svg';
import { ISneaker } from '../../interface/ISneaker';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { addGoods, removeGoods } from '../../redux/order/orderSlice';
import { addStringGender } from '../../modules/addStringGender';
import waste from '../../images/waste.svg';
import Modal from '../modal';
import SneakerPage from '../../pages/sneakerPage/SneakerPage';

type Props = {
  sneaker: ISneaker;
  isLarge?: boolean;
  isLittle?: boolean;
};

const ItemCard: FC<Props> = ({ sneaker, isLarge, isLittle }) => {
  const [isVisibleRoundBtn, setIsVisibleRoundBtn] = useState(false);
  const [isModalActive, setModalActive] = useState(false);
  const { count } = useAppSelector((state) => state.order);
  const prevValue = useRef(0);
  const dispatch = useAppDispatch();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (isModalActive && prevValue.current < count) {
  //     setModalActive(false);
  //     prevValue.current = count;
  //   }
  // }, [count]);

  const handleModalClose = () => {
    if (isModalActive && prevValue.current < count) {
      setModalActive(false);
      prevValue.current = count;
    }
  };

  const handleMouseMove = () => {
    if (!isVisibleRoundBtn) {
      setIsVisibleRoundBtn(true);
    }
  };
  const handleMouseLeave = () => {
    if (isVisibleRoundBtn) setIsVisibleRoundBtn(false);
  };

  const handleClickEyeBtn = () => {
    // navigate(`sneaker/${sneaker.id}`);
    setModalActive(true);
  };

  const handleClickBasketBtn = () => {
    dispatch(addGoods(sneaker));
  };

  const handleClickWasteBtn = () => {
    dispatch(removeGoods(sneaker));
  };

  if (isLarge) {
    return (
      <div
        className="card_container"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="card_img_wrapper">
          <img src={sneaker.imgUrl} alt="sneakers"></img>
          <div
            className="overlay"
            style={
              isVisibleRoundBtn
                ? { display: 'block', opacity: '1' }
                : { display: 'none', opacity: '0' }
            }
          ></div>
        </div>
        <div className="card_info_wrapper">
          <p className="font_family color_text">
            {addStringGender(sneaker.gender, sneaker.title)}
          </p>
          <p className="card_price">
            {sneaker.price.toLocaleString('ru-RU')} р
          </p>
        </div>
        {isVisibleRoundBtn && (
          <div className="round_btn_group">
            <RoundBtn
              urlImg={eye}
              style={{
                maxWidth: '30%',
                maxHeight: '25%',
                backgroundColor: '#444b58',
                padding: '10%',
              }}
              handleClick={handleClickEyeBtn}
            />
            <RoundBtn
              urlImg={basket}
              style={{
                maxWidth: '30%',
                maxHeight: '25%',
                backgroundColor: '#444b58',
                padding: '10%',
              }}
              handleClick={handleClickBasketBtn}
            />
          </div>
        )}
        {isModalActive && (
          <Modal onClose={handleModalClose} isSneakerModal={true}>
            <SneakerPage idSneaker={sneaker.id} />
          </Modal>
        )}
      </div>
    );
  } else if (isLittle) {
    return (
      <li className="order_card_container">
        <div className="order_img_wrapper">
          <img src={sneaker.imgUrl} alt="sneakers"></img>
        </div>
        <div className="order_title_price_wrapper">
          <p className="order_li_title">
            {addStringGender(sneaker.gender, sneaker.title)}
          </p>
          <p className="card_price">{sneaker.price.toLocaleString('ru-RU')}</p>
        </div>
        <div className="waste_btn_wrapper">
          <img onClick={handleClickWasteBtn} src={waste}></img>
        </div>
      </li>
    );
  } else {
    return null;
  }
};
export default ItemCard;
