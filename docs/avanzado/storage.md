---
sidebar_position: 4
---

# Cookies, Local Storage y Session Storage

## Introducción

En el desarrollo web, el almacenamiento de datos en el navegador es esencial para mejorar la experiencia del usuario y mantener la persistencia de datos. Existen tres mecanismos principales para almacenar datos en el lado del cliente: **Cookies**, **Local Storage** y **Session Storage**. Cada uno tiene sus propias características, ventajas y desventajas. En este capítulo, exploraremos estos mecanismos en detalle.

### 1. Cookies

**Cookies** son pequeños archivos de texto almacenados en el navegador del usuario por un sitio web. Se utilizan para almacenar datos que se envían de vuelta al servidor en cada solicitud HTTP. Esto es útil para la autenticación, personalización y seguimiento de usuarios.

### Características de las Cookies

- **Tamaño**: Generalmente, cada cookie tiene un tamaño máximo de 4 KB.
- **Persistencia**: Las cookies pueden ser persistentes (almacenadas durante un período específico) o de sesión (borradas cuando el navegador se cierra).
- **Accesibilidad**: Las cookies son accesibles tanto desde el lado del servidor como del cliente.
- **Seguridad**: Pueden ser vulnerables a ataques XSS si no se manejan correctamente. Las cookies pueden ser configuradas con el atributo `HttpOnly` para evitar el acceso desde JavaScript y `Secure` para que solo se envíen a través de HTTPS.

### Uso de Cookies

```javascript
// Crear una cookie
document.cookie = "username=JohnDoe; expires=Fri, 31 Dec 2023 23:59:59 GMT; path=/";

// Leer cookies
console.log(document.cookie);

// Borrar una cookie
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
```

Las cookies tienen varios atributos importantes que se pueden establecer:

- `expires`: Fecha de expiración de la cookie.
- `max-age`: Tiempo en segundos hasta que la cookie expire.
- `path`: Ruta para la cual la cookie es válida.
- `domain`: Dominio para el cual la cookie es válida.
- `secure`: Indica que la cookie solo debe transmitirse a través de HTTPS.
- `HttpOnly`: Indica que la cookie no es accesible mediante JavaScript.

### Ventajas y Desventajas

**Ventajas**:
- Permiten la persistencia de datos entre sesiones de usuario.
- Son accesibles desde el servidor y el cliente.

**Desventajas**:
- Tienen un límite de tamaño.
- Pueden impactar el rendimiento si se usan excesivamente.
- Son menos seguras comparadas con otras opciones de almacenamiento del lado del cliente.

### 2. Local Storage

**Local Storage** es una forma de almacenamiento del lado del cliente que permite almacenar datos de manera persistente. Los datos en Local Storage no tienen fecha de expiración y persisten incluso después de cerrar el navegador.

### Características de Local Storage

- **Tamaño**: Puede almacenar hasta 5-10 MB de datos, dependiendo del navegador.
- **Persistencia**: Los datos persisten hasta que son explícitamente eliminados.
- **Accesibilidad**: Solo es accesible desde el cliente (JavaScript).

### Uso de Local Storage

```javascript
// Almacenar datos
localStorage.setItem('username', 'JohnDoe');

// Leer datos
console.log(localStorage.getItem('username'));

// Borrar datos
localStorage.removeItem('username');

// Borrar todos los datos
localStorage.clear();
```

### Ventajas y Desventajas

**Ventajas**:
- Permite almacenar grandes cantidades de datos.
- Los datos persisten indefinidamente hasta que son eliminados.

**Desventajas**:
- Solo es accesible desde el cliente.
- No es adecuado para datos sensibles.

### Ejemplos Prácticos

Local Storage se utiliza comúnmente para almacenar configuraciones del usuario, datos de formularios, estados de la aplicación y otros datos que deben persistir entre recargas de página y cierres del navegador.

```javascript
// Guardar preferencias del usuario
localStorage.setItem('theme', 'dark');

// Recuperar preferencias del usuario
const theme = localStorage.getItem('theme');
if (theme) {
    document.body.classList.add(theme);
}
```

### 3. Session Storage

**Session Storage** es similar a Local Storage, pero los datos solo persisten durante la sesión del navegador. Los datos se eliminan cuando la pestaña o ventana del navegador se cierra.

### Características de Session Storage

- **Tamaño**: Puede almacenar hasta 5-10 MB de datos, dependiendo del navegador.
- **Persistencia**: Los datos persisten solo durante la sesión del navegador.
- **Accesibilidad**: Solo es accesible desde el cliente (JavaScript).

### Uso de Session Storage

```javascript
// Almacenar datos
sessionStorage.setItem('username', 'JohnDoe');

// Leer datos
console.log(sessionStorage.getItem('username'));

// Borrar datos
sessionStorage.removeItem('username');

// Borrar todos los datos
sessionStorage.clear();
```

### Ventajas y Desventajas

**Ventajas**:
- Permite almacenar grandes cantidades de datos.
- Los datos son eliminados automáticamente al finalizar la sesión.

