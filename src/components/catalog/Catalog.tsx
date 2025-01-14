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
import { useResize } from '../../hooks/useResize';
import RoundBtn from '../RoundBtn/RoundBtn';
import Loader from '../loader/Loader';

const CatalogArea = styled.div`
  width: 100%;
  height: auto;
  padding: 60px 0;
`;
const CatalogContainer = styled.div`
  margin: 0 auto;
  max-width: 1180px;
  width: 95%;
  display: grid;
  grid-template-columns: 24% 1fr;
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;
const CatalogCardsWrapper = styled.div`
  margin-top: 85px;
  @media (max-width: 1024px) {
    margin-top: 45px;
  }
  @media (max-width: 500px) {
    margin-top: 20px;
  }
`;
const CatalogFilterWrapper = styled.div`
  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
  }
`;

const Catalog = () => {
  const dispatch = useAppDispatch();
  const { isNotEmpty, filterObj } = useAppSelector((state) => state.filter);
  const { meta, items, loading } = useAppSelector((state) => state.sneakers);
  const { current_page, total_pages } = meta;
  const [page, setPage] = useState(current_page);
  const [isLoading, setLoading] = useState(false);
  const { isScreenXl } = useResize();

  const [isOpen, setIsOpen] = useState(false);

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

  const handleClickFilterBtn = () => {
    setIsOpen(!isOpen);
  };

  return (
    <CatalogArea>
      <CatalogContainer>
        <CatalogFilterWrapper>
          <ContentTitle
            text={'Каталог'}
            color={{ color: 'var(--text)' }}
            id="catalog"
          />
          {!isScreenXl && (
            <FilterForm setPage={setPage} setLoading={setLoading} />
          )}
          {isScreenXl && (
            <RoundBtn
              style={{
                width: '44px',
                height: '44px',
                padding: '10px',
                backgroundColor: '#b2b5bb',
              }}
              handleClick={handleClickFilterBtn}
            >
              {
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="7"
                    cy="7"
                    rx="3"
                    ry="3"
                    transform="rotate(90 7 7)"
                    stroke={isOpen ? '#444b58' : '#FFFFFF'}
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M9.5 5H18C19.1046 5 20 5.89543 20 7V7C20 8.10457 19.1046 9 18 9H9.5"
                    stroke={isOpen ? '#444b58' : '#FFFFFF'}
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <ellipse
                    cx="3"
                    cy="3"
                    rx="3"
                    ry="3"
                    transform="matrix(4.37114e-08 1 1 -4.37114e-08 14 14)"
                    stroke={isOpen ? '#444b58' : '#FFFFFF'}
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M14.5 15H6C4.89543 15 4 15.8954 4 17V17C4 18.1046 4.89543 19 6 19H14.5"
                    stroke={isOpen ? '#444b58' : '#FFFFFF'}
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              }
            </RoundBtn>
          )}
        </CatalogFilterWrapper>
        {isScreenXl && isOpen && (
          <FilterForm setPage={setPage} setLoading={setLoading} />
        )}
        <CatalogCardsWrapper>
          {loading && <Loader />}
          {!loading && items.length === 0 && (
            <p className="font_family" style={{ textAlign: 'center' }}>
              Список пуст
            </p>
          )}
          {!loading && items.length !== 0 && (
            <>
              <SneakersCards data={items} />
              <Btn
                text="Показать еще"
                style={{
                  display: 'flex',
                  margin: '40px auto 60px auto',
                  width: '200px',
                  height: '60px',
                  background: '#f14f4f',
                  padding: '18px 46px',
                  color: '#fff',
                }}
                handleClick={handleClick}
                isDisable={!(current_page < total_pages)}
              />
            </>
          )}
        </CatalogCardsWrapper>
      </CatalogContainer>
    </CatalogArea>
  );
};

export default Catalog;
