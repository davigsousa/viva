import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Animated } from 'react-native';

import { Small, Original } from './styles';

const OriginalAnimated = Animated.createAnimatedComponent(Original);

function LazyImage({
  smallSource,
  source,
  aspectRatio,
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
      source={smallSource}
      ratio={aspectRatio}
      blurRadius={1}
    >
      {
        loaded
        && (
        <OriginalAnimated
          style={{ opacity }}
          source={source}
          ratio={aspectRatio}
          onLoadEnd={handleAnimate}
        />
        )
      }
    </Small>
  );
}

LazyImage.propTypes = {
  smallSource: PropTypes.shape({
    uri: PropTypes.string,
  }).isRequired,
  source: PropTypes.shape({
    uri: PropTypes.string,
  }).isRequired,
  aspectRatio: PropTypes.number.isRequired,
  shouldLoad: PropTypes.bool.isRequired,
};

export default LazyImage;
