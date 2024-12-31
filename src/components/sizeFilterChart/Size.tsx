import { FC, useEffect, useState } from 'react';
import { useAppSelector } from '../../redux/store/hooks';

type Props = {
  size: { id: string; value: string };
  handleChange: (size: { size: number; action: string }) => void;
};

const Size: FC<Props> = ({ size, handleChange }) => {
  const { filterObj, isNotEmpty } = useAppSelector((state) => state.filter);
  const [isActive, setIsActive] = useState(() => {
    if (filterObj.size.includes(+size.value)) return true;
    else return false;
  });

  useEffect(() => {
    if (!isNotEmpty) setIsActive(false);
  }, [isNotEmpty]);

  const handleChangeChildren = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const value = e.target.value;
    if (filterObj.size.includes(+size.value)) {
      setIsActive(false);
      handleChange({ size: +value, action: 'remove' });
    } else {
      setIsActive(true);
      handleChange({ size: +value, action: 'add' });
    }
  };

  return (
    <div className={isActive ? 'active' : ''}>
      <input
        type="checkbox"
        id={size.id}
        value={size.value}
        name={size.id}
        onChange={handleChangeChildren}
      />
      <label htmlFor={size.id}>{size.value}</label>
    </div>
  );
};

export default Size;
