import { FC } from 'react';
import styled from 'styled-components';

type Props = {
  text: string;
  style?: React.CSSProperties;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  isDisable?: boolean;
  btnClose?: boolean;
};

const BtnButtton = styled.button`
  border-radius: 4px;
  font-family: 'Intro Regular', sans-serif;
  font-weight: 400;
  font-size: 1rem;
`;

const Btn: FC<Props> = ({ text, style, handleClick, isDisable, btnClose }) => {
  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    handleClick && handleClick(e);
  };

  if (isDisable && style) {
    style.opacity = '0';
  }
  return (
    <BtnButtton
      onClick={onClick}
      className={` ${btnClose ? 'btnClose' : ''}`}
      style={style ? style : {}}
    >
      {text}
    </BtnButtton>
  );
};

export default Btn;
