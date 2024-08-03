---
sidebar_position: 1
---
# Programación Orientada a Objetos

## Introducción

La Programación Orientada a Objetos (POO) es una manera de organizar y estructurar el código para que sea más fácil de entender, mantener y reutilizar. En este capítulo, exploraremos los conceptos básicos de la POO en JavaScript, incluyendo clases, prototipos, herencia y polimorfismo, así como métodos estáticos y dinámicos.

## Clases y Prototipos

### Clases

Las clases en JavaScript son plantillas para crear objetos. Una clase define un molde para objetos que especifica qué propiedades y métodos tendrán estos objetos. Piensa en una clase como un plano arquitectónico: define cómo será la estructura, pero cada construcción basada en ese plano puede tener características y detalles únicos.

#### Cómo Crear una Clase

```javascript
class Persona {
    // El constructor es una función especial que se llama cuando creas una nueva persona
    constructor(nombre, edad) {
        this.nombre = nombre; // Asigna el nombre pasado al constructor a la nueva persona
        this.edad = edad; // Asigna la edad pasada al constructor a la nueva persona
    }

    // Un método es una función que pertenece a una clase
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}

// Crear una nueva persona llamada Juan de 30 años
const juan = new Persona("Juan", 30);
juan.saludar(); // Salida: "Hola, mi nombre es Juan y tengo 30 años."
```

**Explicación:**
- `class Persona { ... }`: Define una nueva clase llamada `Persona`.
- `constructor(nombre, edad) { ... }`: El constructor es una función especial que se ejecuta cuando se crea una nueva instancia de la clase.
- `this.nombre`: `this` se refiere a la instancia actual de la clase.
- `saludar() { ... }`: Define un método que pueden usar todas las instancias de `Persona`.

### Instancias de Clases

Una **instancia** de una clase es un objeto creado a partir de la plantilla que proporciona la clase. Cada vez que creas un nuevo objeto utilizando una clase, estás creando una instancia de esa clase. Cada instancia puede tener valores únicos para las propiedades definidas en la clase y puede utilizar los métodos de la clase para realizar acciones.

#### Ejemplo de Instancias

```javascript
class Vehiculo {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    mostrarInformacion() {
        console.log(`Vehículo: ${this.marca} ${this.modelo}, Año: ${this.año}`);
    }
}

// Crear instancias de la clase Vehiculo
const coche1 = new Vehiculo("Toyota", "Corolla", 2020);
const coche2 = new Vehiculo("Honda", "Civic", 2018);

// Mostrar información de cada vehículo
coche1.mostrarInformacion(); // Salida: "Vehículo: Toyota Corolla, Año: 2020"
coche2.mostrarInformacion(); // Salida: "Vehículo: Honda Civic, Año: 2018"
```

En este ejemplo, `coche1` y `coche2` son instancias de la clase `Vehiculo`, cada una con sus propios valores para `marca`, `modelo` y `año`. El método `mostrarInformacion` se utiliza para mostrar los detalles de cada instancia.

### Prototipos

Antes de que existieran las clases en JavaScript, se utilizaban prototipos para crear objetos y compartir métodos entre ellos. Los prototipos permiten que los objetos hereden características de otros objetos.

#### Cómo Usar Prototipos

```javascript
// Crear una función constructora para la clase Persona
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

// Añadir un método al prototipo de Persona
Persona.prototype.saludar = function() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
};

// Crear una nueva persona llamada María de 25 años
const maria = new Persona("María", 25);
maria.saludar(); // Salida: "Hola, mi nombre es María y tengo 25 años."
```

**Explicación:**
- `function Persona(nombre, edad) { ... }`: Define una función constructora para crear objetos `Persona`.
- `Persona.prototype.saludar = function() { ... }`: Añade el método `saludar` al prototipo de `Persona`, compartido por todas las instancias.

## Herencia y Polimorfismo

### Herencia

La herencia permite que una clase herede propiedades y métodos de otra clase. Esto es útil cuando quieres crear una clase que reutilice el comportamiento de una clase base, pero con algunas modificaciones o adiciones.

#### Cómo Usar Herencia

```javascript
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    hacerSonido() {
        console.log(`${this.nombre} hace un sonido.`);
    }
}

class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre); // Llama al constructor de la clase base (Animal)
        this.raza = raza;
    }

    ladrar() {
        console.log(`${this.nombre}, el ${this.raza}, ladra.`);
    }
}

const miPerro = new Perro("Rex", "Labrador");
miPerro.hacerSonido(); // Salida: "Rex hace un sonido."
miPerro.ladrar(); // Salida: "Rex, el Labrador, ladra."
```

