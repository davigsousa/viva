import React, { useState, useEffect, useCallback } from 'react';
import { View, FlatList } from 'react-native';

import LazyImage from '../../components/LazyImage';
import IconButton from '../../components/IconButton';

import {
  Post, PostHeader, Avatar, Name, Description, Loading, Header, Logo,
} from './styles';

import premium from '../../../assets/IconePremium.png';
import logo from '../../../assets/logo.png';
import conta from '../../../assets/IconeConta.png';

import feedStatic from '../../services/feedStatic';

export default function Feed() {
  const [feed, setFeed] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [changed, setChanged] = useState([]);

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
    setFeed(feedStatic);

    return () => {
      setFeed([]);
      setPage(1);
      setTotal(0);
    };
  }, []);

  async function refreshList() {
    setRefreshing(true);

    // await loadPage(1, true);

    setRefreshing(false);
  }

  const handleViewableChanged = useCallback(({ changed: itemsChanged }) => {
    setChanged(itemsChanged.map(({ item }) => item.id));
  }, []);

  return (
    <View>
      <FlatList
        data={feed}
        onEndReached={() => {
          // loadPage()
          console.log('chegou ao fim');
        }}
        onEndReachedThreshold={0.1}
        keyExtractor={(post) => String(post.id)}
        onRefresh={refreshList}
        refreshing={refreshing}
        onViewableItemsChanged={handleViewableChanged}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 20,
        }}
        ListFooterComponent={loading && <Loading />}
        renderItem={({ item }) => (
          <Post>
            <PostHeader>
              <Avatar source={{ uri: item.author.avatar }} />
              <Name>{item.author.name}</Name>
            </PostHeader>

            <LazyImage
              shouldLoad={changed.includes(item.id)}
              aspectRatio={item.aspectRatio}
              smallSource={{ uri: item.small }}
              source={{ uri: item.image }}
            />

            <Description>
              <Name>{item.author.name}</Name>
              {' '}
              {item.description}
            </Description>
          </Post>
        )}
      />
    </View>
  );
}
