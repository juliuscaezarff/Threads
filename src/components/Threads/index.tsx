import React from 'react'

import * as S from './styles'
import { IPost } from './types'

const Threads = ({ ...props }: IPost) => {
  const Post = () => (
    <S.ContainerPost>
      <S.UserName>{props.username}</S.UserName>
      <S.Post>{props.post}</S.Post>
      {props.postImage && <S.PostImage source={{ uri: props.postImage }} />}
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
      <S.Likes>7 respostas - 59 curtidas</S.Likes>
    </S.InteractionsContainer>
  )

  return (
    <S.Container>
      <S.Row>
        <S.Column style={{ alignItems: 'center' }}>
          <S.Avatar source={{ uri: props.avatar_uri }} />
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
