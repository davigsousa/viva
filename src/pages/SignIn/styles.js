import styled from 'styled-components/native';
import Modal from 'react-native-modal';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 0 20px;
`;

export const TitleContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const LoginContainer = styled.View`
  width: 100%;
  height: 50%;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.Image`
  margin: 50px 0 5px 0;
  width: 200px;
  height: 80px;
`;

export const Title = styled.Text`
  color: #ff6600;
  font-weight: bold;
  font-size: 26px;
`;

export const Divider = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

export const Barrier = styled.View`
  margin: 10px;
  width: 80px;
  border: solid 1px #777;
`;

export const Description = styled.Text`
  color: #777;
  text-align: center;
  font-size: 18px;
`;

export const Footer = styled.Text`
  color: #777;
  text-align: center;
  font-size: 18px;
  margin-bottom: 20px;
`;

export const SocialContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;