**Explicación:**
- `class Perro extends Animal { ... }`: `Perro` hereda de `Animal`, lo que significa que `Perro` tiene todas las propiedades y métodos de `Animal`.
- `super(nombre);`: Llama al constructor de la clase base (`Animal`) para inicializar la parte `Animal` del objeto `Perro`.

### Polimorfismo

El polimorfismo permite que diferentes clases respondan de manera diferente a la misma llamada de método. Esto se logra cuando una clase hija redefine un método de la clase base. Aquí te presento algunos ejemplos adicionales de polimorfismo.

#### Ejemplo 1: Diferentes Sonidos de Animales

```javascript
class Animal {
    hacerSonido() {
        console.log("Este animal hace un sonido.");
    }
}

class Perro extends Animal {
    hacerSonido() {
        console.log("El perro ladra.");
    }
}

class Gato extends Animal {
    hacerSonido() {
        console.log("El gato maúlla.");
    }
}

const animales = [new Perro(), new Gato()];

animales.forEach(animal => animal.hacerSonido());

// Salida:
// "El perro ladra."
// "El gato maúlla."
```

**Explicación:**
- `Perro` y `Gato` son clases que heredan de `Animal`, pero cada una tiene su propia implementación del método `hacerSonido`.
- En el array `animales`, cada objeto responde de manera diferente al método `hacerSonido`, mostrando el comportamiento específico de cada clase.

#### Ejemplo 2: Formas de Dibujar

```javascript
class Forma {
    dibujar() {
        console.log("Dibujando una forma.");
    }
}

class Círculo extends Forma {
    dibujar() {
        console.log("Dibujando un círculo.");
    }
}

class Cuadrado extends Forma {
    dibujar() {
        console.log("Dibujando un cuadrado.");
    }
}

const formas = [new Círculo(), new Cuadrado()];

formas.forEach(forma => forma.dibujar());

// Salida:
// "Dibujando un círculo."
// "Dibujando un cuadrado."
```

**Explicación:**
- `Círculo` y `Cuadrado` heredan de `Forma`, pero tienen diferentes implementaciones del método `dibujar`.
- Al iterar sobre el array `formas`, cada objeto `Forma` dibuja según su tipo específico.

## Métodos Estáticos y Dinámicos

### Métodos Estáticos

Los métodos estáticos son funciones que pertenecen a la clase en sí misma, no a las instancias de la clase. Son útiles para operaciones que no dependen de una instancia específica.

#### Cómo Usar Métodos Estáticos

```javascript
class Calculadora {
    static sumar(a, b) {
        return a + b;
    }
}

console.log(Calculadora.sumar(5, 3)); // Salida: 8
```

**Explicación:**
- `static sumar(a, b) { ... }`: Define el método `sumar` como un método estático de `Calculadora`.

### Métodos Dinámicos

Los métodos dinámicos pertenecen a las instancias de la clase. Son útiles para operaciones que deben realizarse en objetos específicos.

#### Cómo Usar Métodos Dinámicos

```javascript
class Contador {
    constructor() {
        this.cuenta = 0;
    }

    incrementar() {
        this.cuenta++;
        console.log(this.cuenta);
    }
}

const miContador = new Contador();
miContador.incrementar(); // Salida: 1
miContador.incrementar(); // Salida: 2
```
## Métodos Estáticos y Dinámicos

### Métodos Estáticos

Los métodos estáticos son funciones que pertenecen a la clase en sí misma, no a las instancias de la clase. Son útiles para operaciones que no dependen de una instancia específica.

#### Cómo Usar Métodos Estáticos

```javascript
class Calculadora {
    static sumar(a, b) {
        return a + b;
    }
}

console.log(Calculadora.sumar(5, 3)); // Salida: 8
```

**Explicación:**
- `static sumar(a, b) { ... }`: Define el método `sumar` como un método estático de `Calculadora`.

### Métodos Dinámicos

Los métodos dinámicos pertenecen a las instancias de la clase. Son útiles para operaciones que deben realizarse en objetos específicos.

#### Cómo Usar Métodos Dinámicos

```javascript
class Contador {
    constructor() {
        this.cuenta = 0;
    }

    incrementar() {
        this.cuenta++;
        console.log(this.cuenta);
    }
}

const miContador = new Contador();
miContador.incrementar(); // Salida: 1
miContador.incrementar(); // Salida: 2
```

**Explicación:**
- `incrementar() { ... }`: Define el método `incrementar` como un método dinámico de `Contador`.

## Getters y Setters

Los getters y setters son métodos especiales que permiten acceder y actualizar las propiedades de un objeto de manera controlada.

### Cómo Usar Getters y Setters

