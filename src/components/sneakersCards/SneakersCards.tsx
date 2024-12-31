import { FC } from 'react';
import { ISneaker } from '../../interface/ISneaker';
import ItemCard from '../itemCard/ItemCard';
import './style.css';

type Props = {
  data: ISneaker[];
};
const SneakersCards: FC<Props> = ({ data }) => {
  return (
    <div className="sneakers_container">
      {data.map((item, index) => (
        <ItemCard isLarge={true} key={index} sneaker={item} />
      ))}
    </div>
  );
};

export default SneakersCards;
