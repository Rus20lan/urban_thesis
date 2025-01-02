import { useEffect, useMemo, useState } from 'react';
import './style.css';
import { useParams } from 'react-router-dom';
import { ISneaker } from '../../interface/ISneaker';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import Btn from '../../components/btn/Btn';
import { addStringGender } from '../../modules/addStringGender';
import Modal from '../../components/modal';
import InfoModal from '../../components/infoModal/InfoModal';
import { addGoods } from '../../redux/order/orderSlice';

const initialSneaker: ISneaker = {
  id: 0,
  vendorСode: '',
  inStock: 0,
  title: '',
  description: '',
  imgUrl: '',
  stars: 0,
  sizes: [] as number[],
  price: 0,
  oldPrice: 0,
  gender: '',
  color: '',
  compound: '',
  country: '',
};

const SneakerPage = () => {
  const [sneaker, setSneaker] = useState(initialSneaker);
  const [isModalActive, setModalActive] = useState(false);
  const [isActiveSize, setIsActive] = useState(0);
  const { items } = useAppSelector((state) => state.sneakers);
  const params = useParams();
  const dispatch = useAppDispatch();
  let sneakerId = params.id && +params.id;

  useEffect(() => {
    const newItems = items as ISneaker[];
    if (newItems.length > 0) {
      const findSneaker = newItems.find((item) => item.id === sneakerId);
      if (findSneaker) setSneaker(findSneaker);
    }
  }, []);

  const handleClickBuySneaker = () => {
    if (isActiveSize > 0) {
      const buySneaker = Object.assign({}, sneaker);
      buySneaker.sizes = [+isActiveSize];
      dispatch(addGoods(buySneaker));
    } else {
      setModalActive(true);
    }
  };

  const handleModalClose = () => {
    setModalActive(false);
  };

  const stars = useMemo(() => {
    let arrayStars: JSX.Element[] = [];
    for (let x = 1; x <= sneaker.stars; x++) {
      arrayStars.push(<p key={x} className="star_p"></p>);
    }
    return arrayStars;
  }, [sneaker]);

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    setIsActive(+value);
  };

  useEffect(() => {
    if (isActiveSize !== 0) {
      const oldElem = document.getElementsByClassName('active_size');
      if (oldElem.length !== 0) {
        oldElem[0].classList.remove('active_size');
      }
      const elem = document.getElementById(
        `csize-${isActiveSize}`
      )?.parentElement;
      elem?.classList.add('active_size');
    }
  }, [isActiveSize]);

  const choiceSize = useMemo(() => {
    let arrayChoiceSize: JSX.Element[] = [];

    sneaker.sizes.forEach((item, index) => {
      arrayChoiceSize.push(
        <div key={index} className={isActiveSize === item ? 'active_size' : ''}>
          <input
            type="checkbox"
            id={`csize-${item}`}
            value={item}
            name={`csize-${item}`}
            onClick={handleClick}
          />
          <label htmlFor={`csize-${item}`}>{item}</label>
        </div>
      );
    });

    return arrayChoiceSize;
  }, [sneaker]);

  return (
    <div className="item_area">
      <div className="item_container sneaker_container">
        <div className="sneaker_present">
          <div className="sneaker_foto_wrapper">
            <img src={sneaker.imgUrl}></img>
          </div>
          <div className="sneaker_detail_info_wrapper">
            <div className="sneaker_vendor_stock_wrapper">
              <p className="vendor_stock_p">
                <span className="font_family">Артикул </span>
                <span className="font_family">{sneaker.vendorСode}</span>
              </p>
              <p className="vendor_stock_p">
                <span className="font_family">В наличии: </span>
                <span className="font_family">
                  {sneaker.inStock ? sneaker.inStock : 'Нет данных'}
                </span>
              </p>
            </div>
            <h2 className="sneaker_title">
              {addStringGender(sneaker.gender, sneaker.title)}
            </h2>
            <div className="stars_wrapper">{stars}</div>
            <div className="sneaker_choosing_size">
              <h3 className="font_family color_text">Выберите размер</h3>
              <div className="sneaker_choosing_size_wrapper">{choiceSize}</div>
            </div>
            <div className="sneaker_price_wrapper">
              <p className="sneaker_new_price">
                {sneaker.price.toLocaleString('ru-RU')}
              </p>
              <p className="font_family" style={{ color: 'var(--gray)' }}>
                {sneaker.oldPrice.toLocaleString('ru-RU')}
              </p>
            </div>
            <div className="sneaker_btn_wrapper">
              <Btn
                text={'Заказать'}
                style={{
                  borderRadius: '4px',
                  padding: '18px 47px',
                  width: '100%',
                  height: '100%',
                  background: 'var(--accent)',
                  color: '#fff',
                }}
                handleClick={handleClickBuySneaker}
              />
            </div>

            <div className="sneaker_stock_wrapper">
              <p className="sneaker_stock_p">Бесплатная доставка до двери</p>
              <p className="sneaker_stock_p">Оплата заказа при получении</p>
              <p className="sneaker_stock_p">Обмен в течении двух недель</p>
            </div>
          </div>
        </div>
        <div className="sneaker_description_wrapper">
          <div>
            <h3 className="sneaker_desctiption_title">Описание</h3>
            <p className="font_family color_text offset_desctiption ">
              {sneaker.description}
            </p>
          </div>
          <div className="sneaker_spec_container">
            <h3 className="sneaker_desctiption_title">Характеристики</h3>
            <div className="sneaker_spec_wrapper">
              <p className="font_family color_text">{`Пол: ${sneaker.gender}`}</p>
              <p className="font_family color_text">{`Цвета: ${sneaker.color}`}</p>
              <p className="font_family color_text">{`Состав: ${sneaker.compound}`}</p>
              <p className="font_family color_text">{`Страна: ${sneaker.country}`}</p>
            </div>
          </div>
        </div>
      </div>
      {isModalActive && (
        <Modal onClose={handleModalClose} isInfoModal={true}>
          <InfoModal message={'Чтобы заказать, необходимо выбрать размер'} />
        </Modal>
      )}
    </div>
  );
};

export default SneakerPage;
