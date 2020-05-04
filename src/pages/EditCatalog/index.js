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


function EditCatalogo({ navigation }) {
  const [catmodal, setCatmodal] = useState(false);
  const [newcat, setNewcat] = useState('');

  const [posts, setPosts] = useState([]);
  const [options, setOptions] = useState([
    'Todos os Produtos', 'Sapatos', 'Camisas', 'Calças', 'Relógios',
  ]);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {

  }, []);

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
              key={item.id}
              isSeller
              showHeader={false}
              shouldWait={false}
              id={item.id}
              name={item.author.name}
              aspectRatio={item.aspectRatio}
              image={item.image}
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
