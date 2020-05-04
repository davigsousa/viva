import React from 'react';
import PropTypes from 'prop-types';

import {
  Container, ModalContainer, Spinner, Label,
} from './styles';

const LoadingModal = ({ isVisible }) => (
  <ModalContainer isVisible={isVisible}>
    <Container>
      <Spinner />
      <Label>Carregando</Label>
    </Container>
  </ModalContainer>
);

LoadingModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

export default LoadingModal;
