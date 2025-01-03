import { useEffect, useState } from 'react';
import Btn from '../btn/Btn';
import FilterForm from '../filterForm/FilterForm';
import SneakersCards from '../sneakersCards/SneakersCards';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import {
  getSneakers,
  getSneakersByFilter,
} from '../../redux/sneakers/sneakersSlice';
import styled from 'styled-components';
import ContentTitle from '../contentTitle/ContentTitle';

const CatalogArea = styled.div`
  width: 100%;
  height: auto;
  padding: 60px 0;
`;
const CatalogContainer = styled.div`
  margin: 0 auto;
  max-width: var(--max-width-wrapper);
  width: 95%;
  display: grid;
  grid-template-columns: 24% 1fr;
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

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
    <CatalogArea>
      <CatalogContainer>
        <div className="col_first">
          <ContentTitle
            text={'Каталог'}
            color={{ color: 'var(--text)' }}
            id="catalog"
          />
          <FilterForm setPage={setPage} setLoading={setLoading} />
        </div>
        <div style={{ marginTop: '85px' }}>
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
      </CatalogContainer>
    </CatalogArea>
  );
};

export default Catalog;
