import React, { useState, useEffect, useCallback } from 'react';
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
import { setUser } from '../../services/auth';
import feedV from '../../services/feedV';
import feedC from '../../services/feedC';


function Feed({ isSeller, dispatch, navigation }) {
  const [feed, setFeed] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadingModal, setLoadingModal] = useState(false);
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
      setLoadingModal(true);
      const { data } = await api.get('/user');
      await setUser(data);
      console.log('get', data);

      dispatch({
        type: 'TOGGLE_USER_TYPE',
        isSeller: data.shop_pass,
      });
      setLoadingModal(false);
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
