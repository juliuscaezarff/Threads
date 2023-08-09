import React from 'react'

import * as S from './styles'

const CardUser = () => {
  return (
    <S.Container>
      <S.Row>
        <S.Column>
          <S.Name>Julius Caezar</S.Name>
          <S.UserName>juliusCaezar</S.UserName>
          <S.RowUserName>
            <S.TagContainer>
              <S.Tag>threads.net</S.Tag>
            </S.TagContainer>
          </S.RowUserName>
        </S.Column>
        <S.Avatar
          source={{ uri: 'https://randomuser.me/api/portraits/men/81.jpg' }}
        />
      </S.Row>
      <S.Bio>Software Engineer | Never stop learning</S.Bio>
    </S.Container>
  )
}

export default CardUser
