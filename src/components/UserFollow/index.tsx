import React from 'react'

import * as S from './styles'
import Button from '../Button'
import { IUser } from './types'

const UserFollow = ({ ...props }: IUser) => {
  return (
    <S.Container>
      <S.Row>
        <S.Avatar source={{ uri: props.avatar_uri }} />
        <S.Column>
          <S.UserName>{props.username}</S.UserName>
          <S.Name>{props.name}</S.Name>
          <S.Followers>{props.followers} seguidores</S.Followers>
        </S.Column>
      </S.Row>
      <S.ContainerButtoon>
        <Button inverted text="Seguir" />
      </S.ContainerButtoon>
    </S.Container>
  )
}

export default UserFollow
