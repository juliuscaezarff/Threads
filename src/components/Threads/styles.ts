import { styled } from 'styled-components/native'
import { dark } from '../../themes/dark'
import { IAvatarGroupStyle } from './types'

export const Container = styled.View`
  padding: 16px;
`

export const ContainerPost = styled.TouchableOpacity``

export const UserName = styled.Text`
  font-family: 'Inter_500Medium';
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

export const Avatar = styled.Image`
  width: 36px;
  height: 36px;
  border-radius: 18px;
`

export const Row = styled.View`
  flex-direction: row;
`
export const Column = styled.View`
  margin-right: 8px;
`

export const Line = styled.View`
  flex: 1;
  background-color: ${dark.colors.gray};
  width: 1.5px;
  margin: 16px 0 8px 0;
`

export const InteractionsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`

export const AvatarGroupContent = styled.View`
  align-items: center;
  margin-top: 8px;
`
export const AvatarGroup = styled.Image<IAvatarGroupStyle>`
  width: ${({ h }) => h ? h : 20}px;
  height: ${({ w }) => w ? w : 20}px;
  margin-top: ${({ top }) => top ? top : 0};
  border-radius: 10px;
  margin-right: 4px;
`
export const Likes = styled.Text`
  font-family: "Inter_400Regular";
  font-size: 14px;
  color: ${dark.colors.gray};
  margin-left: 8px;
`

export const PostImage = styled.Image`
  width: 100%;
  height: 300px;
  border-radius: 8px;
  margin-right: 32px;
  margin-bottom: 16px;
`