```javascript
class Persona {
    constructor(nombre, edad) {
        this._nombre = nombre; // Usamos _nombre para diferenciar la propiedad interna del getter/setter
        this._edad = edad;
    }

    // Getter para el nombre
    get nombre() {
        return this._nombre;
    }

    // Setter para el nombre
    set nombre(nuevoNombre) {
        if (nuevoNombre) {
            this._nombre = nuevoNombre;
        } else {
            console.error("El nombre no puede ser vacío");
        }
    }

    // Getter para la edad
    get edad() {
        return this._edad;
    }

    // Setter para la edad
    set edad(nuevaEdad) {
        if (nuevaEdad > 0) {
            this._edad = nuevaEdad;
        } else {
            console.error("La edad debe ser un número positivo");
        }
    }
}

const juan = new Persona("Juan", 30);
console.log(juan.nombre); // Salida: "Juan"
juan.nombre = "Pedro";
console.log(juan.nombre); // Salida: "Pedro"

console.log(juan.edad); // Salida: 30
juan.edad = 35;
console.log(juan.edad); // Salida: 35

// Intentando establecer valores inválidos
juan.nombre = ""; // Salida: "El nombre no puede ser vacío"
juan.edad = -5; // Salida: "La edad debe ser un número positivo"
```

**Explicación:**
- `get nombre() { ... }`: Define un getter para la propiedad `nombre`.
- `set nombre(nuevoNombre) { ... }`: Define un setter para la propiedad `nombre`, con validación.
- `_nombre` y `_edad`: Se utiliza el prefijo `_` para distinguir las propiedades internas de los getters y setters.

### Campos Privados

En JavaScript, las variables verdaderamente privadas dentro de una clase se pueden crear usando la sintaxis de campos privados introducida en ECMAScript 2022 (ES2022). Los campos privados se declaran con un prefijo `#`.

#### Cómo Usar Campos Privados

```javascript
class Vehiculo {
    // Campos privados
    #marca;
    #modelo;
    #año;

    constructor(marca, modelo, año) {
        this.#marca = marca;
        this.#modelo = modelo;
        this.#año = año;
    }

    // Getter para la marca
    get marca() {
        return this.#marca;
    }

    // Setter para la marca
    set marca(nuevaMarca) {
        if (nuevaMarca) {
            this.#marca = nuevaMarca;
        } else {
            console.error("La marca no puede ser vacía");
        }
    }

    // Getter para el modelo
    get modelo() {
        return this.#modelo;
    }

    // Setter para el modelo
    set modelo(nuevoModelo) {
        if (nuevoModelo) {
            this.#modelo = nuevoModelo;
        } else {
            console.error("El modelo no puede ser vacío");
        }
    }

    // Getter para el año
    get año() {
        return this.#año;
    }

    // Setter para el año
    set año(nuevoAño) {
        if (nuevoAño > 1885) { // El primer automóvil fue creado alrededor de 1886
            this.#año = nuevoAño;
        } else {
            console.error("El año no es válido");
        }
    }

    mostrarInformacion() {
        console.log(`Vehículo: ${this.marca} ${this.modelo}, Año: ${this.año}`);
    }
}

// Ejemplo de uso
const miVehiculo = new Vehiculo("Toyota", "Corolla", 2020);
miVehiculo.mostrarInformacion(); // Salida: Vehículo: Toyota Corolla, Año: 2020

// Usando los setters para cambiar las propiedades
miVehiculo.marca = "Honda";
miVehiculo.modelo = "Civic";
miVehiculo.año = 2018;

miVehiculo.mostrarInformacion(); // Salida: Vehículo: Honda Civic, Año: 2018

// Intentando establecer valores inválidos
miVehiculo.marca = ""; // Salida: La marca no puede ser vacía
miVehiculo.modelo = ""; // Salida: El modelo no puede ser vacío
miVehiculo.año = 1800; // Salida: El año no es válido
```

**Explicación:**
- **Campos privados:** Utilizamos `#` para declarar las propiedades `#marca`, `#modelo` y `#año` como privadas. Estas propiedades no pueden ser accedidas ni modificadas fuera de la clase.
  ```javascript
  #marca;
  #modelo;
  #año;
  ```
- **Acceso controlado:** Los getters y setters permiten el acceso controlado a estas propiedades privadas, proporcionando una interfaz pública para interactuar con ellas mientras mantienen la encapsulación.
  ```javascript
  get marca() {
      return this.#marca;
  }

  set marca(nuevaMarca) {
      if (nuevaMarca) {
          this.#marca = nuevaMarca;
      } else {
          console.error("La marca no puede ser vacía");
      }
  }
  ```

Los campos privados garantizan que los datos encapsulados no se puedan modificar directamente desde fuera de la clase, proporcionando una mayor seguridad y encapsulación en el diseño de la clase.