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

export const HelpTitle = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #993366;
  text-align: center;
`;

export const HelpDescription = styled.Text`
  font-size: 20px;
  text-align: center;
`;

export const ButtonsContainer = styled.View`
  height: 160px;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const ButtonSeller = styled.TouchableHighlight`
  width: 80%;
  background-color: #993366;
  padding: 20px;
  border-radius: 20px;
`;

export const ButtonConsumer = styled.TouchableHighlight`
  width: 80%;
  background-color: #ff6600;
  padding: 20px;
  border-radius: 20px;
`;

export const Text = styled.Text`
  color: white;
  text-align: center;
  font-size: 18px;
`;

export const SellerModal = styled(Modal)``;
