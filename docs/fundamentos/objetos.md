---
sidebar_position: 5
---
# Objetos y Arrays

## Introducción

Los objetos y arrays son estructuras de datos fundamentales en JavaScript. Los objetos permiten agrupar datos y funcionalidades relacionadas, mientras que los arrays proporcionan una manera de almacenar y manipular listas de elementos. Este capítulo explorará cómo crear y manipular objetos, así como los métodos más comunes para trabajar con arrays.

## Creación y Manipulación de Objetos

### Creación de Objetos

En JavaScript, un objeto es una colección de propiedades, donde cada propiedad es una asociación entre un nombre (o clave) y un valor.

**Sintaxis:**

```javascript
let objeto = {
    clave1: valor1,
    clave2: valor2,
    // más propiedades
};
```

**Ejemplo:**

```javascript
let persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "Desarrollador"
};

console.log(persona.nombre); // Salida: "Juan"
console.log(persona["edad"]); // Salida: 30
```

### Acceso y Modificación de Propiedades

Puedes acceder a las propiedades de un objeto utilizando la notación de punto (`.`) o la notación de corchetes (`[]`). También puedes modificar las propiedades del objeto.

**Ejemplo:**

```javascript
let coche = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020
};

// Acceso
console.log(coche.marca); // Salida: "Toyota"
console.log(coche["modelo"]); // Salida: "Corolla"

// Modificación
coche.año = 2021;
console.log(coche.año); // Salida: 2021

coche["color"] = "rojo";
console.log(coche.color); // Salida: "rojo"
```

### Métodos de Objetos

Los métodos son funciones que son propiedades de un objeto. Pueden realizar operaciones utilizando los datos del objeto.

**Ejemplo:**

```javascript
let persona = {
    nombre: "Ana",
    saludar: function() {
        console.log("Hola, " + this.nombre + "!");
    }
};

persona.saludar(); // Salida: "Hola, Ana!"
```

### Recorrer las Propiedades de un Objeto

Puedes usar un bucle `for...in` para recorrer las propiedades de un objeto.

**Ejemplo:**

```javascript
let persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "Desarrollador"
};

for (let propiedad in persona) {
    console.log(propiedad + ": " + persona[propiedad]);
}

// Salida:
// nombre: Juan
// edad: 30
// profesion: Desarrollador
```

### Desestructuración de Objetos

La desestructuración permite extraer valores de objetos y asignarlos a variables de una manera más concisa.

**Ejemplo:**

```javascript
let persona = {
    nombre: "Carlos",
    edad: 28,
    profesion: "Ingeniero"
};

let { nombre, edad, profesion } = persona;
console.log(nombre); // Salida: "Carlos"
console.log(edad); // Salida: 28
console.log(profesion); // Salida: "Ingeniero"
```

### Propagación en Objetos

La propagación permite copiar las propiedades de un objeto a otro de manera sencilla.

**Ejemplo:**

```javascript
let objetoOriginal = { a: 1, b: 2 };
let objetoCopiado = { ...objetoOriginal, c: 3 };

console.log(objetoCopiado); // Salida: { a: 1, b: 2, c: 3 }
```

## Arrays y sus Métodos más Comunes

### Creación de Arrays

Un array es una lista de elementos. Puedes crear un array utilizando corchetes (`[]`) y separar los elementos con comas.

**Sintaxis:**

```javascript
let array = [elemento1, elemento2, elemento3];
```

**Ejemplo:**

```javascript
let frutas = ["manzana", "banana", "cereza"];
console.log(frutas[0]); // Salida: "manzana"
```

### Métodos Comunes de Arrays

#### Añadir y Eliminar Elementos

- **`push`**: Añade uno o más elementos al final del array.

```javascript
frutas.push("naranja");
console.log(frutas); // Salida: ["manzana", "banana", "cereza", "naranja"]
```

- **`pop`**: Elimina el último elemento del array y lo devuelve.

