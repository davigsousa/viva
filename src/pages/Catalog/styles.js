import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';


export const Container = styled.ScrollView``;

export const ProfileContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const DetailsContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 10px 0 10px;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;

export const Username = styled.Text`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const Description = styled.Text`
  text-align: center;
`;

export const EditContainer = styled.View`
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const EditButton = styled(RectButton)`
  flex: 1;
  background-color: #993366;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 20px 0 20px;
  border-radius: 20px;
`;

export const EditLabel = styled.Text`
  color: white;
  font-weight: bold;
  margin-right: 10px;
`;

export const Icon = styled.Image`
  width: 20px;
  height: 20px;
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

export const LinkContainer = styled.View`
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: center;
  background-color: #ddd;
`;

export const LinkButton = styled(RectButton)`
  width: 100%;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 0 20px 0 20px;
  border-radius: 20px;
`;

export const Link = styled.Text`
  color: #993366;
  text-align: center;
  font-size: 20px;
`;
