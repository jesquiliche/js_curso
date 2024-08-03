---
sidebar_position: 5
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

Para trabajar con cookies en JavaScript, puedes crear, leer y borrar cookies con las siguientes instrucciones:

```javascript
// Crear una cookie
document.cookie = "username=JohnDoe; expires=Fri, 31 Dec 2023 23:59:59 GMT; path=/";
```

Aquí estamos creando una cookie llamada `username` con el valor `JohnDoe`. El atributo `expires` establece la fecha en que la cookie debe caducar. La cookie se eliminará automáticamente después de esta fecha. El atributo `path` asegura que la cookie sea válida en todo el sitio web.

```javascript
// Leer cookies
console.log(document.cookie);
```

Este código imprime todas las cookies disponibles para el dominio actual. Las cookies están formateadas como una cadena que contiene pares clave-valor separados por punto y coma.

```javascript
// Borrar una cookie
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
```

Para borrar una cookie, se establece su valor en una cadena vacía y se le asigna una fecha de expiración en el pasado. Esto hace que el navegador elimine la cookie.

### Ejemplos Prácticos

**Autenticación de Usuario**:
Las cookies se utilizan comúnmente para almacenar tokens de autenticación que permiten mantener la sesión del usuario. A continuación, se muestra cómo almacenar y leer un token de autenticación:

```javascript
// Almacenar token de autenticación
document.cookie = "authToken=abc123; secure; HttpOnly;";
```

Aquí almacenamos un token de autenticación `abc123` en una cookie. Los atributos `secure` y `HttpOnly` aseguran que la cookie solo se envíe a través de HTTPS y no sea accesible mediante JavaScript, respectivamente, lo que mejora la seguridad.

```javascript
// Leer el token de autenticación
function getAuthToken() {
    let name = "authToken=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
```

La función `getAuthToken` busca el token de autenticación en las cookies. Decodifica la cadena de cookies y divide las cookies en un array. Luego, busca el token específico y lo devuelve si está presente.

**Preferencias del Usuario**:
Las cookies también pueden usarse para guardar configuraciones del usuario, como el idioma preferido.

```javascript
// Guardar idioma preferido
document.cookie = "language=en; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";
```

Este código guarda el idioma preferido del usuario en una cookie con el valor `en`. La cookie expirará el 31 de diciembre de 2024.

```javascript
// Leer idioma preferido
function getPreferredLanguage() {
    let name = "language=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

const language = getPreferredLanguage();
if (language) {
    console.log(`Idioma preferido: ${language}`);
}
```

La función `getPreferredLanguage` obtiene el idioma preferido del usuario almacenado en la cookie y lo imprime en la consola.

### 2. Local Storage

**Local Storage** es una forma de almacenamiento del lado del cliente que permite almacenar datos de manera persistente. Los datos en Local Storage no tienen fecha de expiración y persisten incluso después de cerrar el navegador.

### Características de Local Storage

- **Tamaño**: Puede almacenar hasta 5-10 MB de datos, dependiendo del navegador.
- **Persistencia**: Los datos persisten hasta que son explícitamente eliminados.
- **Accesibilidad**: Solo es accesible desde el cliente (JavaScript).

### Uso de Local Storage

Para trabajar con Local Storage en JavaScript, puedes almacenar, leer y eliminar datos con las siguientes instrucciones:

```javascript
// Almacenar datos
localStorage.setItem('username', 'JohnDoe');
```

Este código almacena el valor `JohnDoe` bajo la clave `username`. Los datos permanecen en el almacenamiento local del navegador incluso después de cerrar la ventana o reiniciar el navegador.

```javascript
// Leer datos
console.log(localStorage.getItem('username'));
```

Esto recupera el valor almacenado bajo la clave `username` y lo imprime en la consola.

```javascript
// Borrar datos
localStorage.removeItem('username');
```

Este código elimina el dato asociado con la clave `username` del almacenamiento local.

```javascript
// Borrar todos los datos
localStorage.clear();
```

