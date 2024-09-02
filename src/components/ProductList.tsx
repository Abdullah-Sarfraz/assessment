import React, { useEffect, useState } from 'react';
import { Product } from '../types';
import { fetchProducts } from '../services/ProductService';
import ProductItem from './ProductItem';
import Filter from './Filter';

interface ProductListProps {
  onAddToCart: (product: Product) => void;
  onRemoveFromCart: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({
  onAddToCart,
  onRemoveFromCart,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
      setFilteredProducts(data);
    };

    loadProducts();
  }, []);

  const filterByColor = (color: string) => {
    if (color === '') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.colour === color)
      );
    }
  };

  return (
    <div className='product-list'>
      <Filter onFilter={filterByColor} />
      {filteredProducts.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;
