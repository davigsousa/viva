import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';


export const Container = styled.ScrollView``;

export const AddCategoryContainer = styled.View`
  width: 100%;
  margin-top: 10px;
  height: 70px;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const AddCategoryButton = styled(RectButton)`
  flex: 1;
  background-color: #993366;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 20px 0 20px;
  border-radius: 20px;
`;

export const Text = styled.Text`
  color: white;
  font-weight: bold;
  margin-right: 10px;
`;

export const PickerContainer = styled.View`
  width: 100%;
  height: 50px;
  padding-right: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-top-width: 1px;
  border-top-color: #ddd;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
`;

export const PickerLabel = styled.Text`
  flex: 1;
  text-align: center;
`;

export const CategoryPicker = styled.Picker`
  width: 60%;
`;

export const AddPostWrapper = styled.View`
  width: 100%;
  height: 90px;
  padding: 30px 20px 10px 20px;
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
