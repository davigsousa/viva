import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Animated } from 'react-native';

import { Small, Original } from './styles';

import backfake from '../../../assets/backfake.png';

const OriginalAnimated = Animated.createAnimatedComponent(Original);

function LazyImage({
  source,
  shouldLoad,
}) {
  const opacity = new Animated.Value(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (shouldLoad) setLoaded(true);
  }, [shouldLoad]);

  function handleAnimate() {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }

  return (
    <Small
      source={backfake}
      ratio={1}
      blurRadius={1}
    >
      {
        loaded
        && (
        <OriginalAnimated
          style={{ opacity }}
          source={source}
          ratio={1}
          onLoadEnd={handleAnimate}
        />
        )
      }
    </Small>
  );
}

LazyImage.propTypes = {
  source: PropTypes.shape({
    uri: PropTypes.string,
  }).isRequired,
  shouldLoad: PropTypes.bool.isRequired,
};

export default LazyImage;
