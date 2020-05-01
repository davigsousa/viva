import React, { useState } from 'react';

import SocialButton from '../../components/SocialButton';
import {
  Container, Logo, Title, Description, SocialContainer, Footer,
  Divider, Barrier, LoginContainer, TitleContainer,
} from './styles';

import logo from '../../../assets/logo.png';

export default function SignIn({ navigation }) {
  const [loginProgress, setLoginProgress] = useState(false);

  return (
    <Container>
      <TitleContainer>
        <Logo source={logo} resizeMode="contain" />
        <Title>Vitrine do Varejo</Title>
      </TitleContainer>

      <LoginContainer>

        <SocialContainer>
          <Divider>
            <Barrier />
            <Description>Iniciar Sessão</Description>
            <Barrier />
          </Divider>
          <SocialButton
            enabled={!loginProgress}
            title="Fazer login com o Facebook"
            icon="facebook"
            color="#0164E0"
            onPress={() => navigation.navigate('SignedIn')}
          />
          <SocialButton
            enabled={!loginProgress}
            title="Fazer login com o Google"
            icon="google"
            color="#D44C3D"
            onPress={() => navigation.navigate('SignedIn')}
          />
        </SocialContainer>

        <Footer>Versão 0.1</Footer>
      </LoginContainer>
    </Container>
  );
}
