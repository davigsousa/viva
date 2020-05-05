import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const InputWrapper = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
`;

export const Title = styled.Text`
  color: #993366;
  font-size: 30px;
  font-weight: bold;
`;

export const InputContainer = styled.View`
  height: 50px;
  flex-direction: row;
  align-items: center;
  border: solid 2px ${(props) => props.theme.color};
  border-radius: 25px;
  padding: 0 20px 0 10px;
`;

export const Input = styled.TextInput`
  color: ${(props) => props.theme.color};
  flex: 1;
  height: 100%;
  font-size: 20px;
  padding: 0 10px 0 10px;
`;
