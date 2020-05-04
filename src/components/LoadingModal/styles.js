import styled from 'styled-components/native';
import Modal from 'react-native-modal';


export const Container = styled.View`
  background-color: white;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  height: 200px;
`;

export const Label = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #993366;
  text-align: center;
`;

export const ModalContainer = styled(Modal)``;

export const Spinner = styled.ActivityIndicator.attrs({
  size: 'large',
  color: '#993366',
})`
  margin: 30px 0;
`;
