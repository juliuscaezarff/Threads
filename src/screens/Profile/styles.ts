import styled from 'styled-components/native';
import { dark } from '../../themes/dark';

export const Container = styled.View`
  flex: 1;
  background-color: ${dark.colors.background};
`;

export const Header = styled.View`
   flex-direction: row;
   padding: 0 16px;
   align-items: center;
   justify-content: space-between;
`;

export const ButtonIcon = styled.TouchableOpacity<{mr?: string}>`
  margin-right: ${({ mr }) => (mr ? mr : 0)}px;
`;

export const Icon = styled.Image``;

export const SafeArea = styled.SafeAreaView``; 

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ContainerButtons = styled.View`
  flex-direction: row;
  padding: 16px;
`

export const Spacing = styled.View`
  width: 8px;
`