```javascript
let ultimaFruta = frutas.pop();
console.log(ultimaFruta); // Salida: "naranja"
console.log(frutas); // Salida: ["manzana", "banana", "cereza"]
```

- **`shift`**: Elimina el primer elemento del array y lo devuelve.

```javascript
let primeraFruta = frutas.shift();
console.log(primeraFruta); // Salida: "manzana"
console.log(frutas); // Salida: ["banana", "cereza"]
```

- **`unshift`**: Añade uno o más elementos al principio del array.

```javascript
frutas.unshift("limón");
console.log(frutas); // Salida: ["limón", "banana", "cereza"]
```

#### Otros Métodos Útiles

- **`length`**: Devuelve el número de elementos en el array.

```javascript
console.log(frutas.length); // Salida: 3
```

- **`forEach`**: Ejecuta una función proporcionada una vez por cada elemento del array.

```javascript
frutas.forEach(function(fruta) {
    console.log(fruta);
});

// Salida:
// "limón"
// "banana"
// "cereza"
```

- **`map`**: Crea un nuevo array con los resultados de llamar a una función proporcionada en cada elemento del array.

```javascript
let frutasMayusculas = frutas.map(function(fruta) {
    return fruta.toUpperCase();
});
console.log(frutasMayusculas); // Salida: ["LIMÓN", "BANANA", "CEREZA"]
```

- **`filter`**: Crea un nuevo array con todos los elementos que pasan una prueba implementada por una función proporcionada.

```javascript
let frutasConA = frutas.filter(function(fruta) {
    return fruta.includes("a");
});
console.log(frutasConA); // Salida: ["banana", "cereza"]
```

- **`reduce`**: Aplica una función a un acumulador y a cada valor del array (de izquierda a derecha) para reducirlo a un solo valor.

```javascript
let numeros = [1, 2, 3, 4];
let suma = numeros.reduce(function(acumulador, valorActual) {
    return acumulador + valorActual;
}, 0);
console.log(suma); // Salida: 10
```

- **`find`**: Devuelve el primer elemento del array que satisface la función de prueba proporcionada.

```javascript
let frutaEncontrada = frutas.find(function(fruta) {
    return fruta === "banana";
});
console.log(frutaEncontrada); // Salida: "banana"
```

- **`findIndex`**: Devuelve el índice del primer elemento del array que satisface la función de prueba proporcionada. De lo contrario, devuelve -1.

```javascript
let indiceFruta = frutas.findIndex(function(fruta) {
    return fruta === "cereza";
});
console.log(indiceFruta); // Salida: 2
```

- **`splice`**: Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.

```javascript
frutas.splice(1, 1, "kiwi");
console.log(frutas); // Salida: ["limón", "kiwi", "cereza"]
```

- **`concat`**: Combina dos o más arrays y devuelve un nuevo array.

```javascript
let masFrutas = ["pera", "uva"];
let todasLasFrutas = frutas.concat(masFrutas);
console.log(todasLasFrutas); // Salida: ["limón", "kiwi", "cereza", "pera", "uva"]
```

- **`slice`**: Devuelve una copia superficial de una porción de un array dentro de un nuevo array.

```javascript
let algunasFrutas = frutas.slice(1, 3);
console.log(algunasFrutas); // Salida: ["kiwi", "cereza"]
```

### Desestructuración de Arrays

La desestructuración permite extraer valores de arrays y asignarlos a variables de una manera más concisa.

**Ejemplo:**

```javascript
let frutas = ["manzana", "banana", "cereza"];

let [primera, segunda, tercera] = frutas;
console.log(primera); // Salida: "manzana"
console.log(segunda); // Salida: "banana"
console.log(tercera); // Salida: "cereza"
```

### Propagación en Arrays

La propagación permite copiar los elementos de un array a otro de manera sencilla.

**Ejemplo:**

```javascript
let frutasOriginales = ["manzana", "banana"];
let frutasNuevas = [...frutasOriginales, "cereza", "uva"];

console.log(frutasNuevas); // Salida: ["manzana", "banana", "cereza", "uva"]
``