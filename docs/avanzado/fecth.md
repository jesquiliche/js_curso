---
sidebar_position: 3
---

# APIs Web y Fetch

## Introducción

Las APIs Web permiten la interacción entre tu aplicación y otros servicios a través de peticiones HTTP. En JavaScript, la Fetch API es una herramienta moderna y flexible para realizar estas peticiones. En este capítulo, exploraremos cómo usar la Fetch API para hacer peticiones HTTP, cómo manejar datos JSON, y técnicas avanzadas para optimizar el manejo de peticiones y respuestas.

## Uso de Fetch API para hacer peticiones HTTP

### ¿Qué es la Fetch API?

La Fetch API proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, tales como peticiones y respuestas. También ofrece un método global `fetch()` que permite hacer peticiones HTTP de manera sencilla y es compatible con promesas, facilitando el manejo asíncrono de datos.

### Haciendo una Petición GET

Para hacer una petición GET y obtener datos de un servidor, se utiliza el método `fetch()`. Este método devuelve una promesa que se resuelve con la respuesta de la petición.

**Ejemplo Básico de Fetch:**
```javascript
fetch('https://api.example.com/data')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Convierte la respuesta en JSON
    })
    .then(data => {
        console.log(data); // Maneja los datos recibidos
    })
    .catch(error => {
        console.error('Error:', error); // Maneja errores
    });
```

### Haciendo una Petición POST

Para enviar datos a un servidor, se utiliza una petición POST. Se debe especificar el método, los headers y el cuerpo de la petición. Asegúrate de manejar correctamente los encabezados y el formato del cuerpo.

**Ejemplo Básico de Fetch con POST:**
```javascript
fetch('https://api.example.com/data', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        nombre: 'Juan',
        edad: 30
    })
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => {
    console.log('Success:', data);
})
.catch(error => {
    console.error('Error:', error);
});
```

### Haciendo Peticiones con Otros Métodos HTTP

Además de GET y POST, puedes usar otros métodos HTTP como PUT, DELETE, PATCH, etc.

**Ejemplo de Fetch con PUT:**
```javascript
fetch('https://api.example.com/data/1', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        nombre: 'Juan',
        edad: 31
    })
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => {
    console.log('Update successful:', data);
})
.catch(error => {
    console.error('Error:', error);
});
```

**Ejemplo de Fetch con DELETE:**
```javascript
fetch('https://api.example.com/data/1', {
    method: 'DELETE'
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => {
    console.log('Delete successful:', data);
})
.catch(error => {
    console.error('Error:', error);
});
```

## Manejo de Datos JSON

### ¿Qué es JSON?

JSON (JavaScript Object Notation) es un formato ligero de intercambio de datos que es fácil de leer y escribir para los humanos, y fácil de parsear y generar para las máquinas. Es el formato más común para enviar y recibir datos en aplicaciones web.

### Parseando JSON

Cuando se recibe una respuesta en formato JSON, se debe parsear para convertirla en un objeto JavaScript utilizable. La Fetch API facilita este proceso con el método `.json()`.

**Ejemplo de Parseo de JSON:**
```javascript
fetch('https://api.example.com/data')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Convierte la respuesta en JSON
    })
    .then(data => {
        console.log(data); // Ahora data es un objeto JavaScript
    });
```

### Enviando JSON

Para enviar datos en formato JSON, se debe convertir el objeto JavaScript en una cadena JSON utilizando `JSON.stringify()`. Asegúrate de establecer el encabezado adecuado para el tipo de contenido.

**Ejemplo de Envío de JSON:**
```javascript
const data = {
    nombre: 'Juan',
    edad: 30
};

fetch('https://api.example.com/data', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => {
    console.log('Success:', data);
})
.catch(error => {
    console.error('Error:', error);
});
```

## Manejo de Errores y Excepciones

### Manejo de Errores de Red

Los errores de red pueden ocurrir debido a problemas de conectividad, errores del servidor, o respuestas no válidas. Usa `catch` para manejar estos errores y proporcionar una experiencia de usuario más robusta.

**Ejemplo de Manejo de Errores:**
```javascript
fetch('https://api.example.com/data')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });
```

### Manejo de Errores de Validación

En el lado del cliente, puedes verificar si los datos cumplen con el formato esperado antes de enviarlos al servidor.

**Ejemplo de Validación de Datos:**
```javascript
const data = {
    nombre: 'Juan',
    edad: 'treinta' // Esto debería ser un número
};

if (typeof data.edad !== 'number') {
    console.error('La edad debe ser un número');
} else {
    fetch('https://api.example.com/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
```

### Manejo de Excepciones con `try...catch`

El uso de `try...catch` en combinación con `async/await` permite una sintaxis más limpia y legible para manejar errores. Esta técnica es particularmente útil cuando se realizan varias peticiones encadenadas o cuando se manejan múltiples operaciones asíncronas.

**Ejemplo de Manejo de Excepciones con `try...catch`:**
```javascript
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

fetchData();
```

## Técnicas Avanzadas con Fetch

## Conclusión

La Fetch API es una herramienta poderosa y flexible para realizar peticiones HTTP en JavaScript. Entender cómo manejar datos JSON  te permitirá optimizar el rendimiento y la estabilidad de tus aplicaciones. Con este conocimiento, estarás mejor preparado para interactuar con APIs y manejar datos de manera eficiente en tus proyectos, asegurando tanto la funcional