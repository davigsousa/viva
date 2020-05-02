import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const AddPostWrapper = styled.View`
  width: 100%;
  height: 70px;
  padding: 10px 20px 10px 20px;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
`;

export const AddPostContainer = styled.View`
  flex: 1;
  border: solid 1px #993366;
  border-radius: 20px;
`;

export const AddPostButton = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  flex: 1;
  padding: 0 20px 0 20px;
  border-radius: 20px;
`;

export const AddPost = styled.Text`
  flex: 1;
  font-size: 20px;
  color: #993366;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'small',
  collor: '#999',
})`
  margin: 30px 0;
`;
