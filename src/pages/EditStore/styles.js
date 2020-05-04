import styled from 'styled-components/native';
import TextInputMask from 'react-native-text-input-mask';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;

export const Title = styled.Text`
  color: #993366;
  font-weight: bold;
  font-size: 25px;
`;

export const Input = styled.TextInput`
  width: 90%;
  margin: 10px 0;
  padding-left: 20px;
  border: solid 2px #993366;
  border-radius: 20px;
  color: #993366;
`;

export const PhoneInput = styled(TextInputMask)`
  width: 90%;
  margin: 10px 0;
  padding-left: 20px;
  border: solid 2px #993366;
  border-radius: 20px;
  color: #993366;
`;

export const ImagePreview = styled.Image`
  margin: 10px auto;
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const Button = styled(RectButton)`
  margin: 20px 0;
  padding: 20px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: #993366;
`;

export const ButtonText = styled.Text`
  font-size: 15px;
  text-align: center;
  color: white;
`;

export const Icon = styled.Image`
  width: 25px;
  height: 25px;
  margin: 0 10px;
`;
