import logo from '../../images/logo.svg';
import { useResize } from '../../hooks/useResize';
import Nav from '../nav/Nav';
import styled from 'styled-components';

const FooterArea = styled.div`
  width: 100%;
  background: var(--text);
  margin: 0 auto;
`;
const FooterContainer = styled.div`
  margin: 0 auto;
  max-width: var(--max-width-wrapper);
  width: 95%;
  display: flex;
  justify-content: space-between;
  padding: 28px 0;
`;

const Footer = () => {
  const { isScreenLg } = useResize();
  return (
    <FooterArea>
      <FooterContainer>
        <div className="logo_wrapper">
          <img src={logo} />
        </div>
        <div className="links_wrapper">{!isScreenLg && <Nav />}</div>
      </FooterContainer>
    </FooterArea>
  );
};

export default Footer;
