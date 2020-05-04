import React from 'react';
import PropTypes from 'prop-types';

import {
  Container, Title, Message, Text, ModalContainer, Button,
} from './styles';

const AlertModal = ({
  isVisible, onClose, title, message,
}) => (
  <ModalContainer isVisible={isVisible}>
    <Container>
      <Title>{title}</Title>
      <Message>{message}</Message>

      <Button onPress={onClose}><Text>Ok!</Text></Button>
    </Container>
  </ModalContainer>
);

AlertModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AlertModal;
