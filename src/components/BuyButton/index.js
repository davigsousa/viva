import React from 'react';
import PropTypes from 'prop-types';

import {
  Button, PriceLabel, Price, Divider, BuyLabel, Buy, BuyArrow,
} from './styles';

import seta from '../../../assets/IconeSeta.png';

function BuyButton({ oldPrice = '', price, onPress }) {
  return (
    <Button onPress={onPress}>
      <PriceLabel>
        <Price>{`R$${price}`}</Price>
      </PriceLabel>
      <Divider />
      <BuyLabel>
        <Buy>Comprar</Buy>
        <BuyArrow source={seta} resizeMode="stretch" />
      </BuyLabel>
    </Button>
  );
}

BuyButton.propTypes = {
  oldPrice: PropTypes.string,
  price: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

BuyButton.defaultProps = {
  oldPrice: '',
};

export default BuyButton;
