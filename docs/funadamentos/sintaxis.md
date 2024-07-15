---
sidebar_position: 2
---

# Sintaxis Básica

## Variables y Constantes

### Introducción
Las variables y constantes son elementos fundamentales en cualquier lenguaje de programación. En JavaScript, las variables y constantes se utilizan para almacenar datos que pueden cambiar o permanecer constantes durante la ejecución de un programa. Este capítulo cubrirá cómo declarar, inicializar y utilizar variables y constantes en JavaScript, así como las mejores prácticas asociadas.

### Declaración y Asignación de Variables
En JavaScript, las variables se pueden declarar utilizando tres palabras clave: `var`, `let` y `const`. Cada una tiene sus propias características y usos específicos.

### `var`
Antes de ES6 (ECMAScript 2015), `var` era la única manera de declarar variables en JavaScript. Sin embargo, tiene algunas limitaciones y comportamientos que pueden llevar a errores, como el hoisting y la falta de scope de bloque.

**Ejemplo:**
```javascript
var nombre = "Juan";
console.log(nombre); // Salida: Juan

var nombre = "Pedro";
console.log(nombre); // Salida: Pedro
```

### `let`
Introducido en ES6, `let` es ahora la manera recomendada de declarar variables que pueden cambiar su valor. A diferencia de `var`, `let` tiene un scope de bloque, lo que significa que su alcance se limita al bloque en el que se declara.

**Ejemplo:**
```javascript
let edad = 25;
console.log(edad); // Salida: 25

edad = 26;
console.log(edad); // Salida: 26

if (true) {
    let edad = 30;
    console.log(edad); // Salida: 30 (dentro del bloque)
}

console.log(edad); // Salida: 26 (fuera del bloque)
```


:::info diferencia entre `let`y `var`
La diferencia entre `var` y `let` en JavaScript radica en cómo gestionan el scope (ámbito), el hoisting (elevación) y algunas particularidades en su comportamiento. A continuación, se detallan las principales diferencias:

## Scope (Ámbito)

### `var`
- **Scope de función:** Las variables declaradas con `var` tienen un scope de función, lo que significa que son accesibles dentro de toda la función en la que se declaran.
- **Scope global:** Si `var` se declara fuera de cualquier función, se convierte en una propiedad del objeto global (`window` en el navegador).

**Ejemplo:**

```javascript
function ejemploVar() {
    if (true) {
        var mensaje = "Hola, var";
    }
    console.log(mensaje); // "Hola, var"
}

ejemploVar();
console.log(mensaje); // Error: mensaje is not defined (fuera del scope de la función)
```

### `let`
- **Scope de bloque:** Las variables declaradas con `let` tienen un scope de bloque, lo que significa que solo son accesibles dentro del bloque (`{}`) en el que se declaran.

**Ejemplo:**

```javascript
function ejemploLet() {
    if (true) {
        let mensaje = "Hola, let";
        console.log(mensaje); // "Hola, let"
    }
    console.log(mensaje); // Error: mensaje is not defined (fuera del scope del bloque)
}

ejemploLet();
```

## Hoisting (Elevación)

### `var`
- **Hoisting con inicialización a `undefined`:** Las declaraciones de variables con `var` se elevan al inicio de su contexto (función o global), pero se inicializan con `undefined`.

**Ejemplo:**

```javascript
console.log(nombre); // undefined
var nombre = "Juan";
console.log(nombre); // "Juan"
```

Internamente, JavaScript trata el código como si fuera:

```javascript
var nombre;
console.log(nombre); // undefined
nombre = "Juan";
console.log(nombre); // "Juan"
```

### `let`
- **Hoisting sin inicialización:** Las declaraciones de variables con `let` también se elevan, pero no se inicializan. Intentar acceder a ellas antes de su declaración produce un `ReferenceError`.

**Ejemplo:**

```javascript
console.log(nombre); // Error: Cannot access 'nombre' before initialization
let nombre = "Juan";
console.log(nombre); // "Juan"
```

Internamente, JavaScript trata el código como si fuera:

```javascript
let nombre;
console.log(nombre); // Error: Cannot access 'nombre' before initialization
nombre = "Juan";
console.log(nombre); // "Juan"
```

## Re-declaración

### `var`
- **Permitido en el mismo scope:** Puedes re-declarar una variable con `var` en el mismo scope sin producir un error.

**Ejemplo:**

