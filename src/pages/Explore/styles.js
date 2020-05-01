import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const InputWrapper = styled.View`
  width: 100%;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
`;

export const InputContainer = styled.View`
  height: 50px;
  flex-direction: row;
  align-items: center;
  border: solid 2px ${(props) => props.theme.color};
  border-radius: 25px;
  padding: 0 20px 0 10px;
`;

export const Input = styled.TextInput`
  color: ${(props) => props.theme.color};
  flex: 1;
  height: 100%;
  font-size: 20px;
  padding: 0 10px 0 10px;
`;

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

export const Loading = styled.ActivityIndicator.attrs({
  size: 'small',
  collor: '#999',
})`
  margin: 30px 0;
`;
