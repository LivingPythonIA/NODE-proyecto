import * as productService from '../services/products.service.js';

export const getAll = async (req, res, next) => {
  try {
    const products = await productService.getProducts();
    res.json(products);
  } catch (err) { next(err); }
};

export const getOne = async (req, res, next) => {
  try {
    const product = await productService.getProduct(req.params.id);
    if (!product) return res.status(404).json({ message: 'Producto no encontrado' });
    res.json(product);
  } catch (err) { next(err); }
};

export const create = async (req, res, next) => {
  try {
  // Validación básica
    const { name, price } = req.body;

    if (!name || typeof price !== 'number') {
      return res.status(400).json({
        message: 'Nombre y precio son requeridos. El precio debe ser un número.'
      });
    }

    // Log para depuración
    console.log('📦 Producto recibido:', req.body);

    const saved = await productService.createProduct(req.body);
    res.status(201).json(saved);
  } catch (err) { next(err); }
};

export const remove = async (req, res, next) => {
  try {
    await productService.deleteProduct(req.params.id);
    res.status(204).end();
  } catch (err) { next(err); }
};
