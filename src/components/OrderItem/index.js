import React from 'react';
import PropTypes from 'prop-types';

import {
  OrderWrapper, Order, OrderDetails, Name, Owner, DateLabel,
} from './styles';

function OrderItem({
  name, owner, date,
}) {
  return (
    <OrderWrapper>
      <Order>
        <OrderDetails>
          <Name>{name}</Name>
          <Owner>{owner}</Owner>
        </OrderDetails>
        <DateLabel>{date}</DateLabel>
      </Order>
    </OrderWrapper>
  );
}

OrderItem.propTypes = {
  name: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default OrderItem;
