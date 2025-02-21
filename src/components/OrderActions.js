import React from 'react';

const OrderActions = ({ subtotal, setTotal, setItemCounts }) => {
    const clearOrder =  () => {
      setTotal(0);
      setItemCounts(new Map());
    };

    return (
      <div class="row orderActionRow">
        <div class="col">
          <p class="itemName">Subtotal ${subtotal.toFixed(2)}</p>
        </div>
        <div class="col orderActionButtonCol">
          <button class="orderActionButton">Order</button>
          <button class="orderActionButton" onClick={clearOrder}>Clear all</button>
        </div>
      </div>
    );
};

export default OrderActions;