```javascript
var saludo = "Hola";
var saludo = "Adiós";
console.log(saludo); // "Adiós"
```

### `let`
- **No permitido en el mismo scope:** Re-declarar una variable con `let` en el mismo scope produce un error.

**Ejemplo:**

```javascript
let saludo = "Hola";
let saludo = "Adiós"; // Error: Identifier 'saludo' has already been declared
```

### Variables en bucles

#### `var`
- **No crea un nuevo scope en cada iteración:** Usar `var` en bucles no crea un nuevo scope para cada iteración, lo que puede llevar a comportamientos inesperados.

**Ejemplo:**

```javascript
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}
// Salida: 3, 3, 3 (después de 1 segundo)
```

### `let`
- **Crea un nuevo scope en cada iteración:** Usar `let` en bucles crea un nuevo scope para cada iteración, preservando el valor de la variable en cada iteración.

**Ejemplo:**

```javascript
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}
// Salida: 0, 1, 2 (después de 1 segundo)
```

### Conclusión

La elección entre `var` y `let` depende del comportamiento deseado:

- Usa `let` (o `const` para valores constantes) cuando necesites declarar variables con un scope de bloque, prevenir re-declaraciones y evitar errores relacionados con el hoisting.
- Usa `var` si necesitas compatibilidad con versiones muy antiguas de JavaScript, aunque en la mayoría de los casos modernos, `let` y `const` son preferidos por su manejo más seguro y predecible del scope y el hoisting.

Comprender estas diferencias te permitirá escribir código más robusto y mantener un mejor control sobre el comportamiento de tus variables en JavaScript.
:::

## `const`
También introducido en ES6, `const` se utiliza para declarar constantes, es decir, valores que no cambian una vez asignados. Como `let`, `const` tiene un scope de bloque.

**Ejemplo:**
```javascript
const PI = 3.14159;
console.log(PI); // Salida: 3.14159

// Intentar reasignar una constante causará un error
// PI = 3.14; // Error: Assignment to constant variable.
```

## Mejores Prácticas
- **Usa `const` por defecto:** Declara todas las variables con `const` a menos que sepas que su valor necesitará cambiar. Esto ayuda a evitar errores accidentales y hace el código más predecible.
- **Usa `let` cuando necesites reasignar:** Solo usa `let` cuando necesites declarar una variable cuyo valor cambiará.
- **Evita `var`:** `var` tiene problemas de scope y hoisting que pueden llevar a errores difíciles de depurar. Prefiere `let` y `const` para una mejor claridad y seguridad.

## Hoisting
El hoisting es un comportamiento de JavaScript donde las declaraciones de variables y funciones se "mueven" al inicio de su scope antes de la ejecución del código. Este comportamiento puede ser confuso y es una razón para preferir `let` y `const` sobre `var`.

**Ejemplo:**
```javascript
console.log(nombre); // Salida: undefined
var nombre = "Juan";

// Es equivalente a:
var nombre;
console.log(nombre); // Salida: undefined
nombre = "Juan";
```

Con `let` y `const`, las variables no se inicializan hasta que la ejecución llega a su declaración.

**Ejemplo:**
```javascript
console.log(nombre); // Error: Cannot access 'nombre' before initialization
let nombre = "Juan";
```

## Tipos de Datos y Asignación
JavaScript es un lenguaje dinámico, lo que significa que una variable puede contener diferentes tipos de datos a lo largo de su ciclo de vida.

**Ejemplo:**
```javascript
let variable = 42;       // Número
variable = "Hola";       // Cadena de texto
variable = true;         // Booleano
variable = { nombre: "Juan" }; // Objeto
variable = [1, 2, 3];    // Array
```

## Variables Globales y Locales
- **Variables Globales:** Declaradas fuera de cualquier función o bloque, son accesibles desde cualquier parte del código.
- **Variables Locales:** Declaradas dentro de una función o bloque, son accesibles solo dentro de ese contexto.

**Ejemplo:**
```javascript
let global = "Soy global";

function mostrarMensaje() {
    let local = "Soy local";
    console.log(global); // Accede a la variable global
    console.log(local);  // Accede a la variable local
}

mostrarMensaje();
console.log(global); // Salida: Soy global
// console.log(local); // Error: local is not defined
```

## Tipos de Datos en JavaScript

