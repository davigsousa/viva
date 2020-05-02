import styled from 'styled-components/native';


export const OrderWrapper = styled.View`
width: 100%;
border-bottom-width: 1px;
border-bottom-color: #ddd;
`;

export const Order = styled.View`
flex: 1;
height: 100px;
flex-direction: row;
align-items: center;

padding: 10px 20px 10px 30px;
`;

export const OrderDetails = styled.View`
flex: 1;
justify-content: center;
`;

export const Name = styled.Text`
color: black;
font-size: 22px;
font-weight: bold;
margin-bottom: 5px;
`;

export const Owner = styled.Text`
  font-size: 14px;
`;

export const DateLabel = styled.Text`
  font-size: 20px;
  color: #777;
`;
