import React from 'react';

const OrderActions = ({ subtotal, setTotal, itemCounts, setItemCounts }) => {
    const clearOrder =  () => {
      setTotal(0);
      setItemCounts(new Map());
    };

    const handleOrderClick = () => {
      if (itemCounts.size > 0) {
        let orderSummary = '';
        itemCounts.forEach((count, item) => {
          orderSummary += `- ${item} (${count}x)\n`;
        });

        // Construct and show the alert
        alert(`Your order has been placed!\n\nOrder:\n${orderSummary}\nTotal: $${subtotal.toFixed(2)}`);
      } else {
        alert(`No items in cart. Please add items before placing an order.`);
      }
    };

    return (
      <div class="row orderActionRow">
        <div class="col">
          <p class="itemName">Subtotal ${subtotal.toFixed(2)}</p>
        </div>
        <div class="col orderActionButtonCol">
          <button class="orderActionButton" onClick={handleOrderClick}>Order</button>
          <button class="orderActionButton" onClick={clearOrder}>Clear all</button>
        </div>
      </div>
    );
};

export default OrderActions;