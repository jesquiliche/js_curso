---
sidebar_position: 1
---
# Programación Orientada a Objetos

## Objetivo
Crear un sistema de gestión de vehículos utilizando los conceptos de POO en JavaScript. El sistema debe incluir diferentes tipos de vehículos (como coches y motocicletas) que heredan de una clase base, y debe demostrar el uso de métodos estáticos y dinámicos.

## Descripción
1. Define una clase base `Vehiculo` que tenga propiedades comunes a todos los vehículos, como `marca`, `modelo` y `año`.
2. Define métodos en la clase base para mostrar información básica del vehículo.
3. Crea clases derivadas `Coche` y `Motocicleta` que hereden de `Vehiculo`.
4. Añade métodos específicos a las clases derivadas para mostrar información adicional, como `número de puertas` para `Coche` y `tipo de manillar` para `Motocicleta`.
5. Utiliza polimorfismo para llamar a métodos que se comporten de manera diferente en las clases derivadas.
6. Incluye un método estático en la clase `Vehiculo` que devuelva el número total de vehículos creados.
7. Crea instancias de las clases y prueba los métodos.

## Instrucciones
1. **Define la clase base `Vehiculo`.**

```javascript
class Vehiculo {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        Vehiculo.incrementarConteo();
    }

    mostrarInformacion() {
        console.log(`Vehículo: ${this.marca} ${this.modelo}, Año: ${this.año}`);
    }

    static incrementarConteo() {
        if (!Vehiculo.conteo) {
            Vehiculo.conteo = 0;
        }
        Vehiculo.conteo++;
    }

    static obtenerConteo() {
        return Vehiculo.conteo;
    }
}
```

2. **Define las clases derivadas `Coche` y `Motocicleta`.**

```javascript
class Coche extends Vehiculo {
    constructor(marca, modelo, año, puertas) {
        super(marca, modelo, año);
        this.puertas = puertas;
    }

    mostrarInformacion() {
        super.mostrarInformacion();
        console.log(`Número de puertas: ${this.puertas}`);
    }
}

class Motocicleta extends Vehiculo {
    constructor(marca, modelo, año, tipoManillar) {
        super(marca, modelo, año);
        this.tipoManillar = tipoManillar;
    }

    mostrarInformacion() {
        super.mostrarInformacion();
        console.log(`Tipo de manillar: ${this.tipoManillar}`);
    }
}
```

3. **Crea instancias de las clases y prueba los métodos.**

```javascript
const coche1 = new Coche("Toyota", "Corolla", 2020, 4);
const coche2 = new Coche("Honda", "Civic", 2018, 4);
const moto1 = new Motocicleta("Yamaha", "MT-07", 2019, "Deportivo");

coche1.mostrarInformacion(); 
// Salida:
// Vehículo: Toyota Corolla, Año: 2020
// Número de puertas: 4

coche2.mostrarInformacion(); 
// Salida:
// Vehículo: Honda Civic, Año: 2018
// Número de puertas: 4

moto1.mostrarInformacion(); 
// Salida:
// Vehículo: Yamaha MT-07, Año: 2019
// Tipo de manillar: Deportivo

console.log(`Número total de vehículos: ${Vehiculo.obtenerConteo()}`); 
// Salida: Número total de vehículos: 3
```

## Tareas Opcionales
1. **Añadir Validación:**
   Añade validación en los constructores para asegurarte de que los valores pasados son correctos (por ejemplo, el número de puertas debe ser un número positivo).

2. **Agregar Más Tipos de Vehículos:**
   Crea más clases derivadas como `Camion` y `Bicicleta`, cada una con propiedades y métodos específicos.

3. **Métodos Adicionales:**
   Añade métodos adicionales como `acelerar` y `frenar` que pueden comportarse de manera diferente en cada tipo de vehículo.

## Descripción del Ejercicio
Este ejercicio te ayudará a practicar:
- La creación de clases y la definición de métodos.
- El uso de herencia para crear clases derivadas.
- La implementación de polimorfismo para métodos que se comportan de manera diferente en clases derivadas.
- La utilización de métodos estáticos para mantener el estado compartido entre todas las instancias de una clase.

## Solución del Ejercicio de Programación Orientada a Objetos

1. **Definición de la clase base `Vehiculo`:**

