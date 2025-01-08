import { FC } from 'react';
import './style.scss';
import Btn from '../btn/Btn';
type Props = {
  message: string;
};
const InfoModal: FC<Props> = ({ message }) => {
  return (
    <div className="content_info_modal">
      <div className="view_order_wrapper">
        <div className=" grid_two_rows">
          <div className="info_message_wrapper">
            <p className="total_order_value">{message}</p>
          </div>
          <div className="modal_btn_wrapper">
            <Btn
              btnClose={true}
              text="Ok"
              style={{
                borderRadius: '4px',
                width: '100px',
                height: '100%',
                background: '#f14f4f',
                color: '#fff',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
