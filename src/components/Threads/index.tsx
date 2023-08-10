import React from 'react'

import * as S from './styles'

const Threads = () => {
  const Post = () => (
    <S.ContainerPost>
      <S.UserName>Julius Caezar</S.UserName>
      <S.Post>
        Tempor dolor proident duis incididunt et. Cillum incididunt irure nisi
        excepteur sit ad ipsum consectetur proident deserunt sint
      </S.Post>
    </S.ContainerPost>
  )

  const ActionsButtons = () => (
    <S.ActionsContainer>
      <S.Action>
        <S.Icon source={require('../../assets/images/actions/like.png')} />
      </S.Action>
      <S.Action>
        <S.Icon source={require('../../assets/images/actions/comment.png')} />
      </S.Action>
      <S.Action>
        <S.Icon source={require('../../assets/images/actions/reply.png')} />
      </S.Action>
      <S.Action>
        <S.Icon source={require('../../assets/images/actions/share.png')} />
      </S.Action>
    </S.ActionsContainer>
  )

  const Interections = () => (
    <S.InteractionsContainer>
      <S.AvatarGroupContent>
        <S.Row>
          <S.AvatarGroup
            h="16"
            w="16"
            source={{ uri: 'https://randomuser.me/api/portraits/men/81.jpg' }}
          />
          <S.AvatarGroup
            top="-8"
            source={{ uri: 'https://randomuser.me/api/portraits/men/81.jpg' }}
          />
        </S.Row>
        <S.AvatarGroup
          top="-4"
          h="12"
          w="12"
          source={{ uri: 'https://randomuser.me/api/portraits/men/81.jpg' }}
        />
      </S.AvatarGroupContent>
    </S.InteractionsContainer>
  )

  return (
    <S.Container>
      <S.Row>
        <S.Column style={{ alignItems: 'center' }}>
          <S.Avatar
            source={{ uri: 'https://randomuser.me/api/portraits/men/81.jpg' }}
          />
          <S.Line />
        </S.Column>
        <S.Column>
          <Post />
          <ActionsButtons />
        </S.Column>
      </S.Row>
      <Interections />
    </S.Container>
  )
}

export default Threads
