---
sidebar_position: 3

---
# Desarrollo con Node.js

Node.js es un entorno de ejecución para JavaScript que permite a los desarrolladores crear aplicaciones del lado del servidor. Es rápido, escalable y está basado en el motor V8 de Google. En este capítulo, aprenderás cómo crear un servidor básico con Node.js, utilizar el framework Express y conectar tu aplicación a una base de datos.

---

## Creación de un Servidor Básico

Para empezar, vamos a crear un servidor básico con Node.js. Necesitarás tener Node.js instalado en tu máquina.

### Instalación de Node.js

Descarga e instala Node.js desde su [sitio oficial](https://nodejs.org/). Para verificar la instalación, ejecuta:

```bash
node -v
npm -v
```

### Creación del Proyecto

Crea un nuevo directorio para tu proyecto y navega a él en tu terminal. Luego, inicializa un proyecto de Node.js:

```bash
mkdir my-node-project
cd my-node-project
npm init -y
```

### Creación del Servidor Básico

Crea un archivo llamado `server.js` y añade el siguiente código:

```javascript
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

Para ejecutar el servidor, usa el comando:

```bash
node server.js
```

Abre tu navegador y navega a `http://127.0.0.1:3000/`. Deberías ver el mensaje "Hello, World!".

---

## Uso de Express

Express es un framework minimalista y flexible para Node.js que proporciona un robusto conjunto de características para aplicaciones web y móviles.

### Instalación de Express

Instala Express mediante npm:

```bash
npm install express
```

### Creación de un Servidor con Express

Modifica el archivo `server.js` para utilizar Express:

```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
```

Ejecuta el servidor de nuevo:

```bash
node server.js
```

Navega a `http://localhost:3000/` y deberías ver el mensaje "Hello, World!".

### Rutas y Middlewares en Express

Express permite definir múltiples rutas y utilizar middlewares para manejar las solicitudes. Añade algunas rutas adicionales y un middleware:

```javascript
const express = require('express');
const app = express();
const port = 3000;

// Middleware para todas las rutas
app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
```

Con esto, cada solicitud a cualquier ruta será registrada en la consola.

---

## Conexión a Bases de Datos

Node.js puede conectarse a varias bases de datos como MongoDB, MySQL, PostgreSQL, entre otras. Vamos a ver cómo conectar una aplicación Node.js a MongoDB utilizando Mongoose.

### Instalación de MongoDB y Mongoose

Primero, asegúrate de tener MongoDB instalado y en funcionamiento. Luego, instala Mongoose, que es una biblioteca de modelado de datos para MongoDB y Node.js.

```bash
npm install mongoose
```

### Conexión a MongoDB con Mongoose

Crea un archivo llamado `database.js` y añade el siguiente código para conectarte a MongoDB:

```javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
```

Luego, modifica `server.js` para incluir esta conexión:

```javascript
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
```
:::info Explicación paso a paso
#### Paso 1: Importar Mongoose
```javascript
const mongoose = require('mongoose');
```
- **Qué hace:** Este código trae la biblioteca `mongoose` a tu proyecto.
- **Por qué lo necesitas:** Mongoose es una herramienta que facilita la conexión y manipulación de datos en una base de datos MongoDB desde Node.js.

#### Paso 2: Conectar a la Base de Datos
```javascript
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
```
- **Qué hace:** Este código intenta conectarse a una base de datos MongoDB.
- **Detalles importantes:**
  - `'mongodb://localhost:27017/mydatabase'`: Aquí especificas dónde está tu base de datos (en tu propia computadora, en el puerto 27017) y cómo se llama (`mydatabase`).
  - `useNewUrlParser: true`: Usa un método más moderno para conectarse.
  - `useUnifiedTopology: true`: Utiliza un motor de conexión mejorado.

#### Paso 3: Obtener la Conexión
```javascript
const db = mongoose.connection;
```
- **Qué hace:** Guarda la conexión a la base de datos en una variable llamada `db`.
- **Por qué lo necesitas:** Para poder trabajar con la base de datos, necesitas esta conexión.

#### Paso 4: Manejar Errores
```javascript
db.on('error', console.error.bind(console, 'connection error:'));
```
- **Qué hace:** Configura una alerta para cuando algo salga mal al intentar conectar a la base de datos.
- **Detalles importantes:**
  - `db.on('error', ...)`: "Escucha" los errores de la conexión.
  - `console.error.bind(console, 'connection error:')`: Si hay un error, imprime un mensaje que dice `connection error:` seguido del error específico.

#### Paso 5: Confirmar Conexión Exitosa
```javascript
db.once('open', () => {
  console.log('Connected to MongoDB');
});
```
- **Qué hace:** Configura una notificación para cuando la conexión a la base de datos sea exitosa.
- **Detalles importantes:**
  - `db.once('open', ...)`: "Escucha" el evento `open`, que indica que la conexión se estableció correctamente.
  - `console.log('Connected to MongoDB');`: Imprime un mensaje que dice `Connected to MongoDB`.

#### Resumen en Términos Simples

1. **Importas Mongoose:** Piensa en Mongoose como un ayudante que te facilita trabajar con tu base de datos.
2. **Te conectas a tu base de datos:** Le dices a Mongoose dónde está tu base de datos y cómo conectarse a ella.
3. **Guardas la conexión:** Mantienes una referencia a la conexión para poder usarla.
4. **Preparas una alerta de error:** Configuras una manera de saber si algo va mal al intentar conectarse.
5. **Confirmas la conexión exitosa:** Configuras un mensaje que te avisa cuando la conexión a la base de datos ha sido exitosa.

Con estas cinco etapas, configuras tu aplicación Node.js para que se comunique con una base de datos MongoDB, y te aseguras de saber si la conexión funciona o si hay algún problema.
:::

### Definición de un Modelo con Mongoose

Define un modelo para tu base de datos MongoDB. Crea un archivo llamado `models/User.js`:

```javascript
const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
    trim: true,
    minlength: [3, 'El nombre debe tener al menos 3 caracteres'],
    maxlength: [50, 'El nombre no puede tener más de 50 caracteres']
  },
  email: {
    type: String,
    required: [true, 'El correo electrónico es obligatorio'],
    unique: true,
    lowercase: true,
    trim: true,
    validate: {
      validator: function(v) {
        return validator.isEmail(v);
      },
      message: props => `${props.value} no es un correo electrónico válido`
    }
  },
  password: {
    type: String,
    required: [true, 'La contraseña es obligatoria'],
    minlength: [6, 'La contraseña debe tener al menos 6 caracteres']
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;

```

### Uso del Modelo en el Servidor

Modifica `server.js` para utilizar el modelo `User`:

```javascript
const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Middleware para parsear JSON
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Ruta para crear un nuevo usuario
app.post('/users', async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Ruta para obtener todos los usuarios
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
```

### Actualización y Eliminación de Usuarios

Añadimos rutas adicionales para actualizar y eliminar usuarios:

```javascript
// Ruta para actualizar un usuario
app.put('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Ruta para eliminar un usuario
app.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});
```

Con estas nuevas rutas, puedes realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) completas sobre el modelo `User`.

---

## Conclusión

En este capítulo, has aprendido a configurar un servidor básico con Node.js y Express, a manejar rutas y middlewares, y a conectar tu aplicación a una base de datos MongoDB utilizando Mongoose. Con estas habilidades, puedes construir aplicaciones web del lado del servidor que son escalables y eficientes. Node.js, junto con Express y Mongoose, ofrece una plataforma poderosa para el desarrollo backend moderno, permitiéndote gestionar tanto el servidor como la base de datos de manera efectiva.