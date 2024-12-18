import { FC } from 'react';
import './style.css';

type Props = {
  text: string;
};

const Btn: FC<Props> = ({ text }) => {
  return <button className="btn_red">{text}</button>;
};

export default Btn;
