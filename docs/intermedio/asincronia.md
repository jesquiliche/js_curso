---
sidebar_position: 5
---

# Asincronía en JavaScript

## Introducción

En JavaScript, la asincronía te permite hacer varias cosas al mismo tiempo sin que tu aplicación se congele. Esto es especialmente útil cuando quieres realizar tareas que toman tiempo, como solicitar datos de un servidor, sin detener el resto de la aplicación. En este capítulo, exploraremos tres formas de manejar la asincronía: callbacks, promesas y `async/await`. También haremos una práctica con una llamada a una API de Pokémon para mostrar cómo obtener datos de manera asíncrona.

## Callbacks

### ¿Qué es un Callback?

Un callback es una función que se pasa a otra función para que se ejecute cuando la primera función termine su trabajo. Es como pedirle a alguien que te avise cuando haya terminado de hacer una tarea.

### Ejemplo Básico de Callback

Imagina que quieres hacer algo en una página web cuando el usuario hace clic en un botón. Puedes usar un callback para ejecutar el código después de que se haya hecho clic en el botón.

**HTML:**
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Callbacks en JavaScript</title>
</head>
<body>
    <button id="miBoton">Haz algo</button>
    <script src="app.js"></script>
</body>
</html>
```

**JavaScript (app.js):**
```javascript
const boton = document.getElementById('miBoton');

function hacerAlgoDespues(callback) {
    console.log('Haciendo algo...');
    setTimeout(callback, 2000); // Espera 2 segundos antes de ejecutar el callback
}

boton.addEventListener('click', function() {
    hacerAlgoDespues(function() {
        console.log('Hecho después de 2 segundos');
    });
});
```

En este código:
- Cuando haces clic en el botón, se llama a la función `hacerAlgoDespues`.
- `hacerAlgoDespues` hace algo (en este caso, solo espera 2 segundos) y luego ejecuta el callback.

### Callbacks Anidados y el "Callback Hell"

Cuando usas callbacks dentro de otros callbacks, el código puede volverse difícil de leer. Esto se llama "callback hell".

**Ejemplo de Callback Hell:**
```javascript
hacerAlgoDespues(function() {
    console.log('Primera tarea completa');
    hacerAlgoDespues(function() {
        console.log('Segunda tarea completa');
        hacerAlgoDespues(function() {
            console.log('Tercera tarea completa');
        });
    });
});
```

Aquí, cada tarea debe esperar a que la anterior termine, lo que puede hacer que el código se vea desordenado y sea difícil de seguir.

## Promesas

### ¿Qué es una Promesa?

Una promesa es como una promesa en la vida real: te dice que algo sucederá en el futuro. Las promesas tienen tres estados:
- **Pendiente**: La promesa todavía está esperando a resolverse.
- **Cumplida (Resolved)**: La promesa se ha completado con éxito.
- **Rechazada (Rejected)**: La promesa ha fallado.

Las promesas hacen que el código asincrónico sea más fácil de manejar que los callbacks.

### Creación y Uso de Promesas

**Ejemplo Básico de Promesa:**
```javascript
const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const exito = true; // Cambia esto para simular éxito o fallo
        if (exito) {
            resolve('Operación exitosa'); // La promesa se cumple
        } else {
            reject('Operación fallida'); // La promesa se rechaza
        }
    }, 2000);
});

miPromesa
    .then((mensaje) => {
        console.log(mensaje); // 'Operación exitosa'
    })
    .catch((error) => {
        console.error(error); // 'Operación fallida'
    });
```

En este ejemplo:
- Creamos una promesa que se resolverá después de 2 segundos.
- Usamos `.then()` para manejar el caso de éxito y `.catch()` para manejar el caso de error.

### Encadenamiento de Promesas

Puedes encadenar varias promesas para realizar varias tareas en orden.

**Ejemplo de Encadenamiento:**
```javascript
miPromesa
    .then((mensaje) => {
        console.log(mensaje); // 'Operación exitosa'
        return 'Siguiente operación'; // Devuelve un nuevo valor
    })
    .then((mensaje) => {
        console.log(mensaje); // 'Siguiente operación'
    })
    .catch((error) => {
        console.error(error); // 'Operación fallida'
    });
