---
sidebar_position: 3
---

# Control de Excepciones y Errores en JavaScript

## Introducción

El manejo de excepciones y errores es una parte crucial del desarrollo de software. En JavaScript, el control de excepciones permite a los desarrolladores gestionar y reaccionar adecuadamente a situaciones inesperadas que pueden surgir durante la ejecución de un programa. En este capítulo, aprenderás a capturar, manejar y generar excepciones, así como a utilizar las estructuras de control de excepciones disponibles en JavaScript.

## Conceptos Básicos

### ¿Qué es una Excepción?

Una excepción es un evento anómalo que ocurre durante la ejecución de un programa y que interrumpe el flujo normal de las instrucciones. Las excepciones pueden ser causadas por errores en el código, condiciones inesperadas o problemas externos.

### ¿Qué es el Control de Excepciones?

El control de excepciones es el proceso de anticipar y manejar estas excepciones de manera que el programa pueda continuar su ejecución o finalizar de manera controlada.

## Captura de Excepciones

### Estructura `try...catch`

La estructura `try...catch` permite capturar y manejar excepciones en JavaScript.

```javascript
try {
    // Código que puede lanzar una excepción
} catch (error) {
    // Código para manejar la excepción
}
```

#### Ejemplo:

```javascript
try {
    let resultado = 10 / 0; // Esto no lanza una excepción en JavaScript
    console.log(resultado);
} catch (error) {
    console.error('Se produjo un error:', error);
}
```

En este ejemplo, el bloque `try` contiene el código que podría lanzar una excepción. Si se lanza una excepción, el control pasa inmediatamente al bloque `catch`, donde se puede manejar el error.

### Ejemplo Práctico: Conversión de un Input a Número

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Control de Excepciones</title>
</head>
<body>
    <input type="text" id="inputNumero" placeholder="Ingresa un número">
    <button id="convertir">Convertir</button>
    <script>
        document.getElementById('convertir').addEventListener('click', function() {
            const input = document.getElementById('inputNumero').value;
            try {
                let numero = parseInt(input);
                if (isNaN(numero)) {
                    throw new Error('El valor ingresado no es un número');
                }
                console.log('Número convertido:', numero);
            } catch (error) {
                console.error('Se produjo un error:', error.message);
            }
        });
    </script>
</body>
</html>
```

### El Objeto de Error

Cuando una excepción es capturada, se pasa un objeto de error al bloque `catch`. Este objeto contiene información sobre el error.

#### Propiedades Comunes del Objeto de Error:

- `name`: El nombre del error (por ejemplo, `ReferenceError`, `TypeError`).
- `message`: Un mensaje descriptivo sobre el error.

```javascript
try {
    let resultado = 10 / variableInexistente; // Esto lanza una excepción
} catch (error) {
    console.error('Nombre del error:', error.name);
    console.error('Mensaje del error:', error.message);
}
```

### Ejemplo Práctico: Manejo de Referencias no Definidas

```javascript
try {
    let resultado = 10 / variableInexistente; // Esto lanza una excepción
} catch (error) {
    if (error instanceof ReferenceError) {
        console.error('Referencia no definida:', error.message);
    } else {
        console.error('Otro tipo de error:', error.message);
    }
}
```

## Generación de Excepciones

### Lanzar Excepciones con `throw`

Puedes lanzar tus propias excepciones usando la instrucción `throw`.

```javascript
function dividir(a, b) {
    if (b === 0) {
        throw new Error('No se puede dividir por cero');
    }
    return a / b;
}

try {
    let resultado = dividir(10, 0);
} catch (error) {
    console.error('Se produjo un error:', error.message);
}
```

### Ejemplo Práctico: Validación de Edad

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validación de Edad</title>
</head>
<body>
    <input type="text" id="inputEdad" placeholder="Ingresa tu edad">
    <button id="validar">Validar</button>
    <script>
        function validarEdad(edad) {
            if (edad < 0 || edad > 120) {
                throw new RangeError('Edad no válida');
            }
            return true;
        }

        document.getElementById('validar').addEventListener('click', function() {
            const input = document.getElementById('inputEdad').value;
            try {
                let edad = parseInt(input);
                if (isNaN(edad)) {
                    throw new Error('El valor ingresado no es un número');
                }
                validarEdad(edad);
                console.log('Edad válida:', edad);
            } catch (error) {
                console.error('Se produjo un error:', error.message);
            }
        });
    </script>
</body>
</html>
```

### Tipos de Errores

JavaScript proporciona varios tipos de errores incorporados que puedes usar con `throw`:

- `Error`: El tipo de error genérico.
- `SyntaxError`: Error de sintaxis en el código.
- `ReferenceError`: Error de referencia cuando una variable no está definida.
- `TypeError`: Error de tipo cuando un valor no es del tipo esperado.
- `RangeError`: Error cuando un valor no está en el rango permitido.

#### Ejemplo:

```javascript
try {
    throw new TypeError('Este es un error de tipo');
} catch (error) {
    console.error('Nombre del error:', error.name);
    console.error('Mensaje del error:', error.message);
}
```

### Ejemplo Práctico: Manejo de Diferentes Tipos de Errores

```javascript
try {
    JSON.parse("{ malformed json }"); // Esto lanza un SyntaxError
} catch (error) {
    if (error instanceof SyntaxError) {
        console.error('Error de sintaxis:', error.message);
    } else {
        console.error('Otro tipo de error:', error.message);
    }
}
```

## Estructura `finally`

El bloque `finally` se utiliza para ejecutar código que debe ejecutarse siempre, independientemente de si se lanzó una excepción o no.

```javascript
try {
    // Código que puede lanzar una excepción
} catch (error) {
    // Código para manejar la excepción
} finally {
    // Código que se ejecuta siempre
}
```

### Ejemplo Práctico: Limpieza de Recursos

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Limpieza de Recursos</title>
</head>
<body>
    <button id="procesar">Procesar</button>
    <script>
        document.getElementById('procesar').addEventListener('click', function() {
            try {
                console.log('Comenzando procesamiento...');
                // Simula un error
                throw new Error('Error durante el procesamiento');
            } catch (error) {
                console.error('Se produjo un error:', error.message);
            } finally {
                console.log('Limpieza de recursos');
            }
        });
    </script>
</body>
</html>
```

## Anidación de `try...catch`

Puedes anidar bloques `try...catch` para manejar excepciones en diferentes niveles de tu código.

#### Ejemplo:

```javascript
try {
    try {
        let resultado = 10 / variableInexistente; // Esto lanza una excepción
    } catch (error) {
        console.error('Error en el nivel interno:', error.message);
        throw error; // Relanza la excepción
    }
} catch (error) {
    console.error('Error en el nivel externo:', error.message);
}
```

### Ejemplo Práctico: Manejo Anidado de Excepciones

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Excepciones Anidadas</title>
</head>
<body>
    <button id="anidar">Ejecutar</button>
    <script>
        document.getElementById('anidar').addEventListener('click', function() {
            try {
                try {
                    let resultado = 10 / variableInexistente; // Esto lanza una excepción
                } catch (error) {
                    console.error('Error en el nivel interno:', error.message);
                    throw error; // Relanza la excepción
                }
            } catch (error) {
                console.error('Error en el nivel externo:', error.message);
            }
        });
    </script>
</body>
</html>
```

## Conclusión

El control de excepciones es una herramienta poderosa para hacer que tu código sea más robusto y confiable. Al capturar,

 manejar y lanzar excepciones adecuadamente, puedes anticipar problemas y reaccionar de manera controlada a situaciones inesperadas, mejorando así la experiencia del usuario y la estabilidad de tu aplicación.