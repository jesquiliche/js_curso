---
sidebar_position: 7
---

# Funciones

## Introducción
Las funciones son bloques de código reutilizables que realizan una tarea específica. En JavaScript, las funciones son ciudadanos de primera clase, lo que significa que pueden ser asignadas a variables, pasadas como argumentos a otras funciones y devueltas desde otras funciones. Este capítulo explorará cómo declarar y usar funciones, trabajar con parámetros y valores de retorno, y entender el scope y el contexto (`this`) en JavaScript.

## Declaración y Expresión de Funciones

### Declaración de Funciones
Una declaración de función define una función con el nombre proporcionado y un cuerpo de código que se ejecuta cuando se llama a la función.

**Sintaxis:**

```javascript
function nombreDeFuncion(parámetros) {
    // cuerpo de la función
}
```

**Ejemplo:**

```javascript
function saludar(nombre) {
    console.log("Hola, " + nombre + "!");
}

saludar("Juan"); // Salida: "Hola, Juan!"
```

### Expresión de Funciones
Una expresión de función define una función dentro de una expresión y puede ser anónima (sin nombre). Las expresiones de funciones no se elevan (hoisted), lo que significa que no se pueden llamar antes de ser definidas.

**Sintaxis:**

```javascript
const nombreDeFuncion = function(parámetros) {
    // cuerpo de la función
};
```

**Ejemplo:**

```javascript
const saludar = function(nombre) {
    console.log("Hola, " + nombre + "!");
};

saludar("María"); // Salida: "Hola, María!"
```

### Funciones Flecha
Las funciones flecha proporcionan una sintaxis más concisa para escribir funciones. No tienen su propio `this`, `arguments`, `super` o `new.target`.

**Sintaxis:**

```javascript
const nombreDeFuncion = (parámetros) => {
    // cuerpo de la función
};
```

**Ejemplo:**

```javascript
const saludar = (nombre) => {
    console.log("Hola, " + nombre + "!");
};

saludar("Carlos"); // Salida: "Hola, Carlos!"
```

## Parámetros y Valores de Retorno

### Parámetros
Las funciones pueden aceptar parámetros, que son valores pasados a la función cuando se llama.

**Ejemplo:**

```javascript
function sumar(a, b) {
    return a + b;
}

console.log(sumar(2, 3)); // Salida: 5
```

### Valores por Defecto
Puedes asignar valores por defecto a los parámetros para que se utilicen si no se proporciona ningún valor al llamar a la función.

**Ejemplo:**

```javascript
function saludar(nombre = "Desconocido") {
    console.log("Hola, " + nombre + "!");
}

saludar(); // Salida: "Hola, Desconocido!"
```

### Valores de Retorno
Las funciones pueden devolver valores usando la palabra clave `return`. Si no se especifica un valor de retorno, la función devuelve `undefined` por defecto.

**Ejemplo:**

```javascript
function multiplicar(a, b) {
    return a * b;
}

let resultado = multiplicar(4, 5);
console.log(resultado); // Salida: 20
```

### Scope y Contexto (`this`)

### Scope
El scope define el contexto en el cual las variables están disponibles para su uso. JavaScript tiene dos tipos principales de scope: global y local.

- **Scope Global**: Variables declaradas fuera de cualquier función tienen un scope global y están disponibles en cualquier parte del código.

- **Scope Local**: Variables declaradas dentro de una función tienen un scope local y solo están disponibles dentro de esa función.

**Ejemplo:**

```javascript
let globalVar = "Soy global";

function miFuncion() {
    let localVar = "Soy local";
    console.log(globalVar); // Salida: "Soy global"
    console.log(localVar);  // Salida: "Soy local"
}

miFuncion();
console.log(localVar); // Error: localVar is not defined
```

### Contexto (`this`)
El contexto, o `this`, se refiere al objeto desde el cual se invocó la función. El valor de `this` depende de cómo se llama a la función.

**En el contexto global:**

```javascript
console.log(this); // En el navegador, `this` se refiere al objeto `window`.
```

**Dentro de un objeto:**

```javascript
const persona = {
    nombre: "Juan",
    saludar: function() {
        console.log("Hola, " + this.nombre + "!");
    }
};

persona.saludar(); // Salida: "Hola, Juan!" (this se refiere a persona)
```

**En una función:**

```javascript
function mostrarThis() {
    console.log(this);
}

mostrarThis(); // En el navegador, `this` se refiere al objeto `window`.
```

**En una función flecha:**

Las funciones flecha no tienen su propio `this`. Heredan el `this` del contexto en el cual fueron definidas.

```javascript
const persona = {
    nombre: "Ana",
    saludar: () => {
        console.log("Hola, " + this.nombre + "!"); // `this` se refiere al contexto global
    }
};

persona.saludar(); // Salida: "Hola, undefined!"
```

## Conclusión
Las funciones son una parte fundamental de JavaScript, permitiendo encapsular lógica y reutilizar código. Entender cómo declarar y usar funciones, trabajar con parámetros y valores de retorno, y manejar el scope y el contexto (`this`) te permitirá escribir código más modular y eficiente. Con la práctica, te familiarizarás con las distintas formas de definir y utilizar funciones en tus programas JavaScript.

¡Gracias por señalarlo! La forma correcta del módulo en el último ejemplo debería evitar el uso innecesario de paréntesis. A continuación te proporciono el capítulo corregido y ampliado sobre closures en JavaScript:

