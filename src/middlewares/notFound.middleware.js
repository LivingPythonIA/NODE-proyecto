export default (req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
};
// Este middleware maneja las rutas no encontradas