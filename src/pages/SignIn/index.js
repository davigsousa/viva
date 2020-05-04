import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { GoogleSignin } from '@react-native-community/google-signin';

import api from '../../services/api';
import { setToken, login, logout } from '../../services/auth';

import SocialButton from '../../components/SocialButton';
import {
  Container, Logo, Title, Description, SocialContainer, Footer, Divider,
  Barrier, LoginContainer, TitleContainer, LoadingModal, Loading,
} from './styles';

import logo from '../../../assets/logo.png';


GoogleSignin.configure({
  webClientId: '478431704395-270093ooa7nv5mfmkuh0bs537lv2k04i.apps.googleusercontent.com',
});

function SignIn({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [loginProgress, setLoginProgress] = useState(false);

  const makeServerLogin = async (social, token) => {
    await logout();
    await setToken(token);
    try {
      const res = await api.post(`/user?by=${social}`);
      const { token: userToken, user } = res.data;
      await login(userToken, user);

      setLoading(false);
      navigation.navigate('SignedIn');
    } catch (err) {
      setLoading(false);
    }
  };

  const handleLogin = (by) => {
    setLoginProgress(true);

    if (by === 'facebook') {
      LoginManager.logInWithPermissions(['public_profile', 'email'])
        .then((res) => {
          if (res.isCancelled) setLoginProgress(false);
          else {
            setLoginProgress(false);
            setLoading(true);

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
          await GoogleSignin.hasPlayServices();
          await GoogleSignin.signIn();
          setLoginProgress(false);
          setLoading(true);
          const tokens = await GoogleSignin.getTokens();
          await makeServerLogin('google', tokens.accessToken);
        } catch (error) {
          setLoginProgress(false);
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

      <LoadingModal isVisible={loading}>
        <Loading />
      </LoadingModal>
    </Container>
  );
}

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default SignIn;
