import React from 'react'

import * as S from './styles'
import CardUser from '../../components/CardUser'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../../components/Button'

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

  return (
    <S.Container>
      <SafeAreaView>
        <S.SafeArea />
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
}

export default Profile
