import React from 'react';

const OrderActions = ({ subtotal }) => {
    return (
      <div class="row orderActionRow">
        <div class="col">
          <p class="itemName">Subtotal ${subtotal.toFixed(2)}</p>
        </div>
        <div class="col orderActionButtonCol">
          <button class="orderActionButton">Order</button>
          <button class="orderActionButton">Clear all</button>
        </div>
      </div>
    );
};

export default OrderActions;