El método `clear` elimina todos los datos almacenados en Local Storage.

### Ejemplos Prácticos

**Preferencias de Usuario**:
Local Storage se utiliza para almacenar configuraciones del usuario que deben persistir entre recargas de página y cierres del navegador.

```javascript
// Guardar preferencias del usuario
localStorage.setItem('theme', 'dark');
```

Aquí estamos guardando la preferencia de tema del usuario como `dark`. Esta preferencia se mantendrá incluso si el usuario recarga la página o cierra el navegador.

```javascript
// Recuperar preferencias del usuario
const theme = localStorage.getItem('theme');
if (theme) {
    document.body.classList.add(theme);
}
```

Este código recupera la preferencia de tema y aplica la clase correspondiente al cuerpo del documento, cambiando el tema de la página.

**Datos del Carrito de Compras**:
Local Storage es útil para almacenar datos relacionados con el carrito de compras, asegurando que los artículos no se pierdan entre recargas.

```javascript
// Agregar un artículo al carrito
let carrito = JSON.parse(localStorage.getItem('cart')) || [];
carrito.push({ id: 1, name: 'Camiseta', quantity: 2 });
localStorage.setItem('cart', JSON.stringify(carrito));
```

Este fragmento recupera el carrito de compras almacenado, agrega un nuevo artículo y guarda el carrito actualizado. Si el carrito no existe, se crea un array vacío.

```javascript
// Mostrar artículos del carrito
const storedCart = JSON.parse(localStorage.getItem('cart'));
if (storedCart) {
    storedCart.forEach(item => {
        console.log(`Artículo: ${item.name}, Cantidad: ${item.quantity}`);
    });
}
```

Esto recupera los artículos almacenados en el carrito y los muestra en la consola.

### 3. Session Storage

**Session Storage** es similar a Local Storage, pero los datos solo persisten durante la sesión del navegador. Los datos se eliminan cuando la pestaña o ventana del navegador se cierra.

### Características de Session Storage

- **Tamaño**: Puede almacenar hasta 5-10 MB de datos, dependiendo del navegador.
- **Persistencia**: Los datos persisten solo durante la sesión del navegador.
- **Accesibilidad**: Solo es accesible desde el cliente (JavaScript).

### Uso de Session Storage

Para trabajar con Session Storage en JavaScript, puedes almacenar, leer y eliminar datos con las siguientes instrucciones:

```javascript
// Almacenar datos
sessionStorage.setItem('username', 'JohnDoe');
```

Este código almacena el valor `JohnDoe` bajo la clave `username`. Los datos permanecen mientras la pestaña del navegador esté abierta.

```javascript
// Leer datos
console.log(sessionStorage.getItem('username'));
```

Esto recupera el valor almacenado bajo la clave `username` y lo imprime en la consola.

```javascript
// Borrar datos
session

Storage.removeItem('username');
```

Este código elimina el dato asociado con la clave `username` del almacenamiento de sesión.

```javascript
// Borrar todos los datos
sessionStorage.clear();
```

El método `clear` elimina todos los datos almacenados en Session Storage.

### Ejemplos Prácticos

**Datos Temporales del Formulario**:
Session Storage es útil para mantener datos temporales mientras el usuario navega en una única sesión, como los datos de un formulario que se están completando.

```javascript
// Guardar datos temporales del formulario
sessionStorage.setItem('formData', JSON.stringify({ name: 'John', age: 30 }));
```

Este fragmento almacena los datos del formulario, como el nombre y la edad, en formato JSON. Los datos permanecen mientras la pestaña del navegador esté abierta.

```javascript
// Recuperar datos temporales del formulario
const formData = JSON.parse(sessionStorage.getItem('formData'));
if (formData) {
    document.querySelector('#name').value = formData.name;
    document.querySelector('#age').value = formData.age;
}
```

Esto recupera los datos del formulario almacenados y los utiliza para rellenar los campos del formulario en la página.

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

---