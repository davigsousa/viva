import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { ThemeProvider } from 'styled-components';

import OrderItem from '../../components/OrderItem';
import StoreItem from '../../components/StoreItem';
import IconButton from '../../components/IconButton';

import ordersStatic from '../../services/ordersStatic';
import exploreStatic from '../../services/exploreStatic';

import {
  Container, InputContainer, Input, Loading, InputWrapper, Title,
} from './styles';

import lupaC from '../../../assets/iconesC/lupa.png';

function Explore({ isSeller, navigation }) {
  const [orders, setOrders] = useState([]);
  const [stores, setStores] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  /* async function loadPage(pageNumber = page, shouldRefresh = false) {
    if (total && pageNumber > total) return;

    setLoading(true);

    const res = await fetch(
      `http://localhost:3000/feed?_expand=author&_limit=5&_page=${pageNumber}`,
    );

    const data = await res.json();
    const totalItems = res.headers.get('X-Total-Count');

    setTotal(Math.ceil(totalItems / 5));
    setFeed(shouldRefresh ? data : [...feed, ...data]);
    setPage(page + 1);
    setLoading(false);
  } */

  useEffect(() => {
    // loadPage();
    if (isSeller) {
      setStores([]);
      setOrders(ordersStatic);
    } else {
      setOrders([]);
      setStores(exploreStatic);
    }

    return () => {
      setStores([]);
      setPage(1);
      setTotal(0);
    };
  }, [isSeller]);

  async function refreshList() {
    setRefreshing(true);

    // await loadPage(1, true);

    setRefreshing(false);
  }

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
          onEndReached={() => {
            // loadPage()
            console.log('chegou ao fim');
          }}
          onEndReachedThreshold={0.1}
          keyExtractor={(store) => String(store.id)}
          onRefresh={refreshList}
          refreshing={refreshing}
          ListFooterComponent={loading && <Loading />}
          renderItem={({ item }) => (
            isSeller
              ? (
                <OrderItem name={item.name} owner={item.owner} date={item.date} />
              )
              : (
                <StoreItem
                  avatar={item.avatar}
                  name={item.name}
                  description={item.description}
                  address={item.address}
                  onPress={() => navigation.navigate('Catalog')}
                />
              ))}
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
