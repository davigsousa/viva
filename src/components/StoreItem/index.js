import React from 'react';
import PropTypes from 'prop-types';

import {
  StoreWrapper, Store, StoreImage, StoreDetails, Username, Description, Address,
} from './styles';

function StoreItem({
  avatar, name, description, address, onPress,
}) {
  return (
    <StoreWrapper>
      <Store onPress={onPress}>
        <StoreImage
          source={{ uri: avatar }}
        />

        <StoreDetails>
          <Username>{name}</Username>
          <Description>{description}</Description>
          <Address>{address}</Address>
        </StoreDetails>
      </Store>
    </StoreWrapper>
  );
}

StoreItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default StoreItem;
