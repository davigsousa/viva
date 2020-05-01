import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, FlatList } from 'react-native';

import LazyImage from '../../components/LazyImage';
import IconButton from '../../components/IconButton';
import BuyButton from '../../components/BuyButton';

import {
  Post, PostHeader, Avatar, Name, Description, Loading, User,
} from './styles';

import diamante from '../../../assets/iconesC/diamante.png';

import { getSellerInfo } from '../../services/user';
import feedStatic from '../../services/feedStatic';

function Feed({ dispatch }) {
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

    (async () => {
      const res = await getSellerInfo();
      dispatch({
        type: 'TOGGLE_USER_TYPE',
        isSeller: res,
      });
    })();

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
              <User>
                <Avatar source={{ uri: item.author.avatar }} />
                <Name>{item.author.name}</Name>
              </User>
              <IconButton image={diamante} onPress={() => console.log('curtir')} />
            </PostHeader>

            <LazyImage
              shouldLoad={changed.includes(item.id)}
              aspectRatio={item.aspectRatio}
              source={{ uri: item.image }}
            />

            <BuyButton price={item.price} onPress={() => console.log('comprei')} />

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

Feed.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(({ isSeller }, ownProps) => ({ isSeller, ...ownProps }))(Feed);
