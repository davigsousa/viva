import React from 'react';
import PropTypes from 'prop-types';

import {
  ButtonContainer, Button, ButtonImage, ButtonLabel,
} from './styles';

const ProfileButton = ({ icon, label, onPress }) => (
  <ButtonContainer>
    <Button onPress={onPress}>
      <ButtonImage source={icon} resizeMode="stretch" />
      <ButtonLabel>{label}</ButtonLabel>
    </Button>
  </ButtonContainer>
);

ProfileButton.propTypes = {
  icon: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

ProfileButton.defaultProps = {
  onPress: undefined,
};

export default ProfileButton;
