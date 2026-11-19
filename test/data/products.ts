import type { Product } from '../../src/models';

export const backpack: Product = { name: 'Sauce Labs Backpack', price: 29.99 };
export const bikeLight: Product = { name: 'Sauce Labs Bike Light', price: 9.99 };

export const totalPriceOf = (...products: Product[]): number =>
    Math.round(products.reduce((sum, product) => sum + product.price, 0) * 100) / 100;
