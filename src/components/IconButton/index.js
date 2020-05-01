import React from 'react';
import PropTypes from 'prop-types';
import { TouchableNativeFeedback, Image } from 'react-native';


function IconButton({ onPress, image }) {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <Image source={image} resizeMode="contain" style={{ width: 32, height: 32 }} />
    </TouchableNativeFeedback>
  );
}

IconButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  image: PropTypes.number.isRequired,
};

export default IconButton;
