import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Button = styled(RectButton)`
  padding: 10px 0 10px 0;
  width: 100%;
  flex-direction: row;
  background-color: ${(props) => props.theme.color};
`;

export const PriceLabel = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Price = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: white;
`;

export const Divider = styled.View`
  width: 3px;
  background-color: white;
  margin: 0 20px 0 20px;
`;

export const BuyLabel = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Buy = styled.Text`
  font-size: 25px;
  font-weight: bold;
  margin-right: 8px;
  color: white;
`;

export const BuyArrow = styled.Image`
  width: 20px;
  height: 20px;
`;
