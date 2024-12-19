import { FC } from 'react';
import './style.css';

type Props = {
  urlImg: string;
};

const RoundBtn: FC<Props> = ({ urlImg }) => {
  return (
    <a className="round_btn">
      <img src={urlImg}></img>
    </a>
  );
};

export default RoundBtn;
