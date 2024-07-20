---
sidebar_position: 1

---
# CRUD para Gestión de Productos
## Conceptos previos

:::info localStorage

### **¿Qué es `localStorage`?**

`localStorage` es una forma de almacenamiento en el navegador que permite guardar datos en formato de clave-valor. Los datos almacenados en `localStorage` persisten incluso cuando el navegador se cierra y se vuelve a abrir, a diferencia de `sessionStorage`, que solo persiste durante la sesión del navegador.

### **Características de `localStorage`**

1. **Persistencia**: Los datos guardados en `localStorage` permanecen almacenados hasta que se eliminen explícitamente, ya sea por el usuario, por el código JavaScript, o por la política de limpieza del navegador.

2. **Capacidad**: Los navegadores modernos permiten almacenar varios megabytes de datos (aproximadamente 5-10 MB) por dominio. La cantidad exacta puede variar según el navegador.

3. **Acceso por Dominio**: Los datos almacenados en `localStorage` son accesibles solo desde el mismo dominio que los creó. No se puede acceder a los datos de un dominio diferente.

4. **API Sencilla**: `localStorage` utiliza una interfaz de clave-valor que facilita la lectura y escritura de datos.

### **Métodos Principales de `localStorage`**

- **`setItem(key, value)`**: Almacena un valor bajo una clave específica.
  ```javascript
  localStorage.setItem('username', 'JohnDoe');
  ```

- **`getItem(key)`**: Recupera el valor asociado a una clave específica.
  ```javascript
  let username = localStorage.getItem('username'); // 'JohnDoe'
  ```

- **`removeItem(key)`**: Elimina el valor asociado a una clave específica.
  ```javascript
  localStorage.removeItem('username');
  ```

- **`clear()`**: Elimina todos los datos almacenados en `localStorage` para el dominio actual.
  ```javascript
  localStorage.clear();
  ```

- **`key(index)`**: Recupera el nombre de la clave en la posición especificada.
  ```javascript
  let firstKey = localStorage.key(0);
  ```

- **`length`**: Propiedad que devuelve el número de elementos en `localStorage`.
  ```javascript
  let numberOfItems = localStorage.length;
  ```

### **Cómo Funciona `localStorage` en la Práctica**

1. **Almacenamiento de Datos**:
   - Cuando deseas guardar información en el navegador, utilizas `setItem`. Por ejemplo, si quieres guardar el nombre de usuario de una aplicación:
     ```javascript
     localStorage.setItem('username', 'Alice');
     ```

2. **Recuperación de Datos**:
   - Para obtener los datos almacenados, usas `getItem`. Este método devuelve el valor asociado a la clave proporcionada:
     ```javascript
     let username = localStorage.getItem('username'); // 'Alice'
     ```

3. **Eliminación de Datos**:
   - Si deseas eliminar una clave específica, usas `removeItem`. Esto elimina el par clave-valor:
     ```javascript
     localStorage.removeItem('username');
     ```

4. **Limpieza Total**:
   - Para eliminar todos los datos almacenados para el dominio, usas `clear`:
     ```javascript
     localStorage.clear();
     ```

### **Ejemplo Práctico en un Proyecto CRUD**

En el contexto de un proyecto CRUD como el descrito anteriormente, `localStorage` se utiliza para almacenar y gestionar los productos de la aplicación:

1. **Guardar Productos**:
   - Cuando se crea o actualiza un producto, se guarda en `localStorage` usando `setItem`. Por ejemplo:
     ```javascript
     let products = JSON.parse(localStorage.getItem('products')) || [];
     products.push(product);
     localStorage.setItem('products', JSON.stringify(products));
     ```

2. **Leer Productos**:
   - Para mostrar los productos en la tabla, se recuperan desde `localStorage` con `getItem`:
     ```javascript
     let products = JSON.parse(localStorage.getItem('products')) || [];
     ```

3. **Eliminar Productos**:
   - Al eliminar un producto, se actualiza el array de productos en `localStorage`:
     ```javascript
     let products = JSON.parse(localStorage.getItem('products')) || [];
     products = products.filter(p => p.id !== id);
     localStorage.setItem('products', JSON.stringify(products));
     ```

