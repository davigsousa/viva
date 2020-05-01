import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { Button, Image } from './styles';

function BarButton({
  isSeller, propsNav, icon, iconS,
}) {
  const { onPress, focused } = propsNav;

  return (
    <Button onPress={onPress} focused={focused}>
      {
        isSeller
          ? (<Image source={iconS} />)
          : (<Image source={icon} />)
      }
    </Button>
  );
}

BarButton.propTypes = {
  propsNav: PropTypes.shape({
    onPress: PropTypes.func.isRequired,
    focused: PropTypes.bool.isRequired,
  }).isRequired,
  icon: PropTypes.number.isRequired,
  iconS: PropTypes.number.isRequired,
  isSeller: PropTypes.bool.isRequired,
};

export default connect(({ isSeller }, ownProps) => ({ isSeller, ...ownProps }))(BarButton);
