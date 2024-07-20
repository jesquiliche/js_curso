---
sidebar_position: 9
---

# Introducción a HTML
 
### **¿Qué es HTML?**

**HTML** (Hypertext Markup Language) es el lenguaje estándar utilizado para crear y estructurar contenido en la web. Es un lenguaje de marcado que utiliza una serie de etiquetas y atributos para definir cómo se debe mostrar el contenido en los navegadores web. HTML permite organizar el contenido de forma que los navegadores puedan interpretarlo y presentarlo correctamente a los usuarios.

### **Estructura Básica de un Documento HTML**

Un documento HTML sigue una estructura jerárquica y está compuesto por una serie de elementos anidados. Aquí está la estructura básica de un documento HTML:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Título de la Página</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Encabezado Principal</h1>
        <nav>
            <ul>
                <li><a href="#home">Inicio</a></li>
                <li><a href="#about">Sobre Nosotros</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="home">
            <h2>Bienvenido a Nuestra Página</h2>
            <p>Este es un párrafo introductorio.</p>
        </section>
        
        <section id="about">
            <h2>Sobre Nosotros</h2>
            <p>Información sobre la empresa.</p>
        </section>
        
        <section id="contact">
            <h2>Contacto</h2>
            <form>
                <label for="name">Nombre:</label>
                <input type="text" id="name" name="name">
                <label for="email">Correo Electrónico:</label>
                <input type="email" id="email" name="email">
                <label for="message">Mensaje:</label>
                <textarea id="message" name="message"></textarea>
                <button type="submit">Enviar</button>
            </form>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 Mi Empresa</p>
    </footer>
