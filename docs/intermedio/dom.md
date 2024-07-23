---
sidebar_position: 2
---

# Manipulación del DOM en JavaScript

## Introducción
El Document Object Model (DOM) es una representación en forma de árbol de los elementos de una página web. Manipular el DOM significa cambiar la estructura, contenido y estilo de una página web usando JavaScript. En este capítulo, aprenderás cómo seleccionar elementos, modificar su contenido y estilos, y manejar eventos.

## Selección de Elementos

Para interactuar con los elementos de una página web, primero necesitas seleccionarlos. Hay varias maneras de seleccionar elementos en el DOM usando JavaScript.

### getElementById
#### Seleccionar Elementos por ID

Puedes seleccionar un elemento por su ID usando el método `getElementById`.

**HTML:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manipulación del DOM</title>
</head>
<body>
    <div id="miElemento">Hola, mundo!</div>
    <script src="app.js"></script>
</body>
</html>
```

**JavaScript (app.js):**
```javascript
const elemento = document.getElementById('miElemento');
console.log(elemento); // Muestra el div con id "miElemento" en la consola
```

### getElementsByClassName
#### Seleccionar Elementos por Clase

Puedes seleccionar todos los elementos que comparten una misma clase usando el método `getElementsByClassName`.

**HTML:**
```html
<div class="miClase">Elemento 1</div>
<div class="miClase">Elemento 2</div>
```

**JavaScript:**
```javascript
const elementos = document.getElementsByClassName('miClase');
console.log(elementos); // Muestra una colección de los elementos con clase "miClase"
```

### getElementsByTagName
#### Seleccionar Elementos por Etiqueta

Puedes seleccionar todos los elementos de un tipo específico de etiqueta usando el método `getElementsByTagName`.

**HTML:**
```html
<p>Párrafo 1</p>
<p>Párrafo 2</p>
```

**JavaScript:**
```javascript
const parrafos = document.getElementsByTagName('p');
console.log(parrafos); // Muestra una colección de los elementos <p>
```

### querySelector y querySelectorAll
#### Selección Avanzada con `querySelector` y `querySelectorAll`

Puedes usar `querySelector` y `querySelectorAll` para hacer selecciones más avanzadas usando selectores CSS.

**HTML:**
```html
<div class="miClase">Elemento 1</div>
<div class="miClase">Elemento 2</div>
```

**JavaScript:**
```javascript
const primerElemento = document.querySelector('.miClase');
console.log(primerElemento); // Muestra el primer elemento con clase "miClase"

const todosLosElementos = document.querySelectorAll('.miClase');
console.log(todosLosElementos); // Muestra una colección de todos los elementos con clase "miClase"
```

## Modificación de Contenido y Estilos

Una vez que has seleccionado los elementos, puedes modificar su contenido y estilos.

### innerText y textContent
#### Modificar el Contenido

Puedes cambiar el contenido de texto de un elemento usando `innerText` o `textContent`.

**HTML:**
```html
<div id="miElemento">Texto original</div>
```

**JavaScript:**
```javascript
const elemento = document.getElementById('miElemento');
elemento.innerText = 'Nuevo contenido de texto'; // Cambia el texto visible del elemento
```

Para cambiar el contenido HTML de un elemento, usa `innerHTML`.

```javascript
elemento.innerHTML = '<strong>Contenido HTML</strong>'; // Cambia el contenido HTML del elemento
```

### style
#### Modificar Estilos

Puedes cambiar los estilos de un elemento accediendo a su propiedad `style`.

```javascript
elemento.style.color = 'red'; // Cambia el color del texto del elemento a rojo
elemento.style.backgroundColor = 'yellow'; // Cambia el color de fondo del elemento a amarillo
```

### classList
#### Agregar y Quitar Clases

Puedes agregar, quitar o verificar clases CSS usando `classList`.

```javascript
elemento.classList.add('nuevaClase'); // Agrega la clase "nuevaClase" al elemento
elemento.classList.remove('miClase'); // Quita la clase "miClase" del elemento
elemento.classList.toggle('otraClase'); // Agrega la clase "otraClase" si no está, o la quita si ya está
```

### createElement
#### Crear Nuevos Elementos

Puedes crear nuevos elementos en el DOM usando el método `createElement`.

**HTML:**
```html
<div id="contenedor"></div>
```

**JavaScript:**
```javascript
const nuevoElemento = document.createElement('p');
nuevoElemento.innerText = 'Este es un nuevo párrafo';
const contenedor = document.getElementById('contenedor');
contenedor.appendChild(nuevoElemento); // Añade el nuevo párrafo al contenedor
```

### createDocumentFragment
#### Crear Fragmentos de Documento

Un `DocumentFragment` es un contenedor ligero para elementos del DOM que no se renderiza en la página hasta que se agrega a un elemento existente. Es útil para construir y agregar múltiples elementos a la vez sin causar repintado o reflujo excesivo.

**HTML:**
```html
<div id="contenedor"></div>
```

**JavaScript:**
```javascript
const fragmento = document.createDocumentFragment();

