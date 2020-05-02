import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Image } from 'react-native';


function IconButton({ onPress, image }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={image} resizeMode="contain" style={{ width: 30, height: 30 }} />
    </TouchableOpacity>
  );
}

IconButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  image: PropTypes.number.isRequired,
};

export default IconButton;
