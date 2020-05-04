import React, { useState } from 'react';
import { Platform } from 'react-native';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ImagePicker from 'react-native-image-picker';

import LoadingModal from '../../components/LoadingModal';
import AlertModal from '../../components/AlertModal';

import {
  Container, Title, Input, Button, ButtonText, Icon, ImagePreview, PhoneInput,
} from './styles';

import seta from '../../../assets/seta.png';
import camera from '../../../assets/camera.png';

import api from '../../services/api';
import { setStore, setUser, getUser } from '../../services/auth';
import imageConfig from '../../config/imagepicker';


const AVATAR = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';

function EditStore({ dispatch, navigation }) {
  const [preview, setPreview] = useState('');
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);

  const [image, setImage] = useState({});
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [maskWhatsapp, setMaskWhatsapp] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');

  const handleImage = () => {
    ImagePicker.showImagePicker(imageConfig, (response) => {
      if (!response.error && !response.didCancel) {
        setImage(response);
        setPreview(response.uri);
      }
    });
  };

  const handleNewStore = async () => {
    if (!username || !name || !address || !description || !whatsapp || !email || !image) {
      setAlert(!alert);
    } else {
      const formData = new FormData();

      const photo = {
        name: image.fileName,
        type: image.type,
        uri: Platform.OS === 'android' ? image.uri : image.uri.replace('file://', ''),
      };

      formData.append('file', photo);
      formData.append('name', name);
      formData.append('username', username);
      formData.append('address', address);
      formData.append('description', description);
      formData.append('whatsapp', whatsapp);
      formData.append('email', email);

      const config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
      };

      setLoading(true);
      try {
        const { email: oldUserEmail } = await getUser();
        await api.put('/user', { email: oldUserEmail, shop_pass: true });

        const { data } = await api.post('/store', formData, config);
        await setStore(data);
        const { data: user } = await api.get('/user');
        await setUser(user);

        dispatch({
          type: 'TOGGLE_USER_TYPE',
          isSeller: user.shop_pass,
        });

        setLoading(false);
        navigation.navigate('EditCatalog');
      } catch (err) {
        setLoading(false);
      }

      setUsername(''); setName(''); setAddress(''); setDescription('');
      setWhatsapp(''); setEmail(''); setPreview(''); setMaskWhatsapp('');
    }
  };

  return (
    <KeyboardAwareScrollView>
      <Container>
        <Title>Informações da sua Loja</Title>
        <ImagePreview source={{ uri: (preview || AVATAR) }} resizeMode="cover" />
        <Button onPress={handleImage}>
          <Icon source={camera} resizeMode="cover" />
          <ButtonText>Escolha a foto para o perfil</ButtonText>
        </Button>
        <Input
          placeholder="Nome da Loja"
          placeholderTextColor="#aa6699"
          defaultValue={name}
          autoCompleteType="name"
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="Usuário da Loja minúsculo (ex: sua.loja)"
          placeholderTextColor="#aa6699"
          defaultValue={username}
          maxLength={20}
          autoCapitalize="none"
          onChangeText={(text) => setUsername(text.toLowerCase())}
        />
        <Input
          placeholder="Descrição curta"
          placeholderTextColor="#aa6699"
          defaultValue={description}
          maxLength={200}
          onChangeText={(text) => setDescription(text)}
        />
        <Input
          placeholder="Endereço (ex: Rua, Cidade, etc...)"
          placeholderTextColor="#aa6699"
          defaultValue={address}
          onChangeText={(text) => setAddress(text)}
        />
        <PhoneInput
          placeholder="Whatsapp para contato do cliente"
          keyboardType="phone-pad"
          placeholderTextColor="#aa6699"
          autoCompleteType="cc-number"
          mask="+55 ([00]) [00000]-[0000]"
          defaultValue={maskWhatsapp}
          onChangeText={(mask, final) => {
            setMaskWhatsapp(mask);
            setWhatsapp(final);
          }}
        />
        <Input
          placeholder="Seu e-mail para contato"
          autoCapitalize="none"
          placeholderTextColor="#aa6699"
          autoCompleteType="email"
          defaultValue={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Button onPress={handleNewStore}>
          <ButtonText>Criar sua Loja</ButtonText>
          <Icon source={seta} resizeMode="contain" />
        </Button>
      </Container>

      <AlertModal
        isVisible={alert}
        onClose={() => setAlert(!alert)}
        title="Quase lá..."
        message="Você não preencheu todas as informações."
      />

      <LoadingModal isVisible={loading} />
    </KeyboardAwareScrollView>
  );
}

export default connect(({ isSeller }, ownProps) => ({ isSeller, ...ownProps }))(EditStore);