4. **Actualizar Productos**:
   - Para actualizar un producto, se busca en el array de productos, se modifica y se guarda de nuevo en `localStorage`:
     ```javascript
     let products = JSON.parse(localStorage.getItem('products')) || [];
     products = products.map(p => p.id === product.id ? product : p);
     localStorage.setItem('products', JSON.stringify(products));
     ```

### **Consideraciones Adicionales**

- **Seguridad**: `localStorage` no es adecuado para almacenar información sensible, ya que los datos no están cifrados y pueden ser accesibles por otros scripts en el mismo dominio.

- **Capacidad y Rendimiento**: Aunque `localStorage` es conveniente, su capacidad es limitada y el rendimiento puede verse afectado si se almacenan grandes cantidades de datos.

- **Sincronización**: Los cambios en `localStorage` no son automáticamente sincronizados entre pestañas o ventanas abiertas del mismo navegador. Si necesitas sincronización en tiempo real, considera otras técnicas como la sincronización mediante `postMessage` o WebSockets.

### **Conclusión**

`localStorage` es una herramienta poderosa y fácil de usar para almacenar datos en el navegador del usuario de forma persistente. Su API simple permite guardar, recuperar y eliminar datos sin necesidad de un servidor, lo que facilita la creación de aplicaciones web interactivas y con estado.
:::


## **Descripción del Proyecto**

### **Objetivo del Proyecto**

Desarrollar una aplicación web sencilla que permita gestionar productos mediante las operaciones básicas de CRUD (Crear, Leer, Actualizar y Eliminar). La aplicación simula el almacenamiento y manipulación de datos usando `localStorage` en lugar de una API real, lo que facilita la prueba y desarrollo sin requerir conexión a servidores externos.

### **Requisitos del Proyecto**

1. **Interfaz de Usuario (UI)**:
   - **Formulario de Entrada**: Debe permitir a los usuarios crear y actualizar productos. Los campos del formulario incluyen:
     - **Título**: Nombre del producto.
     - **Precio**: Precio del producto.
     - **Descripción**: Descripción breve del producto.
     - **Imagen**: URL de la imagen del producto.
     - **Categoría**: Categoría a la que pertenece el producto.
   - **Listado de Productos**: Debe mostrar todos los productos en una tabla con las siguientes columnas:
     - Título
     - Precio
     - Descripción
     - Imagen
     - Categoría
     - Acciones (Editar y Eliminar)

2. **Funciones CRUD**:
   - **Crear Producto**: Añadir un nuevo producto a `localStorage` y mostrarlo en la tabla.
   - **Leer Productos**: Recuperar los productos almacenados en `localStorage` y mostrar en la tabla.
   - **Actualizar Producto**: Editar un producto existente, actualizando los datos en `localStorage` y reflejando los cambios en la tabla.
   - **Eliminar Producto**: Eliminar un producto de `localStorage` y actualizar la visualización en la tabla.

3. **Uso de `localStorage`**:
   - Almacenar los productos en `localStorage` para simular la persistencia de datos sin necesidad de una API externa.
   - Realizar operaciones CRUD directamente sobre los datos en `localStorage`.

4. **Diseño y Estilo**:
   - Utilizar **Bootstrap** para diseñar y estilizar la interfaz de usuario.
   - Asegurarse de que el formulario ocupe media pantalla para facilitar la entrada de datos.
   - Mostrar los botones de edición y eliminación en la misma línea con un pequeño espacio entre ellos.

### **Estructura del Proyecto**

1. **Archivos HTML y CSS**:
   - `index.html`: Contiene la estructura de la página, incluyendo el formulario y la tabla para mostrar productos.
   - `styles.css`: Estilos adicionales para personalizar la apariencia de la aplicación (si es necesario).

2. **Archivo JavaScript**:
   - `crud.js`: Contiene el código JavaScript para implementar las funcionalidades CRUD. Incluye funciones para:
     - Obtener productos (`getProducts`).
     - Crear o actualizar productos (`createOrUpdateProduct`).
     - Eliminar productos (`deleteProduct`).
     - Renderizar productos en la tabla (`renderProducts`).
     - Editar productos (`editProduct`).
     - Restablecer el formulario (`resetForm`).

