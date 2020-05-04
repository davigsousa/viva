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

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #993366;
  text-align: center;
`;

export const Message = styled.Text`
  font-size: 20px;
  text-align: center;
`;

export const Button = styled.TouchableHighlight`
  width: 60%;
  background-color: #ff6600;
  padding: 20px;
  border-radius: 20px;
`;

export const Text = styled.Text`
  color: white;
  text-align: center;
  font-size: 18px;
`;

export const ModalContainer = styled(Modal)``;
