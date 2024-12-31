import { sizeConst } from '../../const/consts';
import './style.css';
import Size from './Size';
import { FC } from 'react';

type Props = {
  handleChangeSize: (size: { size: number; action: string }) => void;
};

const SizeFilterChart: FC<Props> = ({ handleChangeSize }) => {
  return (
    <div className="size_filter_wrapper">
      <span>Размер</span>
      <div className="size_filter_chart">
        {sizeConst.map((size, index) => (
          <Size key={index} size={size} handleChange={handleChangeSize} />
        ))}
      </div>
    </div>
  );
};

export default SizeFilterChart;