### **Instrucciones para el Ejercicio**

1. **Configuración Inicial**:
   - Crea un archivo HTML básico y enlázalo con Bootstrap y tu archivo `crud.js`.
   - Establece la estructura básica de la tabla y el formulario en el archivo HTML.

2. **Implementación de CRUD**:
   - **Leer Productos**:
     - Implementa la función `getProducts` para recuperar productos desde `localStorage` y mostrar en la tabla.
   - **Crear y Actualizar Productos**:
     - Implementa la función `createOrUpdateProduct` para añadir o modificar productos en `localStorage`.
   - **Eliminar Productos**:
     - Implementa la función `deleteProduct` para eliminar productos de `localStorage`.
   - **Renderizar Productos**:
     - Implementa la función `renderProducts` para mostrar los productos en la tabla HTML.

3. **Estilización**:
   - Usa Bootstrap para estilizar el formulario y la tabla. Asegúrate de que el formulario esté bien organizado y visible.

4. **Pruebas**:
   - Prueba todas las funcionalidades CRUD para asegurar que los productos se pueden crear, leer, actualizar y eliminar correctamente.
   - Verifica que los datos persisten entre recargas de la página.

### **Entrega del Proyecto**

- **Código Fuente**: Subir todos los archivos (`index.html`, `crud.js`, `styles.css`, etc.) a un repositorio de GitHub o entregarlos como un paquete comprimido.
- **Instrucciones de Ejecución**: Incluir instrucciones claras sobre cómo abrir el archivo HTML en un navegador para probar la aplicación.

Este ejercicio proporciona una práctica valiosa en la implementación de operaciones CRUD básicas, manejo de datos con `localStorage`, y el diseño de interfaces web utilizando HTML y Bootstrap.

## **Solución del Proyecto**

### **1. Archivo `index.html`**