---

## Entendiendo los Closures en JavaScript

### Introducción

Los closures son uno de los conceptos más poderosos y a la vez más complejos en JavaScript. Comprender cómo funcionan puede mejorar enormemente tus habilidades de programación, permitiéndote escribir código más eficiente y limpio. En este capítulo, exploraremos en profundidad qué son los closures, cómo funcionan y algunos ejemplos prácticos de su uso.

### ¿Qué es un Closure?

Un closure es una función que recuerda el entorno en el que fue creada. Este entorno incluye cualquier variable local que estaba en el alcance de la función en el momento de su creación. En otras palabras, un closure permite que una función acceda a variables de su ámbito exterior incluso después de que la función exterior haya terminado de ejecutarse.

### Creando un Closure

Para entender los closures, consideremos el siguiente ejemplo:

```javascript
function createCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

En este ejemplo, `createCounter` es una función que define una variable local `count` y devuelve una nueva función. Esta función interna es un closure porque "recuerda" el entorno en el que fue creada, es decir, recuerda la variable `count`. Cada vez que llamamos a `counter`, la función interna accede y modifica `count`, manteniendo su estado entre llamadas.

### Ejemplo Práctico

Para ilustrar mejor cómo los closures pueden ser utilizados de diferentes maneras, veamos dos ejemplos prácticos que resaltan distintos usos de los closures:

#### 1. Contador Múltiple con Métodos (Encapsulación de Datos)

```javascript
function createCounter() {
    let count = 0;

    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1.increment()); // 1
console.log(counter1.increment()); // 2
console.log(counter1.decrement()); // 1
console.log(counter2.increment()); // 1
```

En este ejemplo, `createCounter` retorna un objeto con tres métodos: `increment`, `decrement` y `getCount`. Cada uno de estos métodos es un closure que comparte el mismo entorno, permitiendo acceder y modificar la variable `count`. Esto encapsula los datos, asegurando que `count` solo pueda ser modificado mediante estos métodos.

#### 2. Usando Closures en Callbacks (Funciones Callback)

```javascript
function createDelayedLogger(message, delay) {
    return function() {
        setTimeout(function() {
            console.log(message);
        }, delay);
    };
}

const logHello = createDelayedLogger("Hello, world!", 1000);
const logGoodbye = createDelayedLogger("Goodbye, world!", 2000);

logHello(); // Se registra "Hello, world!" después de 1 segundo
logGoodbye(); // Se registra "Goodbye, world!" después de 2 segundos
```

En este ejemplo, `createDelayedLogger` crea una función que registra un mensaje después de un retraso especificado. La función retornada es un closure que "recuerda" el valor de `message` y `delay` incluso después de que `createDelayedLogger` haya terminado de ejecutarse. Esto es útil en programación asincrónica donde se necesita capturar el entorno en el momento de la creación del callback.

### Ejemplo Avanzado: Módulo

```javascript
const CounterModule = (function() {
    let count = 0;

    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
})();
```

En este ejemplo, `CounterModule` es un módulo que encapsula la variable `count` y expone métodos para interactuar con ella. Los métodos `increment`, `decrement` y `getCount` son closures que mantienen el estado de `count`.

### Usos Comunes de los Closures

1. **Encapsulación de Datos:**
   Los closures permiten crear funciones que pueden acceder a variables privadas. Esto es útil para proteger datos de acceso o modificación externa.

2. **Funciones Callback:**
   Los closures son frecuentemente usados en callbacks, especialmente en programación asincrónica con `setTimeout`, `setInterval`, y eventos.

3. **Módulos:**
   Los closures pueden ser usados para crear módulos, un patrón de diseño que agrupa funciones relacionadas, variables y otros elementos, encapsulándolos y exponiendo solo la interfaz pública.

4. **Funciones Generadoras de Funciones:**
   Puedes usar closures para crear funciones generadoras que personalizan su comportamiento según los parámetros iniciales.

### Ejemplo Adicional: Generador de Funciones

```javascript
function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```

En este ejemplo, `createMultiplier` es una función que toma un multiplicador y retorna una nueva función. La función retornada es un closure que "recuerda" el valor del multiplicador y lo usa para multiplicar cualquier número que se le pase. Esto muestra cómo los closures pueden ser usados para crear funciones altamente personalizadas y reutilizables.

### Consideraciones sobre el Rendimiento

Aunque los closures son poderosos, su uso indebido puede llevar a problemas de rendimiento y consumo de memoria. Cada vez que se crea un closure, el entorno léxico (variables y funciones) se mantiene en memoria hasta que el closure ya no sea accesible. Por lo tanto, es importante ser consciente de cómo y cuándo se crean los closures, especialmente en aplicaciones de larga duración o con muchas operaciones repetitivas.

### Conclusión

Los closures son una característica fundamental de JavaScript que permite a las funciones recordar y acceder a su entorno léxico incluso después de que la función exterior haya terminado de ejecutarse. Entender los closures te permitirá escribir código más flexible y modular. Practicar con ejemplos como los anteriores te ayudará a dominar este concepto esencial. Con su capacidad para encapsular datos y crear funciones altamente personalizadas, los closures son una herramienta indispensable en el arsenal de cualquier desarrollador de JavaScript.
