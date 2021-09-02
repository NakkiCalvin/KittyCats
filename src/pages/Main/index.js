import React from 'react';
// import Cat from 'react-cats';
import * as S from './styled';

const Main = () => (
  <S.Container>
    <h1 style={{ color: 'pink' }}>CATS</h1>
    <p>
      КОТИКИ!!!
      <span role="img" alt="<3" aria-label="heart">
        ❤️
      </span>
    </p>
    <S.Wrapper>stuff</S.Wrapper>
  </S.Container>
);

export default Main;
