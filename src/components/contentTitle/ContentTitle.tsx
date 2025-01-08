import { FC } from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  margin: 0;
  font-family: 'Intro Bold', sans-serif;
  font-weight: 700;
  font-size: 1.88rem;
`;

type Props = {
  text: string;
  color: { color: string };
  id?: string;
};

const ContentTitle: FC<Props> = ({ text, color, id }) => {
  if (id) {
    return (
      <Title id={id} style={color}>
        {text}
      </Title>
    );
  } else {
    return <Title style={color}>{text}</Title>;
  }
};

export default ContentTitle;
