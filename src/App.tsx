import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Basket from './components/Basket';
import Total from './components/Total';
import { Product, BasketItem } from './types';
import './App.css';

const App: React.FC = () => {
  const [basket, setBasket] = useState<BasketItem[]>([]);

  const handleAddToCart = (product: Product) => {
    setBasket((prevBasket) => {
      const existingItem = prevBasket.find((item) => item.id === product.id);
      if (existingItem) {
        return prevBasket.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevBasket, { ...product, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (product: Product) => {
    setBasket((prevBasket) => {
      const existingItem = prevBasket.find((item) => item.id === product.id);
      if (existingItem && existingItem.quantity > 1) {
        return prevBasket.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        return prevBasket.filter((item) => item.id !== product.id);
      }
    });
  };

  const total = basket.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className='container'>
      <ProductList onAddToCart={handleAddToCart} />
      <div className='cart-container'>
        <Basket items={basket} onRemoveFromCart={handleRemoveFromCart} />
        <Total total={total} />
      </div>
    </div>
  );
};

export default App;
