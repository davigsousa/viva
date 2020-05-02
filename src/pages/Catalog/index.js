import React, { useState, useEffect } from 'react';
import { Picker } from 'react-native';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';

import postsApparel from '../../services/postsApparel';
import feedV from '../../services/feedV';

import PostItem from '../../components/PostItem';

import {
  Container, ProfileContainer, Avatar, DetailsContainer, Name, Username, Description,
  EditContainer, EditButton, EditLabel, CategoryPicker, Icon, PickerContainer, PickerLabel,
} from './styles';

import editar from '../../../assets/iconesV/editar.png';

function Catalog({ isSeller }) {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({ username: '', image: 'https://fabianoalves.adv.br/wp-content/uploads/2016/11/avatar-default-2.png', description: '' });
  const [options, setOptions] = useState([
    'Todos os Produtos', 'Sapatos', 'Camisas', 'Calças', 'Relógios',
  ]);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    setUser(isSeller
      ? {
        name: 'Lojas Maia',
        username: 'lojasmaia',
        description: 'Uma loja especial para você!',
        image: 'https://img.elo7.com.br/product/main/2261CBD/logo-semi-pronta-logotipo-logo-loja.jpg',
      }
      : {
        name: 'Apparel Vintage',
        username: 'apparel.vintage',
        description: 'A loja que vai mudar os seus conceitos.',
        image: 'https://image.freepik.com/vetores-gratis/logo-para-moda-e-loja-de-roupas_116238-18.jpg',
      });
    setPosts(isSeller ? feedV : postsApparel);
  }, [isSeller]);

  return (
    <ThemeProvider theme={{ color: (isSeller ? '#993366' : '#ff6600') }}>
      <Container>
        <ProfileContainer>
          <Avatar source={{ uri: user.image }} resizeMode="cover" />
          <DetailsContainer>
            <Name>{user.name}</Name>
            <Username>{user.username}</Username>
            <Description>{user.description}</Description>
          </DetailsContainer>
        </ProfileContainer>

        {
          isSeller
            ? (
              <EditContainer>
                <EditButton>
                  <EditLabel>Editar o seu Catálogo</EditLabel>
                  <Icon source={editar} />
                </EditButton>
              </EditContainer>
            )
            : undefined
        }

        <PickerContainer>
          <PickerLabel>Escolha a categoria:</PickerLabel>
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

        {
          posts.map((item) => (
            <PostItem
              key={item.id}
              isSeller={isSeller}
              showHeader={false}
              shouldWait={false}
              id={item.id}
              name={item.author.name}
              aspectRatio={item.aspectRatio}
              image={item.image}
              price={item.price}
              description={item.description}
            />
          ))
        }

      </Container>
    </ThemeProvider>
  );
}

Catalog.propTypes = {
  isSeller: PropTypes.bool.isRequired,
};

export default connect(({ isSeller }, ownProps) => ({ isSeller, ...ownProps }))(Catalog);
