import { FC } from 'react';
import './style.css';

type Props = {
  text: string;
  style?: React.CSSProperties;
};

const Btn: FC<Props> = ({ text, style }) => {
  return (
    <button className="btn_red" style={style ? style : {}}>
      {text}
    </button>
  );
};

export default Btn;
