import { FC } from 'react';
import './style.css';

type Props = {
  phone: string;
  address: string;
};

const Address: FC<Props> = ({ phone, address }) => {
  return (
    <>
      <h3 className="phone_h3">{phone}</h3>
      <p className="address_p">{address}</p>
    </>
  );
};

export default Address;
