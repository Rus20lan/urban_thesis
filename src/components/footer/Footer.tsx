import './style.css';
import logo from '../../images/logo.svg';
import { useResize } from '../../hooks/useResize';
import Nav from '../nav/Nav';

const Footer = () => {
  const { isScreenLg } = useResize();
  return (
    <div className="footer_area">
      <div className="footer_container">
        <div className="logo_wrapper">
          <img src={logo} />
        </div>
        <div className="links_wrapper">{!isScreenLg && <Nav />}</div>
      </div>
    </div>
  );
};

export default Footer;