**Desventajas**:
- Solo es accesible desde el cliente.
- No es adecuado para datos que necesitan persistir entre sesiones.

### Ejemplos Prácticos

Session Storage es útil para datos que solo son relevantes durante la sesión actual, como datos temporales de formularios o información de estado de la aplicación.

```javascript
// Guardar datos temporales del formulario
sessionStorage.setItem('formData', JSON.stringify({ name: 'John', age: 30 }));

// Recuperar datos temporales del formulario
const formData = JSON.parse(sessionStorage.getItem('formData'));
if (formData) {
    document.querySelector('#name').value = formData.name;
    document.querySelector('#age').value = formData.age;
}
```

## Comparación de Cookies, Local Storage y Session Storage

| Característica       | Cookies                                   | Local Storage                            | Session Storage                           |
|----------------------|-------------------------------------------|------------------------------------------|-------------------------------------------|
| Tamaño               | ~4 KB                                     | 5-10 MB                                  | 5-10 MB                                   |
| Persistencia         | Dependiendo de la fecha de expiración     | Hasta que se elimine explícitamente      | Hasta que se cierre la pestaña o ventana  |
| Accesibilidad        | Cliente y servidor                        | Solo cliente                             | Solo cliente                              |
| Seguridad            | Vulnerable a XSS, puede ser HttpOnly y Secure | Vulnerable a XSS                         | Vulnerable a XSS                          |

## Conclusión

Cookies, Local Storage y Session Storage son herramientas esenciales para el almacenamiento de datos del lado del cliente en el desarrollo web. Cada una tiene sus propias ventajas y desventajas y se utiliza en diferentes escenarios según las necesidades del proyecto.

**Cookies** son ideales para la comunicación cliente-servidor y la persistencia entre sesiones, permitiendo almacenar datos que necesitan ser enviados al servidor con cada solicitud. Sin embargo, tienen un tamaño limitado y pueden ser vulnerables a ataques si no se manejan adecuadamente.

**Local Storage** permite almacenar grandes cantidades de datos de forma persistente en el navegador del usuario, ideal para datos que necesitan permanecer entre recargas de página y cierres del navegador. Es fácil de usar pero no adecuado para datos sensibles debido a su accesibilidad desde el cliente.

**Session Storage** es perfecto para datos temporales que solo necesitan estar disponibles durante la sesión actual del navegador. Ofrece una manera conveniente de manejar datos que no necesitan persistir entre sesiones.

Con un entendimiento claro de estas tecnologías, los desarrolladores pueden elegir la solución adecuada para sus necesidades y garantizar una experiencia de usuario eficiente y segura.

## Ejemplo practico

### Explicación Paso a Paso del Proyecto de Carrito de Compras

Este proyecto de carrito de compras consiste en una página web que muestra una lista de productos y permite al usuario agregar productos a un carrito de compras. La lista de productos se obtiene de la API FakeStore, y el estado del carrito se maneja usando `localStorage` para persistencia de datos. A continuación se detalla el funcionamiento del proyecto, dividiendo la explicación entre el código HTML y el código JavaScript.

#### 1. Estructura HTML

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carrito de Compras</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <style>
        .product-image {
            width: 50%;
            height: auto;
            justify-content: center;
        }
        .cart-image {
            width: 50px;
            height: auto;
        }
        .card {
            display: flex;
            flex-direction: column;
            border: none;
            justify-content: space-between;
        }
        .card-body {
            display: flex;
            flex-direction: column;
        }
        .card-title {
            flex-grow: 1;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1 class="my-4">Carrito de Compras</h1>
        <h2>Productos</h2>
        <div id="productList" class="row"></div>

        <h2 class="mt-4">Carrito</h2>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Imagen</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody id="cartList"></tbody>
        </table>
    </div>

    <!-- Bootstrap JS and dependencies -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <!-- Custom JS -->
    <script src="cart.js"></script>
</body>
</html>
```

**Explicación del HTML:**

- **Encabezado (`<head>`)**:
  - Se incluye el `meta charset` para especificar el conjunto de caracteres utilizado.
  - Se incluye el `meta viewport` para asegurar que la página se vea bien en dispositivos móviles.
  - Se incluye el título de la página.
  - Se añade el CSS de Bootstrap para estilizar la página y algunas reglas CSS personalizadas para las imágenes y las tarjetas de productos.

- **Cuerpo (`<body>`)**:
  - Se crea un contenedor (`<div class="container">`) para mantener el contenido centrado y con márgenes.
  - Se incluye un título principal (`<h1>`) y un subtítulo (`<h2>`) para la lista de productos.
  - Se añade un `div` con id `productList` para contener las tarjetas de productos.
  - Se incluye otro subtítulo (`<h2>`) para el carrito.
  - Se añade una tabla para mostrar el contenido del carrito con sus respectivas columnas.
  - Finalmente, se incluyen los scripts necesarios para Bootstrap y el script personalizado (`cart.js`).

#### 2. Lógica JavaScript

```javascript
const baseURL = "https://fakestoreapi.com/products";

document.addEventListener('DOMContentLoaded', function() {
    getProducts();
    renderCart();
});

async function getProducts() {
    try {
        const response = await fetch(baseURL);
        let products = await response.json();
        products = products.slice(0, 4);
        renderProducts(products);
    } catch (error) {
        console.error("Error al obtener productos:", error);
    }
}

function renderProducts(products) {
    let productList = document.getElementById('productList');
    productList.innerHTML = '';

    products.forEach((product, index) => {
        if (index % 4 === 0) {
            const row = document.createElement('div');
            row.className = 'row';
            productList.appendChild(row);
        }

        const col = document.createElement('div');
        col.className = 'col-md-3 mb-4';

        const card = document.createElement('div');
        card.className = 'card h-100';

        const img = document.createElement('img');
        img.className = 'card-img-top product-image';
        img.src = product.image;
        img.alt = product.title;

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body d-flex flex-column';

        const cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title flex-grow-1';
        cardTitle.textContent = product.title;

        const cardPrice = document.createElement('p');
        cardPrice.className = 'card-text';
        cardPrice.textContent = `$${product.price}`;

        const addButton = document.createElement('button');
        addButton.className = 'btn btn-primary mt-auto';
        addButton.textContent = 'Agregar al Carrito';
        addButton.onclick = () => addToCart(product.id);

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardPrice);
        cardBody.appendChild(addButton);

        card.appendChild(img);
        card.appendChild(cardBody);

        col.appendChild(card);
        productList.lastChild.appendChild(col);
    });
}

