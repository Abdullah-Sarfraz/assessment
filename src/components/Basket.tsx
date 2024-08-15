import React from "react";
import { BasketItem } from "../types";

interface Props {
  items: BasketItem[];
  onAddToCart: (item: BasketItem) => void;
  onRemoveFromCart: (item: BasketItem) => void;
}

const Basket: React.FC<Props> = ({ items, onAddToCart, onRemoveFromCart }) => {
  return (
    <div className="basket">
      <h2>Your Basket</h2>
      {items.length === 0 ? (
        <p>Your basket is empty</p>
      ) : (
        <div className="basket-items">
          {items.map((item) => (
            <div className="product-item" key={item.id}>
              <div className="flex-1">
                <img src={item.img} alt={item.name} />
                <h5>{item.name}</h5>
                <p>£{item.price}</p>
              </div>
              <div className="qty-controls">
                <button onClick={() => onRemoveFromCart(item)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => onAddToCart(item)}>+</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Basket;
