---
sidebar_position: 6
---
# Uso de `Map` y `Set` en JavaScript

## Introducción

JavaScript ofrece dos poderosas estructuras de datos: `Map` y `Set`. `Map` es ideal para asociar pares clave-valor con cualquier tipo de clave, mientras que `Set` se utiliza para almacenar valores únicos. Este capítulo profundiza en estas estructuras de datos, proporcionando una comprensión completa de su uso, métodos y casos prácticos.

## `Map`

### Características de `Map`

- **Tipo de Claves**: Las claves pueden ser de cualquier tipo, incluyendo objetos, funciones y valores primitivos.
- **Orden de Inserción**: Los elementos se mantienen en el orden en que fueron insertados.
- **Propiedad `size`**: Retorna el número de elementos en el `Map`.

### Métodos del `Map`

#### `set(key, value)`
Agrega o actualiza un par clave-valor en el `Map`.

```javascript
let map = new Map();
map.set('key1', 'value1');
map.set(2, 'value2');
```

#### `get(key)`
Retorna el valor asociado a la clave especificada.

```javascript
console.log(map.get('key1')); // 'value1'
```

#### `has(key)`
Verifica si una clave existe en el `Map`.

```javascript
console.log(map.has(2)); // true
```

#### `delete(key)`
Elimina el par clave-valor asociado a la clave especificada.

```javascript
map.delete(2);
```

#### `clear()`
Elimina todos los elementos del `Map`.

```javascript
map.clear();
```

#### `size`
Retorna el número de elementos en el `Map`.

```javascript
console.log(map.size); // 0 (after clear)
```

#### `keys()`, `values()`, `entries()`
Retornan iteradores para las claves, valores y pares clave-valor, respectivamente.

```javascript
let map = new Map();
map.set('a', 1);
map.set('b', 2);

for (let key of map.keys()) {
    console.log(key); // 'a', 'b'
}

for (let value of map.values()) {
    console.log(value); // 1, 2
}

for (let [key, value] of map.entries()) {
    console.log(`${key}: ${value}`); // 'a: 1', 'b: 2'
}
```

#### `forEach(callbackFn, thisArg)`
Ejecuta una función para cada par clave-valor en el `Map`.

```javascript
map.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});
```

### Ejemplos Prácticos de `Map`

#### Contador de Palabras

```javascript
function wordCounter(text) {
    let wordMap = new Map();
    let words = text.split(/\W+/);

    for (let word of words) {
        word = word.toLowerCase();
        if (wordMap.has(word)) {
            wordMap.set(word, wordMap.get(word) + 1);
        } else {
            wordMap.set(word, 1);
        }
    }
    return wordMap;
}

let text = "Hello world! Hello everyone. Welcome to the world of JavaScript.";
let wordCount = wordCounter(text);

wordCount.forEach((count, word) => {
    console.log(`${word}: ${count}`);
});
```

## `Set`

### Características de `Set`

- **Valores Únicos**: Un `Set` almacena valores únicos, eliminando automáticamente los duplicados.
- **Orden de Inserción**: Los valores se mantienen en el orden en que fueron insertados.
- **Propiedad `size`**: Retorna el número de valores en el `Set`.

### Métodos del `Set`

#### `add(value)`
Agrega un valor al `Set`.

```javascript
let set = new Set();
set.add(1);
set.add(2);
set.add(2); // Duplicado, no se agrega
```

#### `has(value)`
Verifica si un valor existe en el `Set`.

```javascript
console.log(set.has(2)); // true
console.log(set.has(3)); // false
```

#### `delete(value)`
Elimina un valor del `Set`.

```javascript
set.delete(2);
```

#### `clear()`
Elimina todos los valores del `Set`.

```javascript
set.clear();
```

#### `size`
Retorna el número de valores en el `Set`.

```javascript
console.log(set.size); // 0 (after clear)
```

#### `keys()`, `values()`, `entries()`
Retornan iteradores para los valores en el `Set`. `values` y `keys` son equivalentes en `Set`, y `entries` retorna pares [valor, valor] para compatibilidad con `Map`.

