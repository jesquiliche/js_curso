---
sidebar_position: 3
---

# Depurar en visual studio Code

## 2. **Crear un Archivo de Configuración de Depuración**
Para proyectos más complejos, es útil crear un archivo `launch.json` que contenga configuraciones específicas para tu entorno de depuración.

1. **Abre la vista de ejecución y depuración**:
   - Haz clic en el icono de depuración en la barra lateral izquierda o usa el atajo `Ctrl+Shift+D` (Windows/Linux) o `Cmd+Shift+D` (Mac).

2. **Crear una configuración de depuración**:
   - Haz clic en el menú desplegable junto al botón verde de play y selecciona "Add Configuration..." (`Añadir Configuración...`).
   - Selecciona el entorno adecuado para tu proyecto (Node.js, Chrome, etc.). VSCode generará un archivo `launch.json` en la carpeta `.vscode` de tu proyecto.

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

## 4. **Iniciar la Depuración**
- Selecciona la configuración de depuración adecuada desde el menú desplegable en la vista de depuración.
- Haz clic en el botón verde de play (`Start Debugging`).
- Tu aplicación se ejecutará y se detendrá en cualquier punto de interrupción que hayas establecido.

## 5. **Inspeccionar el Estado del Programa**
- **Panel de Variables**: Muestra las variables locales y globales en el contexto actual.
- **Watch**: Permite observar expresiones y sus valores actuales.
- **Call Stack**: Muestra la pila de llamadas, permitiendo ver cómo se llegó al punto actual.
- **Breakpoints**: Muestra todos los puntos de interrupción que has establecido.

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

## 8. **Consejos Adicionales**
- **Console Logs**: Utiliza `console.log` para imprimir valores y ayudarte a entender el flujo del programa.
- **Documentación**: Consulta la [documentación oficial de VSCode](https://code.visualstudio.com/docs/editor/debugging) para más detalles y opciones avanzadas.

Siguiendo estos pasos, deberías poder depurar tu código JavaScript de manera efectiva en VSCode.