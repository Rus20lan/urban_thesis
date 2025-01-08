import { FC } from 'react';
import './style.scss';

type Props = {
  value?: string;
  style?: React.CSSProperties;
  children?: JSX.Element;
  handleClick?: () => void;
};

const Badge: FC<Props> = ({ value, style, children, handleClick }) => {
  return (
    <div
      className="badge_shell"
      style={style ? style : {}}
      onClick={handleClick}
    >
      {children && children}
      {!children && <p>{value || 0}</p>}
    </div>
  );
};

export default Badge;
