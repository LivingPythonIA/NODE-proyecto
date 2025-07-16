# NODE-proyecto
 proyecto NODE
# 🛒 TechLab Store API

API REST desarrollada en Node.js con Express y Firebase Firestore como base de datos, diseñada para administrar productos de una tienda mediante operaciones CRUD. Incluye autenticación con JWT y una arquitectura modular escalable.

---

## 📦 Características principales

- 🔐 Autenticación con JWT
- 🔄 CRUD de productos (Create, Read, Delete)
- 🧱 Arquitectura por capas (rutas, controladores, servicios, modelos)
- ☁️ Base de datos en Firestore (Firebase)
- ⚠️ Manejo de errores (400, 401, 403, 404, 500)
- 🛠️ Configuración con variables de entorno `.env`
- 🔃 Nodemon para desarrollo en caliente

---

## 🚀 Instalación

```bash
git clone https://github.com/LivingPythonIA/NODE-proyecto.git
cd NODE-proyecto
npm install

Postman: 
1.	Método: POST
2.	URL: http://localhost:3000/auth/login
3.	Body: → Raw y formato JSON, pegar: 
{
  "email": "admin@techlab.com",
  "password": "1234"
}
Con el token crear un producto:
1.	Método: POST
2.	URL: http://localhost:3000/api/products/create

