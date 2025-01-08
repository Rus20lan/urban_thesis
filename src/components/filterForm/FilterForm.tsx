import Nouislider from 'nouislider-react';
import './style.scss';
import { FC, useEffect, useState } from 'react';
import Btn from '../btn/Btn';
import SizeFilterChart from '../sizeFilterChart/SizeFilterChart';
import { INITIAL_FILTER_DATA } from '../../const/consts';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import {
  empty,
  filterObjClear,
  filterObjUpdate,
  filterPriceUpdate,
  notEmpty,
} from '../../redux/filter/filterSlice';
import { removeItems } from '../../redux/sneakers/sneakersSlice';

type Props = {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const FilterForm: FC<Props> = ({ setPage, setLoading }) => {
  const dispatch = useAppDispatch();
  const { isNotEmpty, filterObj } = useAppSelector((state) => state.filter);
  const [data, setData] = useState(filterObj);
  const [price, setPrice] = useState(filterObj.price);
  const range = {
    min: INITIAL_FILTER_DATA.PRICE_LOW,
    max: INITIAL_FILTER_DATA.PRICE_HIGH,
  };
  const start = [INITIAL_FILTER_DATA.PRICE_LOW, INITIAL_FILTER_DATA.PRICE_HIGH];
  const step = 1;

  const onChangeSlide = (pric: string[]) => {
    setPrice({ low: +pric[0].split('.')[0], high: +pric[1].split('.')[0] });
    // if (!isNotEmpty) dispatch(notEmpty());
  };

  const handleChangeGender = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    if (value === 'мужской' || value === 'женский') {
      setData({ ...filterObj, gender: value });
    }
  };

  const handleChangeSize = ({
    size,
    action,
  }: {
    size: number;
    action: string;
  }) => {
    if (action === 'add') {
      setData({
        ...filterObj,
        size: [...filterObj.size, size],
      });
    } else {
      setData({
        ...filterObj,
        size: [...filterObj.size].filter((si) => si !== size),
      });
    }
  };

  useEffect(() => {
    dispatch(filterObjUpdate(data));
  }, [data]);

  useEffect(() => {
    dispatch(filterPriceUpdate(price));
  }, [price]);

  useEffect(() => {
    if (filterObj.gender !== null || filterObj.size.length > 0) {
      dispatch(notEmpty());
    } else {
      dispatch(empty());
    }
  }, [filterObj]);

  const handleClickClearFilter = () => {
    dispatch(filterObjClear());
    dispatch(removeItems());
    setPage(1);
    setLoading(true);
  };

  const handleClickApply = () => {
    if (isNotEmpty) {
      dispatch(removeItems());
      setPage(1);
      setLoading(true);
    }
  };

  return (
    <div className="form_wrapper">
      <form>
        <h3 className="title_filter_form">Подбор по параметрам</h3>
        <div className="price_filter_wrapper">
          <span className="font_family color_text">Цена, руб</span>
          <div>
            <div className="nouislider_data">
              <span className="span_nouislider">{price.low}</span>
              <div className="separator"></div>
              <span className="span_nouislider">{price.high}</span>
            </div>
            <Nouislider
              start={start}
              step={step}
              range={range}
              onSlide={onChangeSlide}
            />
          </div>
        </div>
        <div className="gender_filter_wrapper">
          <span className="font_family color_text">Пол</span>
          <div className="gender_filter_input_group">
            <input
              className="custom_checkbox"
              type="checkbox"
              name="male"
              id="male"
              value={'мужской'}
              onChange={handleChangeGender}
              checked={filterObj.gender === 'мужской'}
            />
            <label htmlFor="male">мужской</label>
            <input
              className="custom_checkbox"
              type="checkbox"
              name="female"
              id="female"
              value={'женский'}
              onChange={handleChangeGender}
              checked={filterObj.gender === 'женский'}
            />
            <label htmlFor="female">женский</label>
          </div>
        </div>
        <SizeFilterChart handleChangeSize={handleChangeSize} />
        <div className="btns_filter_wrapper">
          <Btn
            text="Применить"
            style={{
              padding: '18px 48px',
              width: '100%',
              height: '60px',
              background: '#444b58',
              color: '#fff',
            }}
            handleClick={handleClickApply}
          />
          <Btn
            text="сбросить"
            style={{
              background: 'none',
              margin: '20px auto',
              display: 'flex',
              color: '#444b58',
              padding: '0',
              boxSizing: 'border-box',
            }}
            handleClick={handleClickClearFilter}
          />
        </div>
      </form>
    </div>
  );
};

export default FilterForm;
