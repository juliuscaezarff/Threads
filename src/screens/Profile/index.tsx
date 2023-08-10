import React from 'react'

import * as S from './styles'
import CardUser from '../../components/CardUser'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../../components/Button'
import { Tabs } from 'react-native-collapsible-tab-view'
import { dark } from '../../themes/dark'
import Threads from '../../components/Threads'

const Profile = () => {
  const Header = () => (
    <S.Header>
      <S.ButtonIcon>
        <S.Icon source={require('../../assets/images/privacy.png')} />
      </S.ButtonIcon>
      <S.Row>
        <S.ButtonIcon mr="16">
          <S.Icon source={require('../../assets/images/instagram.png')} />
        </S.ButtonIcon>
        <S.ButtonIcon>
          <S.Icon source={require('../../assets/images/configuration.png')} />
        </S.ButtonIcon>
      </S.Row>
    </S.Header>
  )

  const Content = () => (
    <S.Container>
      <SafeAreaView>
        <Header />
        <CardUser />
        <S.ContainerButtons>
          <Button inverted text="Editar perfil" />
          <S.Spacing />
          <Button inverted text="Compartilhar perfil" />
        </S.ContainerButtons>
      </SafeAreaView>
    </S.Container>
  )

  return (
    <>
      <S.SafeArea />

      <Tabs.Container
        renderTabBar={props => <S.CustomTabBar {...props} />}
        headerContainerStyle={{ backgroundColor: dark.colors.background }}
        renderHeader={Content}
      >
        <Tabs.Tab name="threads" label={() => <S.TabLabel>Threads</S.TabLabel>}>
          <S.Container>
            <Tabs.ScrollView>
              <Threads />
            </Tabs.ScrollView>
          </S.Container>
        </Tabs.Tab>
        <Tabs.Tab
          name="respostas"
          label={() => <S.TabLabel>Respostas</S.TabLabel>}
        >
          <></>
        </Tabs.Tab>
      </Tabs.Container>
    </>
  )
}

export default Profile
