export interface Product {
  id: number;
  name: string;
  price: number;
  colour: string;
  img: string;
}

export interface BasketItem extends Product {
  quantity: number;
}
