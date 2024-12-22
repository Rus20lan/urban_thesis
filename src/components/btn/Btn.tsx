import { FC } from "react";
import "./style.css";

type Props = {
  text: string;
  style?: React.CSSProperties;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Btn: FC<Props> = ({ text, style, handleClick }) => {
  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    handleClick && handleClick(e);
  };
  return (
    <button onClick={onClick} className="btn_red" style={style ? style : {}}>
      {text}
    </button>
  );
};

export default Btn;
