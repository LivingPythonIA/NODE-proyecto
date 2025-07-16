export default (err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    message: err.message || 'Error interno del servidor'
  });
};
// Este middleware maneja los errores de la aplicación