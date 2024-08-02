---
sidebar_position: 3

---
# Desarrollo con Node.js y MongoDB

Node.js es un entorno de ejecución para JavaScript que permite a los desarrolladores crear aplicaciones del lado del servidor. Este entorno es conocido por ser rápido y escalable, y está basado en el motor V8 de Google. Por otro lado, MongoDB es una base de datos documental NoSQL. En esta lección, utilizaremos ambas plataformas para desarrollar una API REST.

En este capítulo, aprenderás cómo crear un servidor básico con Node.js, utilizar el framework Express y conectar tu aplicación a una base de datos MongoDB.

---
## Instalar Mongodb en local

https://www.mongodb.com/try/download/community

imagen y boton de descarga

Para instalar MongoDB en tu máquina local, sigue los pasos específicos para tu sistema operativo. Aquí te muestro cómo hacerlo en Windows, macOS y Linux:

### Windows

1. **Descargar MongoDB:**
   - Ve a la [página de descarga de MongoDB](https://www.mongodb.com/try/download/community) y selecciona la versión correspondiente a tu sistema operativo.

   ![mongo](/images/mongo1.png)

   - Descarga el instalador MSI.

2. **Instalar MongoDB:**
   - Ejecuta el instalador MSI.
   ![mongo](/images/mongo2.png)
   - Sigue las instrucciones del instalador, asegurándote de seleccionar la opción "Complete" para una instalación completa.
   - Durante la instalación, asegúrate de que la opción "Install MongoDB as a Service" esté seleccionada.

3. **Configurar las variables de entorno:**
   - Abre el Panel de control y ve a "Sistema y seguridad" > "Sistema" > "Configuración avanzada del sistema".
   - Haz clic en "Variables de entorno".
   - En "Variables del sistema", selecciona la variable "Path" y haz clic en "Editar".
   - Añade la ruta al directorio `bin` de MongoDB, que por defecto es `C:\Program Files\MongoDB\Server\<versión>\bin`.

4. **Iniciar MongoDB:**
   - Abre una nueva ventana de la línea de comandos (cmd).
   - Ejecuta `mongod` para iniciar el servidor MongoDB.

### macOS

1. **Instalar Homebrew (si no lo tienes instalado):**
   - Abre la Terminal y ejecuta el siguiente comando:
     ```bash
     /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
     ```

2. **Instalar MongoDB:**
   - Ejecuta el siguiente comando en la Terminal:
     ```bash
     brew tap mongodb/brew
     brew install mongodb-community
     ```

3. **Iniciar MongoDB:**
   - Ejecuta el siguiente comando para iniciar MongoDB como un servicio:
     ```bash
     brew services start mongodb/brew/mongodb-community
     ```

4. **Verificar la instalación:**
   - Ejecuta `mongo` en la Terminal para conectar al shell de MongoDB.

### Linux (Ubuntu/Debian)

1. **Importar la clave pública para el repositorio:**
   - Abre una terminal y ejecuta:
     ```bash
     wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
     ```

2. **Añadir el repositorio de MongoDB:**
   - Crea un archivo de lista para MongoDB:
     ```bash
     echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu $(lsb_release -cs)/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
     ```

3. **Actualizar la base de datos de paquetes:**
   - Ejecuta:
     ```bash
     sudo apt-get update
     ```

4. **Instalar MongoDB:**
   - Ejecuta:
     ```bash
     sudo apt-get install -y mongodb-org
     ```

5. **Iniciar MongoDB:**
   - Inicia el servicio de MongoDB:
     ```bash
     sudo systemctl start mongod
     ```

6. **Habilitar MongoDB para que se inicie al arrancar el sistema:**
   - Ejecuta:
     ```bash
     sudo systemctl enable mongod
     ```

7. **Verificar la instalación:**
   - Ejecuta `mongo` en la terminal para conectar al shell de MongoDB.

Con estos pasos, deberías tener MongoDB instalado y en funcionamiento en tu máquina local. Ahora puedes conectarte a tu servidor MongoDB desde tu aplicación utilizando la URL de conexión apropiada (por ejemplo, `mongodb://localhost:27017`).

---
## MongoDB Compass

MongoDB compass se instala automáticamente con la instalación de MongoDB.

**MongoDB Compass** es una interfaz gráfica de usuario (GUI) para MongoDB, diseñada para facilitar la gestión y visualización de datos almacenados en bases de datos MongoDB. Es una herramienta poderosa y amigable para los desarrolladores y administradores de bases de datos que prefieren una interfaz visual en lugar de interactuar con MongoDB a través de la línea de comandos.

### Características principales de MongoDB Compass:

- **Exploración visual de datos**: Permite navegar por las bases de datos y colecciones, y visualizar los documentos de una manera intuitiva.
- **Consultas fáciles de construir**: Facilita la creación de consultas complejas mediante una interfaz gráfica, sin necesidad de escribir consultas en formato JSON.
- **Análisis y optimización de índices**: Proporciona herramientas para analizar el uso de índices y sugerencias para optimizar el rendimiento de las consultas.
- **Validación de esquemas**: Permite validar y verificar la estructura de los documentos en una colección, asegurando que cumplen con el esquema definido.
- **Agregación de datos**: Facilita la construcción de pipelines de agregación, permitiendo procesar y transformar datos de manera eficiente.
- **Monitoreo de rendimiento**: Ofrece herramientas para monitorear el rendimiento de las operaciones y consultas en tiempo real.

### Ventajas de usar MongoDB Compass:

- **Facilidad de uso**: Su interfaz intuitiva hace que sea accesible para usuarios con diferentes niveles de experiencia.
- **Visualización de datos**: Proporciona una representación gráfica de los datos, lo que facilita su comprensión y análisis.
- **Herramientas integradas**: Combina varias herramientas útiles en una sola aplicación, eliminando la necesidad de utilizar múltiples programas.

### Cómo empezar con MongoDB Compass:

1. **Conectar a una base de datos MongoDB**:
   - Abre MongoDB Compass.
   - Introduce la URI de conexión de tu base de datos MongoDB (por ejemplo, `mongodb://localhost:27017` para una instancia local).
   - Haz clic en "Connect".

   ![Compass](/images/compass.png)

2. **Explorar y gestionar datos**:
   - Navega por las bases de datos y colecciones disponibles.

   ![Compass](/images/compass.png)
   
   - Visualiza, edita y elimina documentos según sea necesario.
   - Utiliza las herramientas de consulta y agregación para trabajar con tus datos.

MongoDB Compass es una herramienta esencial para cualquiera que trabaje con MongoDB, proporcionando una manera fácil y eficiente de interactuar con las bases de datos y asegurando un flujo de trabajo más productivo.

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

mongoose.connect('mongodb://127.0.0.1:27017/mydatabase');

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
mongoose.connect('mongodb://localhost:27017/users');
```
- **Qué hace:** Este código intenta conectarse a una base de datos MongoDB.
- **Detalles importantes:**
  - `'mongodb://127.0.0.1:27017/users'`: Aquí especificas dónde está tu base de datos (en tu propia computadora, en el puerto 27017) y cómo se llama (`mydatabase`).
  - No debe preocuparse si la base de datos no existe, en este caso `mongoose` lo hará por usted igual que los esquemas asociados.
 
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

Para este ejercicio debe instalar primero **validator**.

```
npm i validator
```

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

mongoose.connect('mongodb://127.0.0.1:27017/users', {
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

## Usando Rest Client en Visual Studio Code

### Introducción

En este capítulo, aprenderás a usar la extensión Rest Client en Visual Studio Code para realizar diferentes operaciones HTTP (GET, POST, PUT, DELETE) contra una API local. Esta herramienta es muy útil para desarrolladores que necesitan probar y depurar sus servicios web de manera eficiente.

### Instalación de Rest Client

Antes de comenzar, asegúrate de tener la extensión Rest Client instalada en tu Visual Studio Code. Si aún no la has instalado, sigue estos pasos:

1. Abre Visual Studio Code.
2. Ve a la vista de extensiones (icono de cuadrados en la barra lateral izquierda).
3. Busca "Rest Client" en el cuadro de búsqueda.
4. Instala la extensión desarrollada por Huachao Mao.

### Creando un Archivo de Solicitudes HTTP

Una vez instalada la extensión, crea un nuevo archivo en VS Code y guárdalo con la extensión `.http` o `.rest`. En este archivo, podrás escribir y ejecutar tus solicitudes HTTP.

### Ejemplos de Solicitudes HTTP

#### 1. Obtener Lista de Usuarios (GET)

Para realizar una solicitud GET y obtener una lista de usuarios desde tu API, escribe la siguiente línea en tu archivo `.http`:

```http
####
GET  http://127.0.0.1:4000/users
```

#### 2. Crear un Nuevo Usuario (POST)

Para agregar un nuevo usuario a tu base de datos mediante una solicitud POST, usa el siguiente código:

```http
####
POST  http://127.0.0.1:4000/users
Content-Type: application/json

{
    "name": "Jesús Gomez",
    "email": "Gomez@gmail.com",
    "password": "1245678"
}
```

#### 3. Actualizar Información de un Usuario (PUT)

Si necesitas actualizar la información de un usuario existente, como el correo electrónico y la contraseña, utiliza esta solicitud PUT:

```http
####
PUT  http://127.0.0.1:4000/users/66aa6818a2f5c3c4632c19a2
Content-Type: application/json

{
    "email":"admin@test.com",
    "password":"admin_password"
}
```

#### 4. Eliminar un Usuario (DELETE)

Para eliminar un usuario de tu base de datos, usa la siguiente solicitud DELETE:

```http
####
DELETE  http://127.0.0.1:4000/users/66aa6818a2f5c3c4632c19a2
```

### Ejecutando las Solicitudes

Para ejecutar cualquiera de las solicitudes anteriores:

1. Coloca el cursor en cualquier parte de la línea que comienza con `GET`, `POST`, `PUT` o `DELETE`.
2. Aparecerá un botón "Send Request" (Enviar solicitud) justo encima de esa línea.
3. Haz clic en el botón para enviar la solicitud.
4. La respuesta de la API se mostrará en una nueva pestaña en VS Code.

