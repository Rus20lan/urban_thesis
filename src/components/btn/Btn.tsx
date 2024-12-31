import { FC } from 'react';
import './style.css';

type Props = {
  text: string;
  style?: React.CSSProperties;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  isDisable?: boolean;
  btnClose?: boolean;
};

const Btn: FC<Props> = ({ text, style, handleClick, isDisable, btnClose }) => {
  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    handleClick && handleClick(e);
  };

  if (isDisable && style) {
    style.opacity = '0';
  }
  return (
    <button
      onClick={onClick}
      className={btnClose ? 'btnClose' : ''}
      style={style ? style : {}}
    >
      {text}
    </button>
  );
};

export default Btn;
