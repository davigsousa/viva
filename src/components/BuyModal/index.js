import React from 'react';
import PropTypes from 'prop-types';

import {
  Container, Title, Message, Text, ModalContainer, Button,
} from './styles';

const BuyModal = ({
  isVisible, onClose, title, message, onConfirm,
}) => (
  <ModalContainer isVisible={isVisible}>
    <Container>
      <Title>{title}</Title>
      <Message>{message}</Message>

      <Button
        onPress={onConfirm}
        backcolor="#993366"
      >
        <Text>Ok, tudo bem!</Text>

      </Button>
      <Button
        onPress={onClose}
        backcolor="#ff6600"
      >
        <Text>Não, obrigado!</Text>

      </Button>
    </Container>
  </ModalContainer>
);

BuyModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default BuyModal;
