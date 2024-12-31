import { FC } from 'react';
import './style.css';

type Props = {
  urlImg: string;
  style: React.CSSProperties;
  handleClick?: () => void;
};

const RoundBtn: FC<Props> = ({ urlImg, style, handleClick }) => {
  return (
    <a className="round_btn" style={style} onClick={handleClick}>
      <img src={urlImg}></img>
    </a>
  );
};

export default RoundBtn;