function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(productId) {
    fetch(`${baseURL}/${productId}`)
        .then(response => response.json())
        .then(product => {
            let cart = getCart();
            const existingProduct = cart.find(item => item.id === product.id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                product.quantity = 1;
                cart.push(product);
            }
            saveCart(cart);
            renderCart();
        })
        .catch(error => console.error('Error al agregar producto al carrito:', error));
}

function updateCartItemQuantity(productId, quantity) {
    let cart = getCart();
    const product = cart.find(item => item.id === productId);
    if (product) {
        product.quantity = quantity;
        if (product.quantity <= 0) {
            cart = cart.filter(item => item.id !== productId);
        }
        saveCart(cart);
        renderCart();
    }
}

function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
    renderCart();
}

function renderCart() {
    const cartList = document.getElementById('cartList');
    cartList.innerHTML = '';

    const cart = getCart();
    cart.forEach(product => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td><img src="${product.image}" alt="${product.title}" class="cart-image"></td>
            <td>${product.title}</td>
            <td>$${product.price}</td>
            <td>
                <input type="number" value="${product.quantity}" min="1" class="form-control" style="width: 80px;" onchange="updateCartItemQuantity(${product.id}, this.value)">
            </td>
            <td>$${(product.price * product.quantity).toFixed(2)}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="removeFromCart(${product.id})">Eliminar</button>
            </td>
        `;

        cartList.appendChild(tr);
    });
}
```

**Explicación del JavaScript:**

1. **Variables y Eventos:**
   - `baseURL`: Define la URL base de la API FakeStore.
   - `DOMContentLoaded`: Evento que asegura que el DOM se haya cargado completamente antes de ejecutar cualquier función.

2. **Funciones Asíncronas:**
   - `getProducts`: Función que obtiene los productos de la API FakeStore usando `fetch`. Después de obtener los productos, llama a `renderProducts` para mostrarlos.
   - `renderProducts`: Función que toma una lista de productos y los muestra en la página como tarjetas de Bootstrap. Utiliza un `forEach` para iterar sobre los productos y los agrega en filas de 4 columnas.

3. **Carrito de Compras:**
   - `getCart`: Recupera el carrito de compras almacenado en `localStorage`.
   - `saveCart`: Guarda el carrito de compras en `localStorage`.
   - `addToCart`: Función que agrega un producto al carrito. Si el producto ya está en el carrito, incrementa su cantidad; de lo contrario, lo añade al carrito.
   - `updateCartItemQuantity`: Actualiza la cantidad de un producto en el carrito. Si la cantidad es cero o menor, elimina el producto del carrito.
   - `removeFromCart`: Elimina un producto del carrito.


   - `renderCart`: Renderiza el contenido del carrito en la tabla de la página, mostrando la imagen, nombre, precio, cantidad, subtotal y botones de acción para eliminar el producto.

#### Conclusión

Este proyecto demuestra cómo crear una simple aplicación de carrito de compras usando HTML, CSS (Bootstrap) y JavaScript. Los productos se obtienen de una API externa, se muestran en tarjetas estilizadas con Bootstrap y el carrito se maneja completamente en el lado del cliente usando `localStorage` para la persistencia de datos. Esta estructura básica puede ampliarse para incluir funcionalidades más complejas como autenticación de usuarios, métodos de pago y un backend para manejar pedidos.