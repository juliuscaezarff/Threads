import React from 'react'
import { ListRenderItemInfo } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import * as S from './styles'
import { dark } from '../../themes/dark'

import Feather from '@expo/vector-icons/Feather'
import UserFollow from '../../components/UserFollow'

import users from '../../data/users.json'
import { IUser } from '../../components/UserFollow/types'
import { FlashList } from 'react-native-collapsible-tab-view'

const Search = () => {
  const Header = () => (
    <S.Header>
      <S.Title>Pesquisar</S.Title>
      <S.ContainerInput>
        <Feather color={dark.colors.gray} name="search" size={20} />
        <S.Input
          placeholder="Pesquisar"
          placeholderTextColor={dark.colors.gray}
        />
      </S.ContainerInput>
    </S.Header>
  )

  return (
    <S.Container>
      <SafeAreaView>
        <Header />
        <S.List
          data={users}
          ItemSeparatorComponent={S.Divider}
          renderItem={({ item }: ListRenderItemInfo<IUser>) => (
            <UserFollow {...item} />
          )}
        />
      </SafeAreaView>
    </S.Container>
  )
}

export default Search
