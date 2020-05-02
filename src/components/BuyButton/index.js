import React from 'react';
import PropTypes from 'prop-types';

import {
  Button, PriceLabel, Price, Divider, BuyLabel, Buy, BuyArrow,
} from './styles';

import seta from '../../../assets/seta.png';

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
  price: PropTypes.string,
  onPress: PropTypes.func,
};

BuyButton.defaultProps = {
  oldPrice: '',
  price: '',
  onPress: undefined,
};

export default BuyButton;
