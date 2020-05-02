import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';


export const Container = styled.View`
  flex: 1;
`;

export const ProfileContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 20px 0 20px 0;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const Username = styled.Text`
  font-size: 25px;
  font-weight: bold;
  margin-top: 10px;
`;

export const Description = styled.Text`
  font-size: 15px;
  margin-bottom: 10px;
`;

export const ChangeButton = styled(RectButton)`
  background-color: ${(props) => props.theme.color};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 260px;
  height: 60px;
  border-radius: 30px;
  margin-top: 10px;
`;

export const ButtonTitle = styled.Text`
  color: white;
  font-size: 20px;
  margin-right: 10px;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  height: 80px;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
`;

export const Button = styled(RectButton)`
  flex: 1;
  align-items: center;
  flex-direction: row;
  padding-left: 40px;
`;

export const ButtonImage = styled.Image`
  width: 46px;
  height: 46px;
  border-radius: 23px;
  margin-right: 40px;
`;

export const ButtonLabel = styled.Text`
  font-size: 20px;
`;

export const FooterContainer = styled.View`
  margin-top: 25px;
  width: 100%;
  height: 80px;
  align-items: center;
  justify-content: center;
`;

export const FooterLabel = styled.Text`
  color: #777;
`;

export const FooterImage = styled.Image`
  width: 50px;
  height: 20px;
`;

export const Version = styled.Text`
  color: #777;
  margin-top: 20px;
  font-size: 15px;
  margin-bottom: 20px;
`;
