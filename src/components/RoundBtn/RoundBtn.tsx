import { FC } from 'react';
import './style.css';

type Props = {
  urlImg?: string;
  style: React.CSSProperties;
  children?: JSX.Element;
  handleClick?: () => void;
};

const RoundBtn: FC<Props> = ({ urlImg, style, handleClick, children }) => {
  return (
    <a className="round_btn" style={style} onClick={handleClick}>
      {urlImg && <img src={urlImg}></img>}
      {children && children}
    </a>
  );
};

export default RoundBtn;
