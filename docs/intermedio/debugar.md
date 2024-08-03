---
sidebar_position: 4
---
# Depurar en Visual Studio Code

## 2. **Crear un Archivo de Configuración de Depuración**
Para proyectos más complejos, es útil crear un archivo `launch.json` que contenga configuraciones específicas para tu entorno de depuración.

1. **Abre la vista de ejecución y depuración**:
   - Haz clic en el icono de depuración en la barra lateral izquierda o usa el atajo `Ctrl+Shift+D` (Windows/Linux) o `Cmd+Shift+D` (Mac).

   ![vsCode](/images/debug1.png)

2. **Crear una configuración de depuración**:
   - Haz clic en el menú desplegable junto al botón verde de play y selecciona "Add Configuration..." (`Añadir Configuración...`).
   - Selecciona el entorno adecuado para tu proyecto (Node.js, Chrome, etc.). VSCode generará un archivo `launch.json` en la carpeta `.vscode` de tu proyecto.

![vsCode](/images/debug2.png)

Ejemplo de configuración para Node.js:
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "program": "${workspaceFolder}/app.js" // Ruta a tu archivo principal
    }
  ]
}
```

## 3. **Puntos de Interrupción (Breakpoints)**
Los puntos de interrupción permiten detener la ejecución del código en una línea específica para inspeccionar su estado.

- Abre el archivo JavaScript que deseas depurar.
- Haz clic en el margen izquierdo al lado del número de línea donde quieres detener la ejecución. Un círculo rojo aparecerá indicando que el punto de interrupción está activado.

![debug](/images/debug4.png)

### 3.1. **Tipos de Puntos de Interrupción**
Además de los puntos de interrupción básicos, VSCode ofrece otros tipos de breakpoints:

- **Condicionales**: Se activan solo cuando se cumple una condición específica.
- **De función**: Se activan cuando se entra o sale de una función específica.
- **De log**: En lugar de detener la ejecución, registran un mensaje en la consola cuando se alcanzan.

Para añadir un punto de interrupción condicional:
- Haz clic derecho en el margen izquierdo junto al número de línea y selecciona "Add Conditional Breakpoint".
- Ingresa la condición que debe cumplirse para detener la ejecución.

### 3.2. **Ejemplo de Punto de Interrupción Condicional en un Bucle**

Supongamos que tienes el siguiente código JavaScript con un bucle `for`:

```javascript
for (let x = 0; x < 99; x++) {
  console.log(x);
}
```

Para añadir un punto de interrupción condicional que se active cuando `x` sea igual a 5, sigue estos pasos:

1. Haz clic en el margen izquierdo al lado de la línea `console.log(x);` para establecer un punto de interrupción básico.
2. Haz clic derecho en el círculo rojo que apareció y selecciona "Add Conditional Breakpoint...".

![vsCode Conditional Breakpoint](/images/condicional1.png)

3. Introduce la condición `i === 5` y presiona Enter.

![vsCode Conditional Breakpoint](/images/condicional2.png)

Ahora, el punto de interrupción solo se activará cuando `x` sea igual a 5, permitiéndote inspeccionar el estado del programa en ese momento específico.



## 4. **Iniciar la Depuración**
- Selecciona la configuración de depuración adecuada desde el menú desplegable en la vista de depuración.
- Haz clic en el botón verde de play (`Start Debugging`).
- Tu aplicación se ejecutará y se detendrá en cualquier punto de interrupción que hayas establecido.

![vsCode Conditional Breakpoint](/images/condicional3.png)

## 5. **Inspeccionar el Estado del Programa**
- **Panel de Variables (VARIABLES)**: Muestra las variables locales y globales en el contexto actual.
- **Watch (INSPECCIÓN)**: Permite observar expresiones y sus valores actuales.
- **Call Stack (PILA DE LLAMADAS)**: Muestra la pila de llamadas, permitiendo ver cómo se llegó al punto actual.
- **Breakpoints (PUNTOS DE INTERRUPCIÓN)**: Muestra todos los puntos de interrupción que has establecido.

![debug](/images/debug5.png)

### 5.1. **Panel de Variables**
El panel de variables se divide en:
- **Locales**: Variables en el ámbito actual.
- **Globales**: Variables accesibles globalmente.

### 5.2. **Expresiones de Vigilancia (Watch)**
Para añadir una expresión a la vigilancia:
- Haz clic en el signo de más (+) en el panel "Watch".
- Introduce la expresión que deseas vigilar.

## 6. **Controlar la Ejecución del Programa**
- **Continuar (F5)**: Reanuda la ejecución del programa hasta el siguiente punto de interrupción.
- **Paso a Paso (F10)**: Ejecuta la siguiente línea de código, pero no entra en funciones.
- **Paso Dentro (F11)**: Entra dentro de la siguiente función que se llama.
- **Paso Fuera (Shift+F11)**: Sale de la función actual.
- **Reiniciar (Ctrl+Shift+F5)**: Reinicia la sesión de depuración.
- **Detener (Shift+F5)**: Detiene la sesión de depuración.

## 7. **Depuración en el Navegador (para aplicaciones web)**
Para depurar aplicaciones web, puedes usar la extensión `Debugger for Chrome`:

1. **Instala la extensión**:
   - Busca `Debugger for Chrome` en el marketplace de VSCode e instálala.

2. **Configura `launch.json`**:
   - Añade una nueva configuración para Chrome.
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "Launch Chrome against localhost",
      "url": "http://localhost:3000", // URL de tu aplicación
      "webRoot": "${workspaceFolder}"
    }
  ]
}
```

3. **Establecer puntos de interrupción en archivos JavaScript o TypeScript** y seguir el mismo proceso para iniciar la depuración.

### 7.1. **Depuración en Otros Navegadores**
Además de Chrome, puedes configurar la depuración para otros navegadores como Edge o Firefox utilizando extensiones similares disponibles en el marketplace de VSCode.

## 8. **Consejos Adicionales**
- **Console Logs**: Utiliza `console.log` para imprimir valores y ayudarte a entender el flujo del programa.
- **Documentación**: Consulta la [documentación oficial de VSCode](https://code.visualstudio.com/docs/editor/debugging) para más detalles y opciones avanzadas.

Siguiendo estos pasos y aprovechando las características avanzadas de VSCode, deberías poder depurar tu código JavaScript de manera efectiva y eficiente.