const parrafo1 = document.createElement('p');
parrafo1.innerText = 'Párrafo 1';

const parrafo2 = document.createElement('p');
parrafo2.innerText = 'Párrafo 2';

fragmento.appendChild(parrafo1);
fragmento.appendChild(parrafo2);

const contenedor = document.getElementById('contenedor');
contenedor.appendChild(fragmento); // Añade los párrafos al contenedor de una sola vez
```

### appendChild
#### Añadir Elementos como Hijos

El método `appendChild` se usa para agregar un nuevo nodo al final de la lista de hijos de un nodo padre.

**HTML:**
```html
<div id="contenedor"></div>
```

**JavaScript:**
```javascript
const contenedor = document.getElementById('contenedor');

const nuevoElemento = document.createElement('div');
nuevoElemento.innerText = 'Este es un nuevo elemento';

contenedor.appendChild(nuevoElemento); // Añade el nuevo elemento como hijo del contenedor
```

### insertBefore
#### Insertar un Elemento Antes de Otro Elemento

El método `insertBefore` se usa para insertar un nuevo nodo antes de un nodo existente en el DOM.

**HTML:**
```html
<ul id="lista">
    <li>Elemento 1</li>
    <li>Elemento 2</li>
</ul>
```

**JavaScript:**
```javascript
const lista = document.getElementById('lista');
const nuevoElemento = document.createElement('li');
nuevoElemento.innerText = 'Elemento nuevo';

const primerElemento = lista.firstChild; // Selecciona el primer elemento <li>
lista.insertBefore(nuevoElemento, primerElemento); // Inserta el nuevo elemento antes del primer elemento
```

## Eventos y Manejadores de Eventos

Los eventos son acciones que ocurren en la página web, como clics del ratón, teclas presionadas, etc. Puedes responder a estos eventos usando manejadores de eventos.

### addEventListener
#### Escuchar un Evento

Para escuchar un evento, usa el método `addEventListener`.

**HTML:**
```html
<button id="miBoton">Haz clic aquí</button>
```

**JavaScript:**
```javascript
const boton = document.getElementById('miBoton');

// Añade un manejador de eventos para el evento "click"
boton.addEventListener('click', function() {
    alert('Botón clicado!');
});
```

### Eventos Comunes

#### Evento de Clic

El evento `click` ocurre cuando un usuario hace clic en un elemento.

```javascript
boton.addEventListener('click', function() {
    console.log('El botón fue clicado');
});
```

#### Evento de Teclado

El evento `keydown` ocurre cuando una tecla es presionada.

**HTML:**
```html
<input type="text" id="miInput" placeholder="Escribe algo...">
```

**JavaScript:**
```javascript
const input = document.getElementById('miInput');
input.addEventListener('keydown', function(event) {
    console.log(`Tecla presionada: ${event.key}`);
});
```

#### Evento de Cambio

El evento `change` ocurre cuando el valor de un elemento de formulario cambia.

```javascript
input.addEventListener('change', function() {
    console.log(`Nuevo valor: ${input.value}`);
});
```

### El Objeto Evento

Cuando un evento ocurre, se crea un objeto `Event` que contiene información sobre el evento. Este objeto se pasa automáticamente al manejador de eventos.

```javascript
boton.addEventListener('click', function(event) {
    console.log(event); // Muestra el objeto evento en la consola
});
```

### removeEventListener
#### Remover un Manejador de Eventos

Puedes remover un manejador de eventos usando `removeEventListener`.

