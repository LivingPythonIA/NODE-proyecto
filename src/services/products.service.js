import * as Product from '../models/product.model.js';

export const getProducts = () => Product.getAll();
export const getProduct = id => Product.getById(id);
export const createProduct = data => Product.create(data);
export const deleteProduct = id => Product.remove(id);
