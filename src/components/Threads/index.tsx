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

  return (
    <S.Container>
      <Post />
    </S.Container>
  )
}

export default Threads
