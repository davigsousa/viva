import styled from 'styled-components/native';
import Modal from 'react-native-modal';


export const Container = styled.View`
  background-color: white;
  border-radius: 20px;
  align-items: center;
  justify-content: space-between;
  padding: 60px 0;
  height: 400px;
`;

export const TextContainer = styled.View``;

export const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #993366;
  text-align: center;
`;

export const Input = styled.TextInput`
  width: 80%;
  margin-top: 30px;
  padding-left: 20px;
  border: solid 2px #993366;
  border-radius: 20px;
  color: #993366;
  font-size: 20px;
`;

export const ButtonsContainer = styled.View`
  height: 270px;
  width: 100%;
  align-items: center;
`;

export const Button = styled.TouchableHighlight`
  width: 60%;
  background-color: ${({ backcolor }) => backcolor};
  padding: 20px;
  border-radius: 20px;
`;

export const Text = styled.Text`
  color: white;
  text-align: center;
  font-size: 18px;
`;

export const ModalContainer = styled(Modal)``;
