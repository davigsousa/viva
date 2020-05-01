import React, { useState } from 'react';

import SocialButton from '../../components/SocialButton';
import {
  Container, Logo, Title, Description, SocialContainer, Footer,
  Divider, Barrier, LoginContainer, TitleContainer,
} from './styles';

import logo from '../../../assets/logo.png';

export default function SignIn() {
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
            onPress={() => console.log('facebook')}
          />
          <SocialButton
            enabled={!loginProgress}
            title="Fazer login com o Google"
            icon="google"
            color="#D44C3D"
            onPress={() => console.log('google')}
          />
        </SocialContainer>

        <Footer>Versão 0.1</Footer>
      </LoginContainer>
    </Container>
  );
}


/* import React, { useState } from 'react';

import SocialButton from '../../components/SocialButton';
import {
  Container, Logo, Title, Description, SocialContainer,
} from './styles';

import logo from '../../../assets/logo.png';

export default function SignIn() {
  const [loginProgress, setLoginProgress] = useState(false);

  return (
    <Container>
      <Logo source={logo} resizeMode="contain" />
      <Title>Inicie sua Sessão</Title>
      <Description>escolha a sua rede social favorita</Description>

      <SocialContainer>
        <SocialButton
          enabled={!loginProgress}
          title="Fazer login com o Facebook"
          icon="facebook"
          color="#0164E0"
          onPress={() => console.log('facebook')}
        />
        <SocialButton
          enabled={!loginProgress}
          title="Fazer login com o Google"
          icon="google"
          color="#D44C3D"
          onPress={() => console.log('google')}
        />
      </SocialContainer>
    </Container>
  );
} */
