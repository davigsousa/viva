import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import IconButton from '../../components/IconButton';

import exploreStatic from '../../services/exploreStatic';

import {
  Container, InputContainer, Input, Loading, InputWrapper, Store,
  StoreImage, StoreDetails, Username, Description, Address, StoreWrapper,
} from './styles';

import lupa from '../../../assets/IconeLupa.png';

export default function Explore() {
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
    setStores(exploreStatic);

    return () => {
      setStores([]);
      setPage(1);
      setTotal(0);
    };
  }, []);

  async function refreshList() {
    setRefreshing(true);

    // await loadPage(1, true);

    setRefreshing(false);
  }

  return (
    <Container>
      <InputWrapper>
        <InputContainer>
          <Input
            placeholder="Pesquisar..."
            placeholderTextColor="#ff6600"
          />
          <IconButton image={lupa} onPress={() => console.log('pesquisar')} />
        </InputContainer>
      </InputWrapper>

      <FlatList
        data={stores}
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
          <StoreWrapper>
            <Store>
              <StoreImage
                source={{ uri: item.avatar }}
              />

              <StoreDetails>
                <Username>{item.name}</Username>
                <Description>{item.description}</Description>
                <Address>{item.address}</Address>
              </StoreDetails>
            </Store>
          </StoreWrapper>
        )}
      />
    </Container>
  );
}
