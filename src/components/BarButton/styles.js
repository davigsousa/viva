import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ focused }) => (focused ? '#ddd' : 'white')};
`;

export const Image = styled.Image`
  width: 30px;
  height: 30px;
`;
