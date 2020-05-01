import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Button = styled(RectButton)`
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 290px;
  padding: 16px;
  background-color: ${({ color }) => color};
  color: white;
  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  margin-left: 18px;
  color: #fff;
  text-align: center;
  font-size: 16px;
`;