## Introducción
Los tipos de datos son fundamentales en cualquier lenguaje de programación, ya que determinan qué tipo de valores pueden almacenar y cómo se pueden manipular. JavaScript es un lenguaje dinámico, lo que significa que las variables pueden contener diferentes tipos de datos en distintos momentos de la ejecución del programa. En este capítulo, exploraremos los tipos de datos primitivos y complejos en JavaScript y cómo se utilizan.

## Tipos de Datos Primitivos
Los tipos de datos primitivos son los valores más básicos y no pueden descomponerse en otros valores. En JavaScript, los tipos de datos primitivos incluyen: `number`, `string`, `boolean`, `null`, `undefined`, `symbol` y `bigint`.

## Number
El tipo `number` se utiliza para representar tanto números enteros como números de punto flotante.

**Ejemplo:**

```javascript
let entero = 42;
let decimal = 3.14;
```

## String
El tipo `string` se utiliza para representar secuencias de caracteres. Puedes usar comillas simples (`'`), comillas dobles (`"`) o comillas invertidas (`` ` ``) para definir strings.

**Ejemplo:**

```javascript
let mensaje = "Hola, mundo!";
let saludo = '¡Buenos días!';
let template = `El valor de entero es ${entero}`;
```

## Boolean
El tipo `boolean` solo puede tener dos valores: `true` o `false`. Se utiliza para representar valores lógicos.

**Ejemplo:**

```javascript
let esMayor = true;
let esMenor = false;
```

## Null
El valor `null` representa la ausencia intencional de cualquier objeto o valor.

**Ejemplo:**

```javascript
let vacio = null;
```

## Undefined
El valor `undefined` indica que una variable ha sido declarada pero aún no se le ha asignado un valor.

**Ejemplo:**

```javascript
let indefinido;
console.log(indefinido); // Salida: undefined
```

### Symbol
El tipo `symbol` es un tipo de dato primitivo único y inmutable que se utiliza para crear identificadores únicos.

**Ejemplo:**

```javascript
let simbolo1 = Symbol("descripcion");
let simbolo2 = Symbol("descripcion");
console.log(simbolo1 === simbolo2); // Salida: false
```

## BigInt
El tipo `bigint` se utiliza para representar enteros de gran tamaño que no pueden ser representados con el tipo `number`.

**Ejemplo:**

```javascript
let numeroGrande = 1234567890123456789012345678901234567890n;
console.log(numeroGrande); // Salida: 1234567890123456789012345678901234567890n
```

## Tipos de Datos Complejos
Los tipos de datos complejos pueden almacenar colecciones de valores y más complejos que los tipos primitivos. En JavaScript, los principales tipos de datos complejos son `object` y `array`.

## Object
El tipo `object` es una colección de pares clave-valor. Puedes usar objetos para almacenar datos estructurados y representarlos como entidades del mundo real.

**Ejemplo:**

```javascript
let persona = {
    nombre: "Juan",
    edad: 30,
    saludo: function() {
        console.log("Hola, soy " + this.nombre);
    }
};

console.log(persona.nombre); // Salida: Juan
persona.saludo(); // Salida: Hola, soy Juan
```

## Array
El tipo `array` es una colección ordenada de elementos. Los arrays se utilizan para almacenar listas de valores y proporcionan métodos integrados para manipular estos valores.

**Ejemplo:**

```javascript
let frutas = ["manzana", "banana", "cereza"];
console.log(frutas[0]); // Salida: manzana

frutas.push("naranja");
console.log(frutas); // Salida: ["manzana", "banana", "cereza", "naranja"]
```

:::info ¿Qué es un array

Imagina que tienes una caja con compartimentos donde puedes guardar diferentes objetos, como juguetes, libros, o cualquier cosa que se te ocurra. En programación, un array (o arreglo) es como esa caja con compartimentos, pero en lugar de guardar objetos físicos, guarda datos. Un array te permite almacenar varios valores en una sola variable, y puedes acceder a cada valor usando un número de índice.

#### ¿Cómo se ve un Array?

Un array en JavaScript se parece a una lista de elementos encerrados entre corchetes `[]`, separados por comas.

**Ejemplo de un Array de frutas:**

```javascript
let frutas = ["manzana", "banana", "cereza"];
```

En este ejemplo, el array `frutas` contiene tres elementos: `"manzana"`, `"banana"` y `"cereza"`.

#### Acceder a los Elementos de un Array

Cada elemento de un array tiene una posición específica, llamada índice. Los índices empiezan en 0. Así, el primer elemento tiene el índice 0, el segundo elemento tiene el índice 1, y así sucesivamente.

**Ejemplo:**

```javascript
let frutas = ["manzana", "banana", "cereza"];

console.log(frutas[0]); // Salida: "manzana"
console.log(frutas[1]); // Salida: "banana"
console.log(frutas[2]); // Salida: "cereza"
```

En este ejemplo, `frutas[0]` accede al primer elemento del array, que es `"manzana"`, `frutas[1]` accede al segundo elemento, que es `"banana"`, y `frutas[2]` accede al tercer elemento, que es `"cereza"`.

#### Cambiar Elementos en un Array

También puedes cambiar los valores en un array accediendo a ellos por su índice y asignándoles un nuevo valor.

**Ejemplo:**

```javascript
let frutas = ["manzana", "banana", "cereza"];
frutas[1] = "naranja";

console.log(frutas); // Salida: ["manzana", "naranja", "cereza"]
```

En este ejemplo, el segundo elemento del array `frutas` se cambia de `"banana"` a `"naranja"`.

#### Añadir y Eliminar Elementos

Puedes añadir nuevos elementos a un array usando el método `push`, y eliminar el último elemento usando el método `pop`.

**Añadir Elementos:**

```javascript
let frutas = ["manzana", "banana", "cereza"];
frutas.push("naranja");

console.log(frutas); // Salida: ["manzana", "banana", "cereza", "naranja"]
```

**Eliminar el Último Elemento:**

```javascript
let frutas = ["manzana", "banana", "cereza"];
frutas.pop();

console.log(frutas); // Salida: ["manzana", "banana"]
```

#### Recorrer un Array

A menudo, querrás realizar una acción en cada elemento de un array. Puedes hacerlo usando un bucle `for`.

**Ejemplo:**

```javascript
let frutas = ["manzana", "banana", "cereza"];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
```

En este ejemplo, el bucle `for` recorre cada elemento del array `frutas` y lo imprime en la consola.

#### Resumen

- Un array es una lista de elementos almacenados en una sola variable.
- Los elementos de un array se acceden usando índices, que empiezan en 0.
- Puedes cambiar, añadir y eliminar elementos en un array.
- Los arrays son útiles para almacenar y manipular colecciones de datos.
:::


## Otros Tipos de Datos

## Function
En JavaScript, las funciones son objetos de primera clase, lo que significa que pueden ser asignadas a variables, pasadas como argumentos y devueltas por otras funciones.

**Ejemplo:**

```javascript
function saludar(nombre) {
    return "Hola, " + nombre;
}

let mensaje = saludar("Carlos");
console.log(mensaje); // Salida: Hola, Carlos
```

## Date
El tipo `Date` se utiliza para trabajar con fechas y horas.

**Ejemplo:**

```javascript
let fechaActual = new Date();
console.log(fechaActual); // Salida: la fecha y hora actual
```

#### Conversión de Tipos
En JavaScript, puedes convertir valores de un tipo a otro de manera explícita o implícita.

## Conversión Explícita

```javascript
let numeroString = "123";
let numero = Number(numeroString); // Conversión a número
console.log(numero); // Salida: 123

let booleano = Boolean(1); // Conversión a booleano
console.log(booleano); // Salida: true
```

## Conversión Implícita

```javascript
let resultado = "5" * 2; // La cadena "5" se convierte implícitamente en número
console.log(resultado); // Salida: 10

let concatenacion = "5" + 2; // El número 2 se convierte implícitamente en cadena
console.log(concatenacion); // Salida: "52"
```

## Comparaciones de Tipos
JavaScript proporciona dos operadores para comparar valores: `==` y `===`. El operador `==` realiza una comparación no estricta, lo que significa que intenta convertir los valores a un tipo común antes de compararlos. El operador `===` realiza una comparación estricta, sin conversión de tipos.

**Ejemplo:**

```javascript
console.log(5 == "5"); // Salida: true (comparación no estricta)
console.log(5 === "5"); // Salida: false (comparación estricta)
```

## Conclusión
Comprender los tipos de datos en JavaScript es crucial para escribir código eficaz y evitar errores. Los tipos primitivos y complejos tienen diferentes usos y características, y conocer cómo manipular y convertir estos tipos te permitirá manejar datos de manera más efectiva. Practica con diferentes tipos de datos y aprende cómo interactúan entre sí para mejorar tus habilidades en JavaScript.



