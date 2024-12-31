import { useEffect, useState } from 'react';
import Btn from '../btn/Btn';
import FilterForm from '../filterForm/FilterForm';
import SneakersCards from '../sneakersCards/SneakersCards';
import './style.css';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import {
  getSneakers,
  getSneakersByFilter,
} from '../../redux/sneakers/sneakersSlice';

const Catalog = () => {
  const dispatch = useAppDispatch();
  const { isNotEmpty, filterObj } = useAppSelector((state) => state.filter);
  const { meta, items } = useAppSelector((state) => state.sneakers);
  const { current_page, total_pages } = meta;
  const [page, setPage] = useState(current_page);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading && !isNotEmpty) {
      dispatch(getSneakers({ page }));
      setLoading(false);
    } else if (isLoading && isNotEmpty) {
      dispatch(
        getSneakersByFilter(Object.assign({}, { ...filterObj }, { page }))
      );
      setLoading(false);
    }
  }, [isLoading]);

  useEffect(() => {
    if (items.length === 0) {
      dispatch(getSneakers({ page }));
    }
  }, []);

  const handleClick = () => {
    if (current_page <= total_pages) {
      setLoading(true);
      setPage(page + 1);
    }
  };

  return (
    <div className="catalog_area">
      <div className="catalog_container">
        <div className="col_first">
          <h2 id="catalog" className="content_title">
            Каталог
          </h2>
          <FilterForm setPage={setPage} setLoading={setLoading} />
        </div>
        <div className="col_second">
          {items.length === 0 && (
            <p className="total_order_value" style={{ textAlign: 'center' }}>
              Список пуст
            </p>
          )}
          {items.length !== 0 && (
            <>
              <SneakersCards data={items} />
              <Btn
                text="Показать еще"
                style={{
                  display: 'flex',
                  margin: '40px auto 60px auto',
                  width: '200px',
                  height: '60px',
                  background: 'var(--accent)',
                  padding: '18px 46px',
                  color: '#fff',
                }}
                handleClick={handleClick}
                isDisable={!(current_page < total_pages)}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