```

Aquí, después de que la primera promesa se cumple, puedes realizar una segunda operación con el resultado.

### Manejo de Múltiples Promesas

Si necesitas esperar a que varias promesas se resuelvan, puedes usar `Promise.all`.

**Ejemplo de `Promise.all`:**
```javascript
async function cargarDatos() {
    const promesa1 = new Promise((resolve) => {
        setTimeout(() => resolve('Datos 1'), 2000);
    });
    const promesa2 = new Promise((resolve) => {
        setTimeout(() => resolve('Datos 2'), 3000);
    });

    try {
        const resultados = await Promise.all([promesa1, promesa2]);
        console.log(resultados); // ['Datos 1', 'Datos 2']
    } catch (error) {
        console.error('Error al cargar datos', error);
    }
}

cargarDatos();
```

En este caso, `Promise.all` espera que ambas promesas se completen antes de continuar.

## Async/Await

### ¿Qué es Async/Await?

`async/await` es una forma moderna de trabajar con promesas que hace que el código sea más fácil de leer y escribir. `async` convierte una función en asíncrona, y dentro de esta función puedes usar `await` para esperar a que una promesa se resuelva.

### Funciones Asíncronas

**Ejemplo Básico de Async/Await:**
```javascript
async function miFuncionAsincrona() {
    try {
        const mensaje = await new Promise((resolve) => {
            setTimeout(() => resolve('Operación exitosa'), 2000);
        });
        console.log(mensaje); // 'Operación exitosa'
    } catch (error) {
        console.error(error); // Manejo de errores
    }
}

miFuncionAsincrona();
```

En este código:
- `async` convierte `miFuncionAsincrona` en una función asíncrona.
- `await` espera a que la promesa se resuelva antes de continuar.

### Ventajas de Async/Await

`async/await` hace que el código asincrónico se vea más como código normal y secuencial, lo que facilita su comprensión y mantenimiento.

### Ejemplo Práctico: Llamada a la API de Pokémon

Vamos a ver cómo usar `async/await` para obtener información de la API de Pokémon y mostrarla en una página web.

**HTML:**
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Async/Await y API de Pokémon</title>
</head>
<body>
    <button id="cargarPokemon">Cargar Pokémon</button>
    <div id="resultado"></div>
    <script src="app.js"></script>
</body>
</html>
```

**JavaScript (app.js):**
```javascript
const boton = document.getElementById('cargarPokemon');
const resultado = document.getElementById('resultado');

async function obtenerPokemon(pokemon) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    try {
        const respuesta = await fetch(url); // Hace la solicitud a la API
        if (!respuesta.ok) {
            throw new Error('No se pudo obtener el Pokémon');
        }
        const datos = await respuesta.json(); // Convierte la respuesta en JSON
        return datos;
    } catch (error) {
        console.error(error);
        throw error; // Lanza el error para manejarlo más tarde
    }
}

boton.addEventListener('click', async function() {
    try {
        const datos = await obtenerPokemon('pikachu'); // Cambia 'pikachu' por el nombre del Pokémon que desees
        resultado.innerHTML = `
            <h2>${datos.name.charAt(0).toUpperCase() + datos.name.slice(1)}</h2>
            <img src="${datos.sprites.front_default}" alt="${datos.name}" />
            <p>Altura: ${datos.height / 10} m</p>
            <p>Peso: ${datos.weight / 10} kg</p>
        `;
    } catch (error) {
        resultado.innerText = 'Error al cargar datos del Pokémon';
    }
});
```

En este ejemplo:
- Cuando haces clic en el botón, se llama a la función `obtenerPokemon` para solicitar datos de un Pokémon desde la API.
- `await` espera a que la respuesta de la API se reciba y

 se convierta en JSON.
- Los datos del Pokémon se muestran en la página.

## Conclusión

La asincronía es clave para crear aplicaciones web rápidas y eficientes. Con callbacks, promesas y `async/await`, JavaScript ofrece diferentes formas de manejar tareas que toman tiempo, como solicitar datos de un servidor. `async/await` es especialmente útil para escribir código que se lee de manera clara y secuencial, facilitando la gestión de operaciones asincrónicas.
