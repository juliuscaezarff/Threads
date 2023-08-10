import React from 'react'

import * as S from './styles'

const UserInfo = () => (
  <S.Column>
    <S.Name>Julius Caezar</S.Name>
    <S.RowUserName>
      <S.UserName>juliusCaezar</S.UserName>
      <S.TagContainer>
        <S.Tag>threads.net</S.Tag>
      </S.TagContainer>
    </S.RowUserName>
  </S.Column>
)

const CardUser = () => {
  return (
    <S.Container>
      <S.Row>
        <UserInfo />
        <S.Avatar
          source={{ uri: 'https://randomuser.me/api/portraits/men/81.jpg' }}
        />
      </S.Row>
      <S.Bio>Software Engineer | Never stop learning</S.Bio>
      <S.AvatarGroupContainer>
        <S.AvatarGroup
          source={{ uri: 'https://randomuser.me/api/portraits/men/81.jpg' }}
        />
        <S.AvatarGroup
          ml="-8"
          source={{ uri: 'https://randomuser.me/api/portraits/men/81.jpg' }}
        />
        <S.AvatarGroup
          ml="-8"
          source={{ uri: 'https://randomuser.me/api/portraits/men/81.jpg' }}
        />
        <S.Followers>2957 seguidores</S.Followers>
      </S.AvatarGroupContainer>
    </S.Container>
  )
}

export default CardUser
