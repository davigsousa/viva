import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Container, Title, ButtonsContainer, Input,
  Button, Text, TextContainer, ModalContainer,
} from './styles';

function AddCategoryModal({ isVisible, onClose, onConfirm }) {
  const [name, setName] = useState('');

  return (
    <ModalContainer isVisible={isVisible}>
      <Container>
        <TextContainer>
          <Title>Adicionar Categoria</Title>
        </TextContainer>

        <ButtonsContainer>
          <Input
            placeholder="Nome"
            maxLength={20}
            defaultValue={name}
            onChangeText={(text) => setName(text)}
          />
          <Button
            onPress={() => {
              onConfirm(name);
              onClose();
            }}
            backcolor="#993366"
            style={{ marginTop: 50 }}
          >
            <Text>Adicionar</Text>

          </Button>
          <Button
            onPress={onClose}
            backcolor="#aa5599"
            style={{ marginTop: 10 }}
          >
            <Text>Cancelar</Text>

          </Button>
        </ButtonsContainer>
      </Container>
    </ModalContainer>
  );
}

AddCategoryModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default AddCategoryModal;
