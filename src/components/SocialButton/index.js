import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesome } from '@expo/vector-icons';

import { Button, ButtonText } from './styles';

function SocialButton({
  title, onPress, enabled, icon, color,
}) {
  return (
    <Button enabled={enabled} color={color} onPress={onPress}>
      <FontAwesome name={icon} size={32} color="white" />
      <ButtonText>
        {title}
      </ButtonText>
    </Button>
  );
}

SocialButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  enabled: PropTypes.bool.isRequired,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default SocialButton;
