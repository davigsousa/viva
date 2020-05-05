import React from 'react';
import PropTypes from 'prop-types';

import LazyImage from '../LazyImage';
import IconButton from '../IconButton';
import BuyButton from '../BuyButton';

import {
  Post, PostHeader, User, Avatar, Name, Description, PriceLabel, Price,
} from './styles';

import opcoes from '../../../assets/iconesV/opcoes.png';
import diamante from '../../../assets/iconesC/diamante.png';


function PostItem({
  isSeller, avatar, name, image,
  price, description, showHeader = true, onUser,
}) {
  return (
    <Post>
      {
        showHeader
          ? (
            <PostHeader>
              <User onPress={onUser}>
                <Avatar source={{ uri: avatar }} />
                <Name>{name}</Name>
              </User>
              <IconButton
                image={isSeller ? opcoes : diamante}
                onPress={() => console.log('opções')}
              />
            </PostHeader>
          )
          : undefined
      }

      <LazyImage
        shouldLoad
        aspectRatio={1}
        source={{ uri: image }}
      />

      {
        !isSeller
          ? (<BuyButton price={price} onPress={() => console.log('comprei')} />)
          : (
            <Price>
              <PriceLabel>{`R$${price}`}</PriceLabel>
            </Price>
          )
      }

      <Description>
        <Name>{name}</Name>
        {' '}
        {description}
      </Description>
    </Post>
  );
}

PostItem.propTypes = {
  isSeller: PropTypes.bool.isRequired,
  avatar: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string.isRequired,
  price: PropTypes.string,
  description: PropTypes.string.isRequired,
  showHeader: PropTypes.bool,
  onUser: PropTypes.func,
};

PostItem.defaultProps = {
  avatar: undefined,
  name: undefined,
  price: undefined,
  showHeader: true,
  onUser: undefined,
};

export default PostItem;
