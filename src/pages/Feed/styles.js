import styled from 'styled-components/native';

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 0 20px;
`;

export const Logo = styled.Image`
  width: 100px;
  height: 40px;
`;

export const Post = styled.View`
  flex: 1;
  margin-top: 10px;
`;

export const PostHeader = styled.View`
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
