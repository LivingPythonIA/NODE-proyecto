import * as Product from '../models/product.model.js';

export const getProducts = () => Product.getAll();
export const getProduct = id => Product.getById(id);
export const createProduct = data => Product.create(data);
export const deleteProduct = id => Product.remove(id);

import * as productModel from '../models/products.model.js';

export const updateProduct = async (id, data) => {
  return await productModel.update(id, data);
};
