import React from 'react';
import PropTypes from 'prop-types';

import {
  Container, HelpTitle, HelpDescription, ButtonsContainer,
  ButtonSeller, ButtonConsumer, Text, TextContainer, SellerModal,
} from './styles';

const SellerHelper = ({ isVisible, onClose, onConfirm }) => (
  <SellerModal isVisible={isVisible}>
    <Container>
      <TextContainer>
        <HelpTitle>Você não tem uma loja.</HelpTitle>
        <HelpDescription>Deseja cadastrar uma?</HelpDescription>
      </TextContainer>

      <ButtonsContainer>
        <ButtonSeller onPress={onConfirm}><Text>Sim, eu quero!</Text></ButtonSeller>
        <ButtonConsumer onPress={onClose}><Text>Por enquanto, não.</Text></ButtonConsumer>
      </ButtonsContainer>
    </Container>
  </SellerModal>
);

SellerHelper.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default SellerHelper;
