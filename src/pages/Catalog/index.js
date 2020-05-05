import React, { useState, useEffect } from 'react';
import { Picker, Linking } from 'react-native';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';

import api from '../../services/api';

import PostItem from '../../components/PostItem';

import {
  Container, ProfileContainer, Avatar, DetailsContainer, Name, Username, Description,
  EditContainer, EditButton, EditLabel, CategoryPicker, Icon, PickerContainer, PickerLabel,
  LinkContainer, LinkButton, Link, FavContainer, FavButton, Fav,
} from './styles';

import editar from '../../../assets/editarCatalogo.png';

function Catalog({ isSeller, navigation }) {
  const [posts, setPosts] = useState([]);
  const [store, setStore] = useState(navigation.state.params.store);
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  const fetchNewPosts = async (category) => {
    category = !category ? 'all' : category;
    const { data } = await api.get(`/products/${store.username}/${category}`);
    const { products } = data;
    setPosts(products);
  };

  useEffect(() => {
    (async () => {
      const { data: storeData } = await api.get(`/products/${store.username}/all`);
      const { store: newStore } = storeData;
      setStore(newStore);
    })();

    fetchNewPosts();
    (async () => {
      const { data } = await api.get(`/categories/${store.username}`);
      setOptions(data);
    })();
  }, []);

  /* useEffect(() => {
    fetchNewPosts();
  }, [selectedOption]); */

  return (
    <ThemeProvider theme={{ color: (isSeller ? '#993366' : '#ff6600') }}>
      <Container>
        <ProfileContainer>
          <Avatar source={{ uri: store.url_image }} resizeMode="cover" />
          <DetailsContainer>
            <Name>{store.name}</Name>
            <Username>{store.username}</Username>
            <Description>{store.description}</Description>
          </DetailsContainer>
        </ProfileContainer>

        {
          !isSeller && (
            <FavContainer>
              <FavButton onPress={async () => {
                await api.post(`/store-like/${store.username}`);
              }}
              >
                <Fav>Favorite essa Loja</Fav>
              </FavButton>
            </FavContainer>

          )
        }

        <LinkContainer>
          <LinkButton onPress={async () => {
            await Linking.openURL(`https://viva-web.netlify.app/${store.username}`);
          }}
          >
            <Link>Acesse o website</Link>
          </LinkButton>
        </LinkContainer>

        {
          isSeller
            ? (
              <EditContainer>
                <EditButton onPress={() => navigation.navigate('EditCatalog')}>
                  <EditLabel>Editar o seu Catálogo</EditLabel>
                  <Icon source={editar} />
                </EditButton>
              </EditContainer>
            )
            : undefined
        }

        <PickerContainer>
          <PickerLabel>Categoria:</PickerLabel>
          <CategoryPicker
            selectedValue={selectedOption}
            onValueChange={(itemValue) => {
              fetchNewPosts(itemValue);
              setSelectedOption(itemValue);
            }}
          >
            <Picker.Item label="Todos os Produtos" value="" />
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
              key={String(Math.random())}
              isSeller={isSeller}
              showHeader={false}
              shouldWait={false}
              id={item.id}
              name={item.name}
              image={item.url_image}
              price={String(item.price).replace('.', ',')}
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
