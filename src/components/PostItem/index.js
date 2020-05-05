import React, { useState, useEffect } from 'react';
import { Linking } from 'react-native';
import PropTypes from 'prop-types';

import BuyModal from '../BuyModal';
import LazyImage from '../LazyImage';
import IconButton from '../IconButton';
import BuyButton from '../BuyButton';

import api from '../../services/api';

import {
  Post, PostHeader, User, Avatar, Name, Description, PriceLabel, Price,
} from './styles';

import opcoes from '../../../assets/iconesV/opcoes.png';
import diamante from '../../../assets/iconesC/diamante.png';


function PostItem({
  isSeller, name, image,
  price, description, showHeader = true, onUser,
}) {
  const [buyModal, setBuyModal] = useState(false);
  const [avatar, setAvatar] = useState('');

  const handleBuy = async () => {
    const { data } = await api.get(`/contact/${name}`);
    const { whatsapp } = data;

    const url = `https://api.whatsapp.com/send?phone=${whatsapp}`;

    await Linking.openURL(url);
  };

  useEffect(() => {
    (async () => {
      const { data } = await api.get(`/products/${name}/all`);
      const { store: newStore } = data;
      setAvatar(newStore.url_image);
    })();
  }, []);

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
          ? (<BuyButton price={price} onPress={() => setBuyModal(true)} />)
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

      <BuyModal
        isVisible={buyModal}
        title="Finalize a Compra"
        message="Iremos lhe direcionar o Whatsapp do vendedor."
        onClose={() => setBuyModal(false)}
        onConfirm={handleBuy}
      />
    </Post>
  );
}

PostItem.propTypes = {
  isSeller: PropTypes.bool.isRequired,
  name: PropTypes.string,
  image: PropTypes.string.isRequired,
  price: PropTypes.string,
  description: PropTypes.string.isRequired,
  showHeader: PropTypes.bool,
  onUser: PropTypes.func,
};

PostItem.defaultProps = {
  name: undefined,
  price: undefined,
  showHeader: true,
  onUser: undefined,
};

export default PostItem;
