import React, { useState, useEffect } from 'react';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
import { View, FlatList } from 'react-native';

import LoadingModal from '../../components/LoadingModal';
import IconButton from '../../components/IconButton';
import PostItem from '../../components/PostItem';

import {
  Loading, AddPostContainer, AddPost, AddPostWrapper, AddPostButton,
} from './styles';

import camera from '../../../assets/iconesV/camera.png';

import api from '../../services/api';
import { setUser, getStore, setStore } from '../../services/auth';


function Feed({ isSeller, dispatch, navigation }) {
  const [feed, setFeed] = useState([]);
  const [store, setStateStore] = useState({});
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadingModal, setLoadingModal] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  async function loadPageClient(pageNumber = page, shouldRefresh = false) {
    if (total && pageNumber > total) return;

    setLoading(true);

    const { data } = await api.get(`/feed?page=${pageNumber}`);
    const { total_pages, posts: newPosts } = data;

    setTotal(Math.ceil(total_pages / 10));
    setFeed(shouldRefresh ? newPosts : [...feed, ...newPosts]);
    setPage(page + 1);
    setLoading(false);
  }

  async function loadPageSeller() {
    setLoading(true);
    const userStore = await getStore();
    const { data } = await api.get(`/products/${userStore.username}`);
    const { products } = data;
    setFeed(products);
    setStateStore(userStore);
  }

  useEffect(() => {
    setFeed([]);
    if (isSeller) {
      loadPageSeller();
    } else {
      loadPageClient();
    }

    return () => {
      setFeed([]);
      setPage(1);
      setTotal(0);
    };
  }, [isSeller]);

  useEffect(() => {
    (async () => {
      setLoadingModal(true);
      const { data } = await api.get('/user');
      await setUser(data);
      const { data: storeData } = await api.get('/store');
      await setStore(storeData);

      console.log('get', data);

      dispatch({
        type: 'TOGGLE_USER_TYPE',
        isSeller: data.shop_pass,
      });
      setLoadingModal(false);
    })();
  }, []);

  async function refreshList() {
    setRefreshing(true);

    if (!isSeller) await loadPageClient(1, true);

    setRefreshing(false);
  }

  return (
    <ThemeProvider theme={{ color: (isSeller ? '#993366' : '#ff6600') }}>
      <View>
        {
          isSeller
            ? (
              <AddPostWrapper>
                <AddPostContainer>
                  <AddPostButton onPress={() => {
                    const navigateAction = NavigationActions.navigate({
                      routeName: 'AddPost',
                      params: { previous_screen: 'Feed' },
                      action: NavigationActions.navigate({ routeName: 'AddPost' }),
                    });

                    navigation.dispatch(navigateAction);
                  }}
                  >
                    <AddPost>Adicionar Post/Produto</AddPost>
                    <IconButton image={camera} onPress={() => console.log('camera')} />
                  </AddPostButton>
                </AddPostContainer>
              </AddPostWrapper>
            )
            : undefined
        }
        <FlatList
          data={feed}
          onEndReached={() => {
            if (!isSeller) loadPageClient();
          }}
          onEndReachedThreshold={0.1}
          keyExtractor={() => String(Math.random())}
          onRefresh={refreshList}
          refreshing={refreshing}
          viewabilityConfig={{
            viewAreaCoveragePercentThreshold: 20,
          }}
          ListFooterComponent={loading && <Loading />}
          renderItem={({ item }) => (
            <PostItem
              isSeller={isSeller}
              avatar={store.url_image}
              name={isSeller ? store.username : item.username}
              onUser={() => navigation.navigate('Catalog')}
              id={item.id}
              aspect_ratio={Number.parseFloat(item.aspectRatio)}
              image={item.url_image}
              price={String(item.price).replace('.', ',')}
              description={item.description}
            />
          )}
        />

        <LoadingModal isVisible={loadingModal} />
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