```javascript
let set = new Set([1, 2, 3]);

for (let value of set.values()) {
    console.log(value); // 1, 2, 3
}

for (let [value1, value2] of set.entries()) {
    console.log(value1, value2); // 1 1, 2 2, 3 3
}
```

#### `forEach(callbackFn, thisArg)`
Ejecuta una función para cada valor en el `Set`.

```javascript
set.forEach(value => {
    console.log(value);
});
```

### Ejemplos Prácticos de `Set`

#### Eliminación de Duplicados

```javascript
let numbers = [1, 2, 3, 4, 4, 5, 5, 6];
let uniqueNumbers = new Set(numbers);
console.log([...uniqueNumbers]); // [1, 2, 3, 4, 5, 6]
```

#### Operaciones de Conjunto

```javascript
let setA = new Set([1, 2, 3]);
let setB = new Set([3, 4, 5]);

// Unión
let union = new Set([...setA, ...setB]);
console.log([...union]); // [1, 2, 3, 4, 5]

// Intersección
let intersection = new Set([...setA].filter(x => setB.has(x)));
console.log([...intersection]); // [3]

// Diferencia
let difference = new Set([...setA].filter(x => !setB.has(x)));
console.log([...difference]); // [1, 2]
```

## Comparación entre `Map` y `Set` con Objetos y Arrays

### `Map` vs. `Object`

- **Claves de cualquier tipo**: `Map` permite claves no primitivas, mientras que `Object` solo permite cadenas o símbolos.
- **Orden de inserción**: `Map` mantiene el orden de inserción, mientras que `Object` no garantiza un orden específico.
- **Métodos de iteración**: `Map` proporciona métodos específicos (`keys`, `values`, `entries`, `forEach`), haciendo la iteración más intuitiva.

### `Set` vs. `Array`

- **Valores únicos**: `Set` asegura valores únicos automáticamente, mientras que `Array` permite duplicados.
- **Operaciones de conjunto**: `Set` facilita operaciones como unión, intersección y diferencia, que son menos eficientes con `Array`.
- **Métodos de iteración**: `Set` proporciona métodos (`values`, `entries`, `forEach`) que simplifican la iteración.

## Casos Prácticos y Ejemplos

### Uso de `Map` para Contar Frecuencias

```javascript
function countOccurrences(arr) {
    let map = new Map();
    for (let item of arr) {
        if (map.has(item)) {
            map.set(item, map.get(item) + 1);
        } else {
            map.set(item, 1);
        }
    }
    return map;
}

let items = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
let itemCount = countOccurrences(items);
itemCount.forEach((count, item) => {
    console.log(`${item}: ${count}`);
});
```

### Uso de `Set` para Filtrar Valores Únicos

```javascript
let names = ['Alice', 'Bob', 'Alice', 'Eve', 'Bob'];
let uniqueNames = new Set(names);
console.log([...uniqueNames]); // ['Alice', 'Bob', 'Eve']
```

### Gestión de Conjuntos con `Set`

```javascript
let groupA = new Set(['Alice', 'Bob', 'Charlie']);
let groupB = new Set(['Bob', 'Dave', 'Eve']);

// Unión
let union = new Set([...groupA, ...groupB]);
console.log([...union]); // ['Alice', 'Bob', 'Charlie', 'Dave', 'Eve']

// Intersección
let intersection = new Set([...groupA].filter(name => groupB.has(name)));
console.log([...intersection]); // ['Bob']

// Diferencia
let difference = new Set([...groupA].filter(name => !groupB.has(name)));
console.log([...difference]); // ['Alice', 'Charlie']
```

## Conclusión

`Map` y `Set` son estructuras de datos poderosas en JavaScript que ofrecen características avanzadas y flexibilidad superior en comparación con los objetos y arrays tradicionales. `Map` es ideal para almacenar pares clave-valor con claves de cualquier tipo y manteniendo el orden