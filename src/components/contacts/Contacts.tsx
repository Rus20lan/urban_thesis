import { address } from '../../const/consts';
import Address from '../address/Address';
import Badge from '../badge/Badge';
import './style.scss';
import vk from '../../images/vk.svg';
import insta from '../../images/insta.svg';
import RoundBtn from '../RoundBtn/RoundBtn';
import { useResize } from '../../hooks/useResize';
import { useRef, useState } from 'react';
import ContentTitle from '../contentTitle/ContentTitle';

const Contacts = () => {
  const [isShowToolTip, setIsShowToolTip] = useState(false);
  const { width } = useResize();
  const badgeRef = useRef(null);
  const handleClick = () => {
    if (!isShowToolTip) {
      setIsShowToolTip(true);
      setTimeout(() => {
        setIsShowToolTip(false);
      }, 3000);
    }
  };

  return (
    <div className="contacts_area">
      <div className="contacts_container">
        {isShowToolTip && (
          <p className="tooltip_item speech">
            Адрес и телефон для корреспонденции, инвесторов. Вопросы о доставке,
            качестве обслуживания и товара просьба задавать в отдел продаж
          </p>
        )}
        <div className="contacts_info_wrapper">
          <ContentTitle
            text={'Контакты'}
            color={{ color: 'var(--text)' }}
            id="contacts"
          />
          <div className="contacts_wrapper">
            <p className="contacts_title mp_10">Главный офис</p>
            <div className="contacts_wrapper_div" ref={badgeRef}>
              <Badge
                handleClick={handleClick}
                style={{
                  boxShadow: '2px 4px 10px 0 rgba(0, 13, 84, 0.2)',
                  cursor: 'pointer',
                }}
                children={
                  <span>
                    <svg
                      width="6"
                      height="11"
                      viewBox="0 0 6 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.78 7.85175H2.184C2.16533 7.35964 2.212 6.92324 2.324 6.54255C2.44533 6.16187 2.604 5.85082 2.8 5.60941C3.00533 5.35871 3.21067 5.13123 3.416 4.92696C3.62133 4.72268 3.81733 4.49984 4.004 4.25843C4.2 4.00773 4.33067 3.74775 4.396 3.47849C4.47067 2.93067 4.35867 2.50356 4.06 2.19715C3.76133 1.88146 3.36933 1.72361 2.884 1.72361C2.52 1.72361 2.18867 1.84432 1.89 2.08573C1.59133 2.32714 1.414 2.64747 1.358 3.04673H0C0.0373333 2.14608 0.312667 1.46363 0.826 0.999375C1.34867 0.535122 2.03 0.302996 2.87 0.302996C3.64467 0.284426 4.32133 0.47477 4.9 0.874027C5.488 1.27329 5.838 1.79789 5.95 2.44784C6.006 2.80068 6.01533 3.10708 5.978 3.36706C5.94067 3.70133 5.83333 4.01702 5.656 4.31414C5.488 4.60198 5.29667 4.85732 5.082 5.08016C4.87667 5.303 4.67133 5.53977 4.466 5.79047C4.26067 6.03188 4.09267 6.329 3.962 6.68183C3.83133 7.02538 3.77067 7.41535 3.78 7.85175ZM3.626 10.0523C3.458 10.2102 3.24333 10.2891 2.982 10.2891C2.72067 10.2891 2.49667 10.2102 2.31 10.0523C2.13267 9.89446 2.044 9.69019 2.044 9.43949C2.044 9.1888 2.13267 8.98453 2.31 8.82668C2.49667 8.66883 2.72067 8.58991 2.982 8.58991C3.24333 8.58991 3.458 8.66883 3.626 8.82668C3.80333 8.98453 3.892 9.1888 3.892 9.43949C3.892 9.69019 3.80333 9.89446 3.626 10.0523Z"
                        fill="#444B58"
                      />
                    </svg>
                  </span>
                }
              />
            </div>
          </div>
          <div
            className="contacts_address_wrapper"
            style={
              width > 762 ? { marginTop: '39.79px' } : { marginTop: '10px' }
            }
          >
            <Address
              phone={address.mainOffice.phone}
              address={address.mainOffice.address}
            />
          </div>
          <p
            className="contacts_title"
            style={
              width > 762 ? { marginTop: '39.79px' } : { marginTop: '20px' }
            }
          >
            Отдел продаж
          </p>
          <div
            className="contacts_address_wrapper"
            style={
              width > 762 ? { marginTop: '19.9px' } : { marginTop: '10px' }
            }
          >
            <Address
              phone={address.mainOffice.phone}
              address={address.mainOffice.address}
            />
          </div>
          <div className="round_btns_wrapper">
            <RoundBtn
              urlImg={vk}
              style={{
                width: '44px',
                height: '44px',
                padding: '10px',
                backgroundColor: '#0e5a4c',
              }}
            />
            <RoundBtn
              urlImg={insta}
              style={{
                width: '44px',
                height: '44px',
                padding: '10px',
                backgroundColor: '#0e5a4c',
              }}
            />
          </div>
        </div>
        <div className="contacts_map_wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32197.47499840703!2d30.449366236476042!3d59.71469750057933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469620e7e65bcc1f%3A0xed94eeee8ec3bb2a!2z0JrQvtC80YHQvtC80L7Qu9GM0YHQutCw0Y8g0YPQuy4sIDQzLCDQujEsINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCAxOTY2MjU!5e0!3m2!1sru!2sru!4v1735053607861!5m2!1sru!2sru"
            // width="600"
            // height="450"
            // style="border:0;"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default Contacts;