```javascript
class Vehiculo {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        Vehiculo.incrementarConteo();
    }

    mostrarInformacion() {
        console.log(`Vehículo: ${this.marca} ${this.modelo}, Año: ${this.año}`);
    }

    static incrementarConteo() {
        if (!Vehiculo.conteo) {
            Vehiculo.conteo = 0;
        }
        Vehiculo.conteo++;
    }

    static obtenerConteo() {
        return Vehiculo.conteo;
    }
}
```

2. **Definición de las clases derivadas `Coche` y `Motocicleta`:**

```javascript
class Coche extends Vehiculo {
    constructor(marca, modelo, año, puertas) {
        super(marca, modelo, año);
        this.puertas = puertas;
    }

    mostrarInformacion() {
        super.mostrarInformacion();
        console.log(`Número de puertas: ${this.puertas}`);
    }
}

class Motocicleta extends Vehiculo {
    constructor(marca, modelo, año, tipoManillar) {
        super(marca, modelo, año);
        this.tipoManillar = tipoManillar;
    }

    mostrarInformacion() {
        super.mostrarInformacion();
        console.log(`Tipo de manillar: ${this.tipoManillar}`);
    }
}
```

3. **Creación de instancias de las clases y prueba de los métodos:**

```javascript
const coche1 = new Coche("Toyota", "Corolla", 2020, 4);
const coche2 = new Coche("Honda", "Civic", 2018, 4);
const moto1 = new Motocicleta("Yamaha", "MT-07", 2019, "Deportivo");

coche1.mostrarInformacion(); 
// Salida:
// Vehículo: Toyota Corolla, Año: 2020
// Número de puertas: 4

coche2.mostrarInformacion(); 
// Salida:
// Vehículo: Honda Civic, Año: 2018
// Número de puertas: 4

moto1.mostrarInformacion(); 
// Salida:
// Vehículo: Yamaha MT-07, Año: 2019
// Tipo de manillar: Deportivo

console.log(`Número total de vehículos: ${Vehiculo.obtenerConteo()}`); 
// Salida: Número total de vehículos: 3
```

### Tareas Opcionales

1. **Añadir Validación:**

```javascript
class Vehiculo {
    constructor(marca, modelo, año) {
        if (!marca || !modelo || !año) {
            throw new Error("Todos los campos son obligatorios");
        }
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        Vehiculo.incrementarConteo();
    }

    // ... (resto del código)
}

class Coche extends Vehiculo {
    constructor(marca, modelo, año, puertas) {
        super(marca, modelo, año);
        if (puertas <= 0) {
            throw new Error("El número de puertas debe ser un número positivo");
        }
        this.puertas = puertas;
    }

    // ... (resto del código)
}

// (similarly for Motocicleta)
```

2. **Agregar Más Tipos de Vehículos:**

```javascript
class Camion extends Vehiculo {
    constructor(marca, modelo, año, capacidadCarga) {
        super(marca, modelo, año);
        this.capacidadCarga = capacidadCarga;
    }

    mostrarInformacion() {
        super.mostrarInformacion();
        console.log(`Capacidad de carga: ${this.capacidadCarga} toneladas`);
    }
}

class Bicicleta extends Vehiculo {
    constructor(marca, modelo, año, tipo) {
        super(marca, modelo, año);
        this.tipo = tipo;
    }

    mostrarInformacion() {
        super.mostrarInformacion();
        console.log(`Tipo de bicicleta: ${this.tipo}`);
    }
}
```

3. **Métodos Adicionales:**

```javascript
class Vehiculo {
    // ... (resto del código)

    acelerar() {
        console.log(`${this.marca} ${this.modelo} está acelerando.`);
    }

    frenar() {
        console.log(`${this.marca} ${this.modelo} está frenando.`);
    }
}

class Coche extends Vehiculo {
    // ... (resto del código)

    acelerar() {
        console.log(`${this.marca} ${this.modelo} está acelerando rápidamente.`);
    }
}

class Motocicleta extends Vehiculo {
    // ... (resto del código)

    frenar() {
        console.log(`${this.marca} ${this.modelo} está frenando suavemente.`);
    }
}

// Creación de instancias y prueba de métodos adicionales
const coche3 = new Coche("Ford", "Mustang", 2021, 2);
const moto2 = new Motocicleta("Harley-Davidson", "Sportster", 2020, "Chopper");

coche3.acelerar(); 
// Salida: Ford Mustang está acelerando rápidamente.

moto2.frenar(); 
// Salida: Harley-Davidson Sportster está frenando suavemente.
```