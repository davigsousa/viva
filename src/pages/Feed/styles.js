import styled from 'styled-components/native';

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
