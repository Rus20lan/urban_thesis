import styled from 'styled-components';
import Nav from '../nav/Nav';
import { useAppDispatch } from '../../redux/store/hooks';
import { toggleBurger } from '../../redux/burger/burgerSlice';

const MenuWrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 65px;
  padding-bottom: 20px;
  background: var(--gray);
  border-radius: 0 0 10px 10px;
  box-sizing: border-box;
  z-index: 102;
`;

const BurgerMenu = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(toggleBurger());
  };
  return (
    <MenuWrapper>
      <Nav handleClick={handleClick} />
    </MenuWrapper>
  );
};

export default BurgerMenu;