Este archivo contiene la estructura de la página y el formulario para añadir o actualizar productos, así como la tabla para mostrar la lista de productos.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fakerstore CRUD</title>
    <!-- Bootstrap CSS -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            margin: 20px;
        }
        .form-container {
            margin-bottom: 20px;
        }
        .product-image {
            width: 50px;
            height: auto;
        }
        .btn-action {
            margin-right: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1 class="my-4">Fakerstore CRUD</h1>
        <div class="row">
            <div class="col-md-6 form-container">
                <h2>Product Form</h2>
                <form>
                    <input type="hidden" id="product-id">
                    <div class="form-group">
                        <label for="product-title">Title</label>
                        <input type="text" id="product-title" class="form-control" placeholder="Title">
                    </div>
                    <div class="form-group">
                        <label for="product-price">Price</label>
                        <input type="number" id="product-price" class="form-control" placeholder="Price">
                    </div>
                    <div class="form-group">
                        <label for="product-description">Description</label>
                        <input type="text" id="product-description" class="form-control" placeholder="Description">
                    </div>
                    <div class="form-group">
                        <label for="product-image">Image URL</label>
                        <input type="text" id="product-image" class="form-control" placeholder="Image URL">
                    </div>
                    <div class="form-group">
                        <label for="product-category">Category</label>
                        <input type="text" id="product-category" class="form-control" placeholder="Category">
                    </div>
                    <button type="button" class="btn btn-primary" onclick="createOrUpdateProduct()">Create/Update Product</button>
                </form>
            </div>
            <div class="col-md-6">
                <h2>Product List</h2>
                <table class="table table-bordered">
                    <thead class="thead-light">
                        <tr>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Image</th>
                            <th>Category</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody id="product-list"></tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- Bootstrap and jQuery JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <!-- Custom JS -->
    <script src="crud.js"></script>
</body>
</html>
```

### **2. Archivo `crud.js`**

Este archivo contiene la lógica JavaScript para manejar las operaciones CRUD. Utiliza `localStorage` para almacenar los datos de productos.

```javascript
const baseURL = "https://fakestoreapi.com/products";

const getProducts = async () => {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    if (products.length === 0) {
        try {
            const response = await fetch(baseURL);
            if (response.ok) {
                products = await response.json();
                localStorage.setItem("products", JSON.stringify(products));
            } else {
                console.log("Error al obtener los productos:", response.status);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }
    renderProducts(products);
};

const createOrUpdateProduct = async () => {
    const id = document.getElementById("product-id").value;
    const title = document.getElementById("product-title").value;
    const price = document.getElementById("product-price").value;
    const description = document.getElementById("product-description").value;
    const image = document.getElementById("product-image").value;
    const category = document.getElementById("product-category").value;

    const product = { id: id ? parseInt(id) : Date.now(), title, price, description, image, category };

    let products = JSON.parse(localStorage.getItem("products")) || [];

    if (id) {
        products = products.map(p => p.id === product.id ? product : p);
    } else {
        products.push(product);
    }

    localStorage.setItem("products", JSON.stringify(products));
    await getProducts();
    resetForm();
};

const deleteProduct = async (id) => {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    products = products.filter(p => p.id !== id);
    localStorage.setItem("products", JSON.stringify(products));
    await getProducts();
};

const renderProducts = (products) => {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    products.forEach(product => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${product.title}</td>
            <td>$${product.price}</td>
            <td>${product.description}</td>
            <td><img src="${product.image}" alt="${product.title}" class="product-image"></td>
            <td>${product.category}</td>
            <td>
                <button class="btn btn-secondary btn-sm btn-action" onclick="editProduct(${product.id})">Edit</button>
                <button class="btn btn-danger btn-sm btn-action" onclick="removeProduct(${product.id})">Delete</button>
            </td>
        `;

        productList.appendChild(tr);
    });
};

const editProduct = (id) => {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    const product = products.find(p => p.id === id);

    document.getElementById("product-id").value = product.id;
    document.getElementById("product-title").value = product.title;
    document.getElementById("product-price").value = product.price;
    document.getElementById("product-description").value = product.description;
    document.getElementById("product-image").value = product.image;
    document.getElementById("product-category").value = product.category;
};

const removeProduct = async (id) => {
    await deleteProduct(id);
    await getProducts();
};

const resetForm = () => {
    document.getElementById("product-id").value = "";
    document.getElementById("product-title").value = "";
    document.getElementById("product-price").value = "";
    document.getElementById("product-description").value = "";
    document.getElementById("product-image").value = "";
    document.getElementById("product-category").value = "";
};

getProducts();
```

## **Explicación de la Solución**

1. **Estructura HTML**:
   - **Formulario de Producto**: Incluye campos para ingresar los detalles del producto (Título, Precio, Descripción, Imagen, Categoría) y un botón para crear o actualizar el producto.
   - **Tabla de Productos**: Muestra la lista de productos con columnas para Título, Precio, Descripción, Imagen, Categoría y Acciones.

2. **JavaScript para CRUD**:
   - **`getProducts`**: Recupera los productos desde `localStorage`. Si no hay productos, obtiene los datos de una API simulada y almacena los resultados en `localStorage`.
   - **`createOrUpdateProduct`**: Añade un nuevo producto o actualiza uno existente en `localStorage`. Luego actualiza la vista con los productos actuales.
   - **`deleteProduct`**: Elimina un producto de `localStorage` y actualiza la vista.
   - **`renderProducts`**: Muestra los productos en la tabla HTML. Incluye botones para editar y eliminar productos.
   - **`editProduct`**: Llena el formulario con los datos del producto seleccionado para su edición.
   - **`removeProduct`**: Llama a `deleteProduct` para eliminar un producto y actualiza la vista.
   - **`resetForm`**: Limpia el formulario después de la creación o actualización de un producto.

3. **Estilos CSS**:
   - Se usan clases de Bootstrap para diseñar el formulario y la tabla.
   - El estilo adicional asegura que la imagen del producto tenga un tamaño adecuado y que los botones de acción tengan un pequeño espacio entre ellos.

Este proyecto ofrece una forma práctica de gestionar productos usando operaciones CRUD, con una interfaz sencilla y funcional. La solución muestra cómo

 usar `localStorage` para simular una base de datos en el navegador y cómo implementar una interfaz web interactiva con HTML, CSS y JavaScript.