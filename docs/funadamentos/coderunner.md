---
sidebar_position: 2
---

# Code Runner en Visual Studio Code

## Introducción

Code Runner es una extensión que facilita la ejecución rápida de scripts en varios lenguajes de programación sin necesidad de salir del editor de código. Es especialmente útil para pruebas rápidas y desarrollo ágil.

## Instalación de Code Runner

1. **Abrir Visual Studio Code**.
2. **Ir a la pestaña de extensiones** en la barra lateral izquierda o presionar `Ctrl+Shift+X`.

![vsCode](/images/vscode1.png)

3. **Buscar "Code Runner"** en la barra de búsqueda.

![vsCode](/images/vscode2.png)

4. **Instalar la extensión** haciendo clic en el botón de instalar.

## Uso de Code Runner

Una vez instalada la extensión, puedes ejecutar código fácilmente. Aquí hay algunos pasos para usar Code Runner:

1. **Abrir o crear un archivo de código** en el lenguaje de tu elección (por ejemplo, `script.js` para JavaScript).
2. **Escribir el código** que deseas ejecutar.

   **Ejemplo en JavaScript:**
   ```javascript
   console.log('Hola, mundo!');
   ```

3. **Ejecutar el código**:
   - Haz clic derecho en el editor y selecciona "Run Code".
   - O presiona `Ctrl+Alt+N` para ejecutar el código.
   - O haz clic en el icono de reproducción en la esquina superior derecha del editor.

4. **Ver la salida** en el panel de salida que aparece en la parte inferior de VS Code.

## Configuración de Code Runner

Code Runner se puede configurar para adaptarse a tus necesidades. Aquí hay algunas configuraciones útiles:

1. **Abrir el archivo de configuración** de usuario o de espacio de trabajo (`settings.json`).
2. **Agregar configuraciones específicas**. Algunas configuraciones comunes incluyen:

   ```json
   {
       "code-runner.runInTerminal": true, // Ejecutar el código en el terminal integrado
       "code-runner.executorMap": {
           "javascript": "node",
           "python": "python",
           "java": "javac && java",
           "c": "gcc $fileName -o $fileNameWithoutExt && $fileNameWithoutExt",
           "cpp": "g++ $fileName -o $fileNameWithoutExt && $fileNameWithoutExt"
       },
       "code-runner.saveFileBeforeRun": true, // Guardar el archivo antes de ejecutarlo
       "code-runner.clearPreviousOutput": true // Limpiar la salida anterior antes de ejecutar
   }
   ```

## Compatibilidad de Lenguajes

Code Runner soporta una amplia gama de lenguajes de programación, incluyendo pero no limitado a:

- JavaScript
- Python
- Java
- C
- C++
- PHP
- Ruby
- Go
- TypeScript

## Ejemplos de Uso

**Ejemplo en JavaScript:**
```javascript
console.log('Hola, mundo!');
```

## Beneficios de Code Runner

- **Rapidez y Comodidad**: Ejecuta código sin salir del editor.
- **Soporte Multilenguaje**: Compatible con múltiples lenguajes de programación.
- **Configuración Flexible**: Personaliza el comportamiento de ejecución según tus necesidades.
- **Desarrollo Ágil**: Ideal para pruebas rápidas y desarrollo iterativo.

## Conclusión

Code Runner es una herramienta valiosa para cualquier desarrollador que use Visual Studio Code. Facilita la ejecución de código y mejora la productividad al permitir pruebas rápidas y cómodas directamente desde el editor. Con su soporte para múltiples lenguajes y configuraciones personalizables, Code Runner es una extensión esencial para mejorar tu flujo de trabajo de desarrollo.