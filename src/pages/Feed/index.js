import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
import { View, FlatList } from 'react-native';

import IconButton from '../../components/IconButton';
import PostItem from '../../components/PostItem';

import {
  Loading, AddPostContainer, AddPost, AddPostWrapper, AddPostButton,
} from './styles';

import camera from '../../../assets/iconesV/camera.png';

import { getSellerInfo } from '../../services/user';
import feedV from '../../services/feedV';
import feedC from '../../services/feedC';


function Feed({ isSeller, dispatch, navigation }) {
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
    <ThemeProvider theme={{ color: (isSeller ? '#993366' : '#ff6600') }}>
      <View>
        {
          isSeller
            ? (
              <AddPostWrapper>
                <AddPostContainer>
                  <AddPostButton>
                    <AddPost>Adicionar Post</AddPost>
                    <IconButton image={camera} onPress={() => console.log('camera')} />
                  </AddPostButton>
                </AddPostContainer>
              </AddPostWrapper>
            )
            : undefined
        }
        <FlatList
          data={isSeller ? feedV : feedC}
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
            <PostItem
              isSeller={isSeller}
              avatar={item.author.avatar}
              name={item.author.name}
              onUser={() => navigation.navigate('Catalog')}
              changed={changed}
              id={item.id}
              aspectRatio={item.aspectRatio}
              image={item.image}
              price={item.price}
              description={item.description}
            />
          )}
        />
      </View>
    </ThemeProvider>
  );
}

Feed.propTypes = {
  isSeller: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default connect(({ isSeller }, ownProps) => ({ isSeller, ...ownProps }))(Feed);
