import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { NavigationActions } from 'react-navigation';

import OrderItem from '../../components/OrderItem';
import StoreItem from '../../components/StoreItem';
import IconButton from '../../components/IconButton';

import api from '../../services/api';

import {
  Container, InputContainer, Input, InputWrapper, Title,
} from './styles';

import lupaC from '../../../assets/iconesC/lupa.png';

function Explore({ isSeller, navigation }) {
  const [orders, setOrders] = useState([]);
  const [stores, setStores] = useState([]);

  async function loadOrders() {
    const res = await api.get('/wishs');
    const orders = res.data;
    setOrders(orders);
  }

  async function loadStores() {
    const res = await api.get('/explorer');
    const stores = res.data;
    setStores(stores);
  }

  useEffect(() => {
    // loadPage();
    (async () => {
      if (isSeller) {
        setStores([]);
        loadOrders();
      } else {
        setOrders([]);
        loadStores();
      }
    })();
  }, [isSeller]);
  console.log(orders);
  return (
    <ThemeProvider theme={{ color: (isSeller ? '#993366' : '#ff6600') }}>
      <Container>
        <InputWrapper>
          {
            isSeller
              ? (
                <Title>Últimos Pedidos</Title>
              )
              : (
                <InputContainer>
                  <Input
                    placeholder="Pesquisar..."
                    placeholderTextColor="#ff6600"
                  />
                  <IconButton image={lupaC} onPress={() => console.log('pesquisar')} />
                </InputContainer>
              )
          }

        </InputWrapper>

        <FlatList
          data={isSeller ? orders : stores}
          onEndReachedThreshold={0.1}
          keyExtractor={() => String(Math.random())}
          renderItem={({ item }) => (
            isSeller
              ? (
                <OrderItem name={item.product.name} owner={item.user.name} date={item.date} />
              )
              : (
                <StoreItem
                  avatar={item.url_image}
                  name={item.name}
                  description={item.description}
                  address={item.address}
                  onPress={() => {
                    const navigateAction = NavigationActions.navigate({
                      routeName: 'Catalog',
                      params: { store: item },
                      action: NavigationActions.navigate({ routeName: 'Catalog' }),
                    });

                    navigation.dispatch(navigateAction);
                  }}
                />
              )
          )}
        />
      </Container>
    </ThemeProvider>
  );
}

Explore.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  isSeller: PropTypes.bool.isRequired,
};

export default connect(({ isSeller }, ownProps) => ({ isSeller, ...ownProps }))(Explore);
