import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';

import SellerHelper from '../../components/SellerHelper';
import IconButton from '../../components/IconButton';
import ProfileButton from '../../components/ProfileButton';

import logo from '../../../assets/logo.png';
import editarC from '../../../assets/iconesC/editar.png';
import editarV from '../../../assets/iconesV/editar.png';
import favoritas from '../../../assets/iconesC/favoritas.png';
import posts from '../../../assets/iconesV/posts.png';
import configuracoesC from '../../../assets/iconesC/configuracoes.png';
import configuracoesV from '../../../assets/iconesV/configuracoes.png';
import ajudaC from '../../../assets/iconesC/ajuda.png';
import ajudaV from '../../../assets/iconesV/ajuda.png';
import sairC from '../../../assets/iconesC/sair.png';
import sairV from '../../../assets/iconesV/sair.png';
import seta from '../../../assets/seta.png';

import {
  Container, ProfileContainer, Avatar, Username, Description, ChangeButton,
  ButtonTitle, FooterContainer, FooterLabel, FooterImage, Version,
} from './styles';

import { getUser, getSellerInfo } from '../../services/auth';

const AVATAR = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';

function Profile({ isSeller, dispatch, navigation }) {
  const [sellerHelper, setSellerHelper] = useState(false);
  const [user, setUser] = useState({
    name: '',
    url_image: AVATAR,
    description: '',
  });

  useEffect(() => {
    (async () => {
      setUser(await getUser());
    })();
  }, []);

  const handleChangeProfile = async () => {
    if (await getSellerInfo()) {
      dispatch({
        type: 'TOGGLE USER',
        isSeller: true,
      });
    } else {
      setSellerHelper(!sellerHelper);
    }
  };

  const onConfirmSeller = () => {
    setSellerHelper(!sellerHelper);
    navigation.navigate('EditStore');
  };

  return (
    <ThemeProvider theme={{ color: (isSeller ? '#993366' : '#ff6600') }}>
      <ScrollView>

        <Container>
          <ProfileContainer>
            <Avatar source={{ uri: user.url_image }} resizeMode="cover" />
            <Username>{user.name}</Username>
            <Description>{isSeller ? user.description : ''}</Description>
            <ChangeButton onPress={handleChangeProfile}>
              <ButtonTitle>
                Mudar para
                {' '}
                {isSeller ? 'Cliente' : 'Vendedor'}
              </ButtonTitle>
              <IconButton image={seta} />
            </ChangeButton>
          </ProfileContainer>


          <ProfileButton
            icon={isSeller ? editarV : editarC}
            label="Editar Perfil"
          />
          {
            isSeller
              ? (
                <ProfileButton
                  icon={posts}
                  label="Meu Catálogo"
                  onPress={() => navigation.navigate('Catalog')}
                />
              )
              : (
                <ProfileButton
                  icon={favoritas}
                  label="Lojas Favoritas"
                />
              )
          }
          <ProfileButton
            icon={isSeller ? configuracoesV : configuracoesC}
            label="Configurações"
          />
          <ProfileButton
            icon={isSeller ? ajudaV : ajudaC}
            label="Ajuda"
          />
          <ProfileButton
            icon={isSeller ? sairV : sairC}
            label="Sair"
          />

          <FooterContainer>
            <FooterLabel>From</FooterLabel>
            <FooterImage source={logo} resizeMode="stretch" />
            <Version>Versão 0.1</Version>
          </FooterContainer>
        </Container>

        <SellerHelper
          isVisible={sellerHelper}
          onConfirm={onConfirmSeller}
          onClose={() => setSellerHelper(!sellerHelper)}
        />
      </ScrollView>
    </ThemeProvider>
  );
}

Profile.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isSeller: PropTypes.bool.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default connect(({ isSeller }, ownProps) => ({ isSeller, ...ownProps }))(Profile);
