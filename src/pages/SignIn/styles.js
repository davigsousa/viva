import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 200px;
`;

export const Title = styled.Text`
  color: #ff6600;
  font-weight: bold;
  font-size: 32px;
`;

export const Description = styled.Text`
  color: #993366;
  text-align: center;
  width: 300px;
  font-size: 18px;
`;

export const SocialContainer = styled.View`
  margin-top: 30px;
  width: 100%;
  padding: 20px;
  align-items: center;
  justify-content: center;
`;

export const SocialButton = styled(RectButton)`
  width: 80%;
  padding: 16px;
  background-color: #993366;
  color: white;
  border-radius: 10px;
`;
