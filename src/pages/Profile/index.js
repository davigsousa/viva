import React from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';

import IconButton from '../../components/IconButton';

import logo from '../../../assets/logo.png';
import contaV from '../../../assets/iconesV/conta.png';
import editarV from '../../../assets/iconesV/editar.png';
import posts from '../../../assets/iconesV/posts.png';
import configuracoesV from '../../../assets/iconesV/configuracoes.png';
import ajudaV from '../../../assets/iconesV/ajuda.png';
import sairV from '../../../assets/iconesV/sair.png';


import seta from '../../../assets/seta.png';

import {
  Container, ProfileContainer, Avatar, Username, Description, ChangeButton,
  ButtonTitle, ButtonContainer, Button, ButtonLabel, FooterContainer,
  FooterLabel, FooterImage, Version, ButtonImage,
} from './styles';

const ProfileButton = ({ icon, label }) => (
  <ButtonContainer>
    <Button>
      <ButtonImage source={icon} resizeMode="stretch" />
      <ButtonLabel>{label}</ButtonLabel>
    </Button>
  </ButtonContainer>
);

function Profile({ isSeller }) {
  return (
    <ThemeProvider theme={{ color: (isSeller ? '#993366' : '#ff6600') }}>
      <ScrollView>

        <Container>
          <ProfileContainer>
            <Avatar source={contaV} resizeMode="stretch" />
            <Username>usuario.viva</Username>
            <Description>Uma loja especial para você!</Description>
            <ChangeButton>
              <ButtonTitle>Mudar para Cliente</ButtonTitle>
              <IconButton image={seta} onPress={() => console.log('seta')} />
            </ChangeButton>
          </ProfileContainer>


          <ProfileButton icon={editarV} label="Editar Perfil" />
          <ProfileButton icon={posts} label="Meus Posts" />
          <ProfileButton icon={configuracoesV} label="Configurações" />
          <ProfileButton icon={ajudaV} label="Ajuda" />
          <ProfileButton icon={sairV} label="Sair" />

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
  isSeller: PropTypes.bool.isRequired,
};

export default connect(({ isSeller }, ownProps) => ({ isSeller, ...ownProps }))(Profile);
