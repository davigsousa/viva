import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';

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


function Profile({ isSeller, dispatch, navigation }) {
  const [user, setUser] = useState({ username: '', image: 'https://fabianoalves.adv.br/wp-content/uploads/2016/11/avatar-default-2.png', description: '' });

  useEffect(() => {
    setUser(isSeller
      ? {
        username: 'lojasmaia',
        description: 'Uma loja especial para você!',
        image: 'https://img.elo7.com.br/product/main/2261CBD/logo-semi-pronta-logotipo-logo-loja.jpg',
      }
      : {
        username: 'manoela.maia',
        description: 'Eu sou uma pessoa fantástica.',
        image: 'https://cdn.pixabay.com/photo/2015/09/02/13/24/girl-919048_960_720.jpg',
      });
  }, [isSeller]);

  return (
    <ThemeProvider theme={{ color: (isSeller ? '#993366' : '#ff6600') }}>
      <ScrollView>

        <Container>
          <ProfileContainer>
            <Avatar source={{ uri: user.image }} resizeMode="cover" />
            <Username>{user.username}</Username>
            <Description>{user.description}</Description>
            <ChangeButton onPress={async () => {
              dispatch({
                type: 'TOGGLE_USER_TYPE',
                isSeller: !isSeller,
              });
            }}
            >
              <ButtonTitle>
                Mudar para
                {' '}
                {isSeller ? 'Cliente' : 'Vendedor'}
              </ButtonTitle>
              <IconButton image={seta} onPress={() => console.log('seta')} />
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
