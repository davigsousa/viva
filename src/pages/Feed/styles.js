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

export const User = styled.View`
  flex-direction: row;
  align-items: center;
  width: 90%;
`;

export const Post = styled.View`
  flex: 1;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
  margin-top: 2px;
`;

export const PostHeader = styled.View`
  width: 100%;
  padding: 15px;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  margin-right: 10px;
`;

export const Name = styled.Text`
  color: #333;
  font-weight: bold;
`;

export const Description = styled.Text`
  padding: 15px;
  line-height: 18px;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'small',
  collor: '#999',
})`
  margin: 30px 0;
`;
