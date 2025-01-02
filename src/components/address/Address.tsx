import { FC } from 'react';
import styled from 'styled-components';

type Props = {
  phone: string;
  address: string;
};

const H3 = styled.h3`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 1.875rem;
  line-height: 140%;
  color: var(--text);

  @media (max-width: 380px) {
    font-size: 1.6rem;
  }
`;
const Office = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 140%;
  color: var(--text);

  @media (max-width: 380px) {
    font-size: 1rem;
  }
`;
const Address: FC<Props> = ({ phone, address }) => {
  return (
    <>
      <H3>{phone}</H3>
      <Office>{address}</Office>
    </>
  );
};

export default Address;
