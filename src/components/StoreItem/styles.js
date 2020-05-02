import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';


export const StoreWrapper = styled.View`
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
`;

export const Store = styled(RectButton)`
  flex: 1;
  height: 100px;
  flex-direction: row;
  align-items: center;

  padding: 10px 20px 10px 20px;
`;

export const StoreImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  border-color: #dddddd;
  border-width: 1px;
`;

export const StoreDetails = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Username = styled.Text`
  color: black;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Description = styled.Text``;

export const Address = styled.Text``;
