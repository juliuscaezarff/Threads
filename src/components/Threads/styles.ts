import { styled } from 'styled-components/native'
import { dark } from '../../themes/dark'

export const Container = styled.View``

export const ContainerPost = styled.TouchableOpacity``

export const UserName = styled.Text`
  font-family: "Inter_500Medium";
  font-size: 14px;
  color: ${dark.colors.white};
`

export const Post = styled.Text`
  margin-bottom: 16px;
  font-family: 'Inter_400Regular';
  font-size: 14px;
  margin-top: 8px;
  color: ${dark.colors.white};
`

export const ActionsContainer = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Action = styled.TouchableOpacity`
  margin-right: 16px;
`

export const Icon = styled.Image``
