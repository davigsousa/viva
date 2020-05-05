import React, { useState, useEffect } from 'react';
import { NavigationActions } from 'react-navigation';
import { Picker } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import AddCategoryModal from '../../components/AddCategoryModal';
import PostItem from '../../components/PostItem';


import {
  Container, CategoryPicker, PickerContainer, PickerLabel,
  AddCategoryContainer, AddCategoryButton, Text, AddPostWrapper,
  AddPostContainer, AddPostButton, AddPost,
} from './styles';

import { getStore } from '../../services/auth';
import api from '../../services/api';


function EditCatalogo({ navigation }) {
  const [catmodal, setCatmodal] = useState(false);
  const [newcat, setNewcat] = useState('');
  const [store, setStore] = useState({});

  const [posts, setPosts] = useState([]);
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  const fetchNewPosts = async () => {
    const { data } = await api.get(`/products/${store.username}`, {
      category: selectedOption,
    });
    const { products } = data;
    setPosts(products);
  };

  useEffect(() => {
    (async () => {
      setStore(await getStore());

      const { data } = await api.get(`/categories/${store.username}`);
      console.log('categories', data);
      setOptions(data);
    })();
  }, []);

  useEffect(() => {
    fetchNewPosts();
  }, [selectedOption]);

  return (
    <Container>
      <AddCategoryContainer>
        <AddCategoryButton onPress={() => setCatmodal(true)}>
          <Text>Adicionar nova categoria</Text>
          <Entypo name="circle-with-plus" size={20} color="white" />
        </AddCategoryButton>
      </AddCategoryContainer>

      <PickerContainer>
        <PickerLabel>Categoria:</PickerLabel>
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

      <AddPostWrapper>
        <AddPostContainer>
          <AddPostButton onPress={() => {
            const navigateAction = NavigationActions.navigate({
              routeName: 'AddPost',
              params: { previous_screen: 'EditCatalog' },
              action: NavigationActions.navigate({ routeName: 'AddPost' }),
            });

            navigation.dispatch(navigateAction);
          }}
          >
            <AddPost>Adicionar Produto</AddPost>
            <Entypo name="camera" size={20} color="#993366" />
          </AddPostButton>
        </AddPostContainer>
      </AddPostWrapper>

      {
          posts.map((item) => (
            <PostItem
              key={String(Math.random())}
              isSeller
              showHeader={false}
              shouldWait={false}
              id={item.id}
              image={item.url_image}
              price={item.price}
              description={item.description}
            />
          ))
        }

      <AddCategoryModal
        isVisible={catmodal}
        onConfirm={(cat) => setNewcat(cat)}
        onClose={() => setCatmodal(false)}
      />
    </Container>
  );
}

export default EditCatalogo;
