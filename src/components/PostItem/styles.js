import styled from 'styled-components/native';

export const Post = styled.View`
flex: 1;
border-bottom-width: 1px;
border-bottom-color: #ddd;
`;

export const PostHeader = styled.View`
width: 100%;
padding: 15px;
flex-direction: row;
align-items: center;
`;

export const User = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  width: 90%;
`;

export const Avatar = styled.Image`
width: 40px;
height: 40px;
border-radius: 20px;
border-color: #ededed;
border-width: 1px;
margin-right: 10px;
`;

export const Name = styled.Text`
color: #333;
font-weight: bold;
`;

export const Price = styled.View`
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  background-color: #993366;
`;

export const PriceLabel = styled.Text`
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
`;

export const Description = styled.Text`
padding: 15px;
line-height: 18px;
`;
