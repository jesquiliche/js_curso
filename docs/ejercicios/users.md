---
sidebar_position: 2

---
# Lista de usuarios
## Descripción del Proyecto

Este proyecto es una aplicación web sencilla que permite a los usuarios obtener una lista de usuarios aleatorios desde una API pública y mostrarlos en una tabla. Utiliza HTML, CSS y JavaScript junto con la biblioteca Bootstrap para el diseño y la API Random User Generator para obtener los datos de los usuarios.

## Funcionalidades

1. **Obtener Usuarios**:
   - Al hacer clic en el botón "Obtener Usuarios", se realiza una solicitud a la API Random User Generator para obtener 5 usuarios aleatorios.
   - Los datos obtenidos se muestran en una tabla en la página web.

2. **Mostrar Información de Usuarios**:
   - La tabla muestra una imagen del usuario, su nombre completo, su correo electrónico y su ubicación (ciudad y estado).

## Estructura del Proyecto

### HTML (index.html)

El archivo `index.html` define la estructura de la página web, incluyendo el encabezado, el botón para obtener usuarios y la tabla para mostrar los datos de los usuarios.

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 4</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <!-- Estilos adicionales -->
    <style>
        body {
            padding-top: 20px;
            background-color: #f8f9fa;
        }
        .container {
            max-width: 800px;
        }
        table img {
            border-radius: 50%;
            width: 50px;
            height: 50px;
        }
        .table-container {
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1 class="mb-4">Obtener Usuarios</h1>
        <button id="fetchButton" class="btn btn-primary">Obtener Usuarios</button>
        <div class="table-container">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Foto</th>
                        <th>Nombre</th>
                        <th>Correo Electrónico</th>
                        <th>Ubicación</th>
                    </tr>
                </thead>
                <tbody id="userTableBody">
                    <!-- Los usuarios se insertarán aquí -->
                </tbody>
            </table>
        </div>
    </div>

    <!-- Bootstrap JS and dependencies -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <!-- Tu archivo JavaScript -->
    <script src="script.js"></script>
</body>
</html>
```

### CSS (Estilos Adicionales en el Mismo Archivo HTML)

El CSS incluido en el mismo archivo HTML define estilos adicionales para la página, como el espaciado y el fondo, así como el estilo de las imágenes dentro de la tabla.

```html
<style>
    body {
        padding-top: 20px;
        background-color: #f8f9fa;
    }
    .container {
        max-width: 800px;
    }
    table img {
        border-radius: 50%;
        width: 50px;
        height: 50px;
    }
    .table-container {
        margin-top: 20px;
    }
</style>
```

### JavaScript (script.js)

El archivo `script.js` maneja la lógica para obtener los usuarios desde la API y mostrar los datos en la tabla.

```javascript
document.getElementById('fetchButton').addEventListener('click', function() {
    fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(data => {
            var userTableBody = document.getElementById('userTableBody');
            userTableBody.innerHTML = '';

            data.results.forEach(function(user) {
                var row = document.createElement('tr');

                row.innerHTML = `
                    <td><img src="${user.picture.medium}" alt="${user.name.first} ${user.name.last}"></td>
                    <td>${user.name.first} ${user.name.last}</td>
                    <td>${user.email}</td>
                    <td>${user.location.city}, ${user.location.state}</td>
                `;

                userTableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error:', error));
});
```

## Explicación de las Funciones JavaScript

- **`addEventListener('click', function() { ... })`**: Añade un evento al botón "Obtener Usuarios" que se activa al hacer clic.
- **`fetch('https://randomuser.me/api/?results=5')`**: Realiza una solicitud GET a la API Random User Generator para obtener 5 usuarios.
- **`.then(response => response.json())`**: Convierte la respuesta de la API en formato JSON.
- **`.then(data => { ... })`**: Procesa los datos obtenidos de la API.
- **`data.results.forEach(function(user) { ... })`**: Itera sobre cada usuario en los datos obtenidos.
- **`document.createElement('tr')`**: Crea una nueva fila de tabla para cada usuario.
- **`row.innerHTML = ...`**: Define el contenido HTML de la fila, incluyendo la imagen, nombre, correo electrónico y ubicación del usuario.
- **`userTableBody.appendChild(row)`**: Añade la nueva fila a la tabla en el cuerpo de la tabla (`tbody`).
- **`.catch(error => console.error('Error:', error))`**: Maneja cualquier error que ocurra durante la solicitud fetch.

### Uso del Proyecto

1. **Abrir la Página Web**:
   - Abra el archivo `index.html` en su navegador.

2. **Obtener Usuarios**:
   - Haga clic en el botón "Obtener Usuarios" para obtener y mostrar 5 usuarios aleatorios en la tabla.

### Requisitos

- **Navegador Moderno**: Para soportar Fetch API y ES6.
- **Conexión a Internet**: Para poder hacer solicitudes a la API Random User Generator.

Este proyecto es un ejemplo simple de cómo integrar una API externa en una página web y mostrar los datos de forma dinámica usando JavaScript y Bootstrap. Se puede expandir con funcionalidades adicionales como paginación, filtros de búsqueda, y más.