</body>
</html>
```

### **Elementos Clave de HTML**

1. **Declaración DOCTYPE**:
   - `<!DOCTYPE html>`: Indica que el documento es un archivo HTML5 y debe ser la primera línea en el archivo HTML.

2. **Etiqueta `<html>`**:
   - La raíz del documento HTML. Contiene todos los demás elementos.

3. **Etiqueta `<head>`**:
   - Contiene metadatos sobre el documento, como el título, enlaces a hojas de estilo, y scripts.

   ```html
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Título de la Página</title>
   </head>
   ```

4. **Etiqueta `<title>`**:
   - Define el título de la página que aparece en la pestaña del navegador.

   ```html
   <title>Título de la Página</title>
   ```

5. **Etiqueta `<body>`**:
   - Contiene el contenido visible de la página web, incluyendo texto, imágenes, enlaces y otros elementos.

   ```html
   <body>
       <h1>Encabezado Principal</h1>
       <p>Este es un párrafo de ejemplo.</p>
   </body>
   ```

### **Elementos de Texto y Estructura**

1. **Encabezados**:
   - Se utilizan para definir encabezados, desde `<h1>` (más importante) hasta `<h6>` (menos importante).

   ```html
   <h1>Encabezado Principal</h1>
   <h2>Subencabezado</h2>
   ```

2. **Párrafos**:
   - La etiqueta `<p>` define párrafos de texto.

   ```html
   <p>Este es un párrafo de texto.</p>
   ```

3. **Enlaces**:
   - La etiqueta `<a>` crea hipervínculos. El atributo `href` define la URL del destino.

   ```html
   <a href="https://www.ejemplo.com">Visitar Ejemplo</a>
   ```

4. **Imágenes**:
   - La etiqueta `<img>` se usa para insertar imágenes. Los atributos `src` y `alt` especifican la ruta de la imagen y un texto alternativo.

   ```html
   <img src="imagen.jpg" alt="Descripción de la imagen">
   ```

5. **Listas**:
   - **Listas No Ordenadas** (`<ul>`): Crea una lista con viñetas.

     ```html
     <ul>
         <li>Elemento 1</li>
         <li>Elemento 2</li>
     </ul>
     ```

   - **Listas Ordenadas** (`<ol>`): Crea una lista numerada.

     ```html
     <ol>
         <li>Elemento 1</li>
         <li>Elemento 2</li>
     </ol>
     ```

6. **Tablas**:
   - **Etiqueta `<table>`**: Define una tabla.
   - **Etiquetas `<tr>`, `<td>`, `<th>`**: Definen filas, celdas de datos y encabezados de columna.

   ```html
   <table>
       <thead>
           <tr>
               <th>Encabezado 1</th>
               <th>Encabezado 2</th>
           </tr>
       </thead>
       <tbody>
           <tr>
               <td>Celda 1</td>
               <td>Celda 2</td>
           </tr>
       </tbody>
   </table>
   ```

### **Elementos de Formularios**

Los formularios en HTML permiten la entrada de datos del usuario y se utilizan para enviar información al servidor.

1. **Formulario**:
   - La etiqueta `<form>` define un formulario. Los atributos `action` y `method` especifican la URL a la que se enviarán los datos y el método HTTP (GET o POST).

   ```html
   <form action="/enviar" method="post">
       <!-- Campos de formulario -->
   </form>
   ```

2. **Campos de Entrada**:
   - **`<input>`**: Define un campo de entrada. El atributo `type` especifica el tipo de entrada, como texto, correo electrónico, contraseña, etc.

     ```html
     <label for="name">Nombre:</label>
     <input type="text" id="name" name="name">
     ```

   - **Tipos Comunes de `<input>`**:
     - `type="text"`: Campo de texto de una sola línea.
     - `type="email"`: Campo para ingresar correos electrónicos.
     - `type="password"`: Campo para contraseñas.
     - `type="number"`: Campo para números.
     - `type="date"`: Campo para seleccionar una fecha.

     ```html
     <input type="email" id="email" name="email" placeholder="Correo Electrónico">
     <input type="password" id="password" name="password" placeholder="Contraseña">
     <input type="number" id="age" name="age" placeholder="Edad">
     <input type="date" id="birthdate" name="birthdate">
     ```

3. **Área de Texto**:
   - **`<textarea>`**: Define un área de texto de varias líneas.

   ```html
   <label for="message">Mensaje:</label>
   <textarea id="message" name="message" rows="4" cols="50"></textarea>
   ```

4. **Botones**:
   - **`<button>`**: Define un botón dentro del formulario. El atributo `type` puede ser `submit` (para enviar el formulario), `reset` (para restablecer los campos) o `button` (para botones genéricos).

   ```html
   <button type="submit">Enviar</button>
   <button type="reset">Restablecer</button>
   ```

5. **Casillas de Verificación y Botones de Radio**:
   - **Casillas de Verificación (`<input type="checkbox">`)**: Permite seleccionar varias opciones.

     ```html
     <label><input type="checkbox" name="subscribe" checked> Suscribirse al boletín</label>
     ```

   - **Botones de Radio (`<input type="radio">`)**: Permite seleccionar una sola opción de un grupo.

     ```html
     <label><input type="radio" name="gender" value="male"> Masculino</label>
     <label><input type="radio" name="gender" value="female"> Femenino</label>
     ```

6. **Listas Desplegables**:
   - **`<select>`**: Define una lista desplegable con opciones.

   ```html
   <label for="country">Pais:</label>
   <select id="country" name="country">
       <option value="usa">Estados Unidos</option>
       <option value="spain">España</option>
       <option value="mexico">México</option>
   </select>
   ```

### **Atributos Comunes de HTML**

- **`id`**: Proporciona un identificador único para un elemento.
- **`class`**: Asigna una o más clases a un elemento para aplicar estilos CSS.
- **`style`**: Permite aplicar estilos CSS directamente a un elemento.
- **`href`**: Especifica la URL de destino de un enlace.
- **`src`**: Define la fuente de un recurso, como una imagen.
- **`alt`**: Proporciona un texto alternativo para imágenes.

### **Buenas Prácticas**

1. **Estructura Semántica**:
   Utiliza etiquetas HTML5 semánticas como `<header>`, `<footer>`, `<section>`, `<article>` para mejorar la accesibilidad y el SEO.

2. **Comentarios**:
   Añade comentarios en el código HTML para aclarar partes del código y facilitar el mantenimiento.

   ```html
   <!-- Este es un comentario -->
   ```

3. **Validación**:
   Utiliza herramientas de validación HTML para asegurarte de que tu código cumple con los estándares web.

4. **Optimización**:
   Minimiza el uso de estilos en línea y scripts directamente en el HTML. Usa hojas de estilo externas y archivos JavaScript para mantener el código limpio y manejable.

### **Conclusión**

HTML es la base fundamental para crear páginas web. Entender cómo estructurar un documento HTML y cómo usar sus diversos elementos te permitirá construir sitios web efectivos y accesibles. Al combinar HTML con CSS para el diseño y JavaScript para la funcionalidad, puedes desarrollar aplicaciones web completas y ricas en características.
