import React from 'react';
import { Product } from '../types';

interface Props {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductItem: React.FC<Props> = ({ product, onAddToCart }) => {
  return (
    <div className='product-item'>
      <img src={product.img} alt={product.name} />
      <div className='flex-1'>
        <h2>{product.name}</h2>
        <p>£{product.price}</p>
      </div>
      <div className='qty-controls'>
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductItem;
