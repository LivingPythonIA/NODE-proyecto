import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import 'dotenv/config.js';          // para acceder a process.env
import productsRoutes from './routes/products.routes.js';
import authRoutes from './routes/auth.routes.js';
import notFound from './middlewares/notFound.middleware.js';
import errorHandler from './middlewares/error.middleware.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/api/products', productsRoutes);
app.use('/auth', authRoutes);

// 404 y manejo de errores
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀  API corriendo en http://localhost:${PORT}`);
});
