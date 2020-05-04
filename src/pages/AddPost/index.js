import React, { useState, useEffect } from 'react';
import { ScrollView, Platform, Picker } from 'react-native';
import ImagePicker from 'react-native-image-picker';

import {
  Container, Title, ButtonsContainer, Input, ImageButton, Icon, ButtonText,
  Button, Text, TextContainer, ImagePreview, InputsContainer, PickerContainer,
  CategoryPicker, PickerLabel,
} from './styles';

import api from '../../services/api';
import { getUser } from '../../services/auth';
import LoadingModal from '../../components/LoadingModal';
import camera from '../../../assets/camera.png';
import imageConfig from '../../config/imagepicker';


function AddPost({ navigation, dispatch }) {
  const [previous, setPrevious] = useState('');
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(undefined);
  const [image, setImage] = useState({});
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    setPrevious(navigation.state.params.previous_screen);
  });

  const handleImage = () => {
    ImagePicker.showImagePicker(imageConfig, (response) => {
      if (!response.error && !response.didCancel) {
        setImage(response);
        setPreview(response.uri);
      }
    });
  };

  const handleNewProduct = async () => {
    if (!preview || !price || !description || !selectedOption) { return; }

    const formData = new FormData();

    const photo = {
      name: image.fileName,
      type: image.type,
      uri: Platform.OS === 'android' ? image.uri : image.uri.replace('file://', ''),
    };

    formData.append('file', photo);
    formData.append('name', 'default');
    formData.append('price', price);
    formData.append('description', description);
    formData.append('category', selectedOption);

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };

    setLoading(true);
    try {
      const { email: oldUserEmail } = await getUser();
      await api.put('/user', { email: oldUserEmail, shop_pass: true });

      setLoading(false);
      navigation.navigate(previous);
    } catch (err) {
      setLoading(false);
    }

    setDescription(''); setPrice(''); setPreview(''); setImage({});
  };

  return (
    <ScrollView style={{ backgroundColor: '#ffffff' }}>
      <Container>
        <TextContainer>
          <Title>Adicionar Produto</Title>
        </TextContainer>

        <InputsContainer>
          <Input
            placeholder="Preço do produto"
            keyboardType="number-pad"
            defaultValue={price}
            onChangeText={(text) => setPrice(text.replace('.', ','))}
          />
          <Input
            placeholder="Descrição do Produto"
            maxLength={200}
            defaultValue={description}
            onChangeText={(text) => setDescription(text)}
          />
        </InputsContainer>

        {
          preview && (
            <ImagePreview
              source={{ uri: preview }}
              resizeMode="contain"
              aspectRatio={1}
            />
          )
        }
        <ImageButton onPress={handleImage}>
          <Icon source={camera} resizeMode="cover" />
          <ButtonText>Escolha a foto do produto</ButtonText>
        </ImageButton>

        <PickerContainer>
          <PickerLabel>Selecione categoria:</PickerLabel>
          <CategoryPicker
            selectedValue={selectedOption}
            onValueChange={(itemValue) => setSelectedOption(itemValue)}
          >
            {
              options.map((item) => (
                <Picker.Item key={Math.random()} label={item} value={item} />
              ))
            }
          </CategoryPicker>
        </PickerContainer>

        <ButtonsContainer>
          <Button
            onPress={handleNewProduct}
            backcolor="#993366"
            style={{ marginTop: 10 }}
          >
            <Text>Adicionar</Text>

          </Button>
          <Button
            onPress={() => navigation.navigate('Feed')}
            backcolor="#aa5599"
            style={{ marginTop: 5 }}
          >
            <Text>Cancelar</Text>

          </Button>
        </ButtonsContainer>

        <LoadingModal isVisible={loading} />
      </Container>
    </ScrollView>
  );
}

export default AddPost;
