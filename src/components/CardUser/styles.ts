import { styled } from 'styled-components/native'
import { dark } from '../../themes/dark'

export const Container = styled.View`
  margin-top: 32px;
  padding: 0 16px;
`

export const Name = styled.Text`
  font-family: 'Inter_700Bold';
  font-size: 20px;
  color: ${dark.colors.white};
`

export const UserName = styled.Text`
  font-family: 'Inter_500Medium';
  font-size: 12px;
  color: ${dark.colors.white};
  margin-right: 8px;
`
export const TagContainer = styled.View`
  background-color: ${dark.colors.gray_dark};
  border-radius: 50px;
  padding: 8px 16px;
`

export const Tag = styled.Text`
  font-family: 'Inter_500Medium';
  font-size: 10px;
  color: ${dark.colors.gray};
`

export const RowUserName = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`

export const Avatar = styled.Image`
  height: 64px;
  width: 64px;
  border-radius: 32px;
`

export const Column = styled.View``

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const Bio = styled.Text`
  font-family: 'Inter_500Medium';
  font-size: 12px;
  color: ${dark.colors.white};
  margin-top: 16px;
`
