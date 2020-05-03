import React, { useState } from 'react';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';

import api from '../../services/api';
import { setToken, login, logout } from '../../services/auth';

import SocialButton from '../../components/SocialButton';
import {
  Container, Logo, Title, Description, SocialContainer, Footer,
  Divider, Barrier, LoginContainer, TitleContainer,
} from './styles';

import logo from '../../../assets/logo.png';


GoogleSignin.configure({
  webClientId: '478431704395-270093ooa7nv5mfmkuh0bs537lv2k04i.apps.googleusercontent.com',
});

export default function SignIn({ navigation }) {
  const [loginProgress, setLoginProgress] = useState(false);

  const makeServerLogin = async (social, token) => {
    await logout();
    await setToken(token);
    const res = await api.post(`/user?by=${social}`);
    const { token: userToken, user } = res.data;
    await login(userToken, user);
  };

  const handleLogin = (by) => {
    setLoginProgress(true);

    if (by === 'facebook') {
      LoginManager.logInWithPermissions(['public_profile', 'email'])
        .then((res) => {
          if (res.isCancelled) setLoginProgress(false);
          else {
            setLoginProgress(false);

            AccessToken.getCurrentAccessToken()
              .then((data) => {
                makeServerLogin('facebook', data.accessToken);
              });
          }
        }, () => setLoginProgress(false));
    }

    if (by === 'google') {
      (async () => {
        try {
          const actualTokens = await GoogleSignin.getTokens();
          await GoogleSignin.clearCachedAccessToken(actualTokens.accessToken);
          await GoogleSignin.hasPlayServices();
          await GoogleSignin.signIn();
          const tokens = await GoogleSignin.getTokens();
          await makeServerLogin('google', tokens.accessToken);

          setLoginProgress(false);
        } catch (error) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            setLoginProgress(false);
          } else if (error.code === statusCodes.IN_PROGRESS) {
            setLoginProgress(false);
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            setLoginProgress(false);
            console.log('services');
          } else {
            setLoginProgress(false);
            console.log('outro', error);
          }
        }
      })();
    }
  };

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
            onPress={() => handleLogin('facebook')}
          />
          <SocialButton
            enabled={!loginProgress}
            title="Fazer login com o Google"
            icon="google"
            color="#D44C3D"
            onPress={() => handleLogin('google')}
          />
        </SocialContainer>

        <Footer>Versão 0.1</Footer>
      </LoginContainer>
    </Container>
  );
}
