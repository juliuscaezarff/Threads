import React from 'react'

import * as S from './styles'

import posts from '../../data/posts.json'
import Threads from '../../components/Threads'
import { ListRenderItemInfo } from 'react-native'
import { IPost } from '../../components/Threads/types'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  return (
    <S.Container>
      <SafeAreaView>
        <S.List
          data={posts}
          renderItem={({ item }: ListRenderItemInfo<IPost>) => (
            <Threads {...item} />
          )}
        />
      </SafeAreaView>
    </S.Container>
  )
}

export default Home
