import React from 'react';
import { Text } from 'react-native';

import {
  Container, Logo, Title, Description, SocialContainer, SocialButton,
} from './styles';

import logo from '../../../assets/logo.png';

export default function SignIn() {
  return (
    <Container>
      <Logo source={logo} resizeMode="contain" />
      <Title>Inicie sua Sessão</Title>
      <Description>escolha a sua rede social favorita</Description>

      <SocialContainer>
        <SocialButton>
          <Text style={{ color: '#fff', textAlign: 'center', fontSize: 18 }}>
            Fazer Login
          </Text>
        </SocialButton>
      </SocialContainer>
    </Container>
  );
}
