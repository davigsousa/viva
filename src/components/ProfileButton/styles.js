import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';


export const ButtonContainer = styled.View`
  width: 100%;
  height: 80px;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
`;

export const Button = styled(RectButton)`
  flex: 1;
  align-items: center;
  flex-direction: row;
  padding-left: 40px;
`;

export const ButtonImage = styled.Image`
  width: 46px;
  height: 46px;
  border-radius: 23px;
  margin-right: 40px;
`;

export const ButtonLabel = styled.Text`
  font-size: 20px;
`;
