import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: white;
  border-radius: 20px;
  align-items: center;
  padding: 40px 0 0 0;
`;

export const TextContainer = styled.View``;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #993366;
  text-align: center;
`;

export const InputsContainer = styled.View`
  width: 80%;
  margin: 20px 0;
`;

export const Input = styled.TextInput`
  width: 100%;
  margin-top: 10px;
  padding-left: 20px;
  border: solid 2px #993366;
  border-radius: 20px;
  color: #993366;
  font-size: 15px;
`;

export const ButtonsContainer = styled.View`
  border-top-width: 1px;
  border-top-color: #ddd;
  height: 100px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const Button = styled(RectButton)`
  width: 40%;
  background-color: ${({ backcolor }) => backcolor};
  padding: 20px;
  border-radius: 20px;
`;

export const Text = styled.Text`
  color: white;
  text-align: center;
  font-size: 18px;
`;

export const ImagePreview = styled.Image`
  margin: 0 auto;
  border-radius: 20px;
  width: 100%;
`;

export const ImageButton = styled(RectButton)`
  margin: 20px 0;
  padding: 15px;
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

export const PickerContainer = styled.View`
  width: 100%;
  height: 50px;
  padding-right: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-top-width: 1px;
  border-top-color: #ddd;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
`;

export const PickerLabel = styled.Text`
  flex: 1;
  text-align: center;
`;

export const CategoryPicker = styled.Picker`
  width: 60%;
`;
