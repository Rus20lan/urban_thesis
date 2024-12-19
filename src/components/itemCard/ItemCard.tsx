import './style.css';
import sneaker from '../../images/image.png';
import { useState } from 'react';
import RoundBtn from '../RoundBtn/RoundBtn';
import eye from '../../images/eye.svg';
import basket from '../../images/basket.svg';

const ItemCard = () => {
  const [isVisibleRoundBtn, setIsVisibleRoundBtn] = useState(false);

  const handleMouseMove = () => {
    if (!isVisibleRoundBtn) {
      setIsVisibleRoundBtn(true);
    }
  };
  const handleMouseLeave = () => {
    if (isVisibleRoundBtn) setIsVisibleRoundBtn(false);
  };

  return (
    <div
      className="card_container"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card_img_wrapper">
        <img src={sneaker} alt="sneakers"></img>
      </div>
      <div className="card_info_wrapper">
        <p className="card_title">Кроссовки Nike Air Force 1 '07 QS</p>
        <p className="card_price">11 000 р</p>
      </div>
      {isVisibleRoundBtn && (
        <div className="round_btn_group">
          <RoundBtn urlImg={eye} />
          <RoundBtn urlImg={basket} />
        </div>
      )}
    </div>
  );
};

export default ItemCard;
