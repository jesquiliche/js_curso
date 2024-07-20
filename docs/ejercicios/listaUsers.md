---
sidebar_position: 1

---
# Lista de tareas

### Descripción del Proyecto

Este proyecto consiste en desarrollar una aplicación web para gestionar una lista de tareas ("To-Do List") utilizando solo HTML, CSS y JavaScript. La aplicación permite a los usuarios añadir, completar y eliminar tareas, y usa `localStorage` para guardar los datos de las tareas, asegurando que se mantengan disponibles incluso después de recargar la página.

### Objetivo del Proyecto

Desarrollar una aplicación web simple que permita gestionar tareas mediante operaciones básicas. La aplicación usa `localStorage` para almacenar y manipular los datos, eliminando la necesidad de una API externa y facilitando la prueba y desarrollo en un entorno local.

### Requisitos del Proyecto

#### Interfaz de Usuario (UI):

- **Formulario de Entrada**: Debe permitir a los usuarios agregar nuevas tareas. El formulario incluye:
  - **Campo de Texto**: Para ingresar la descripción de la tarea.
  - **Botón de Agregar**: Para añadir la tarea a la lista.

- **Listado de Tareas**: Debe mostrar todas las tareas en una tabla con las siguientes columnas:
  - **Descripción**: Texto de la tarea.
  - **Estado**: Marca la tarea como completada o no completada.
  - **Acciones**: Botones para editar y eliminar la tarea.

#### Funciones CRUD:

- **Crear Tarea**: Añadir una nueva tarea a `localStorage` y mostrarla en la tabla.
- **Leer Tareas**: Recuperar las tareas almacenadas en `localStorage` y mostrarlas en la tabla.
- **Actualizar Tarea**: Editar una tarea existente, actualizar los datos en `localStorage` y reflejar los cambios en la tabla.
- **Eliminar Tarea**: Eliminar una tarea de `localStorage` y actualizar la visualización en la tabla.

#### Uso de localStorage:

- **Almacenamiento**: Usar `localStorage` para guardar las tareas y simular la persistencia de datos sin necesidad de una API externa.
- **Operaciones CRUD**: Realizar operaciones CRUD directamente sobre los datos en `localStorage`.

#### Diseño y Estilo:

- **Bootstrap**: Utilizar Bootstrap para diseñar y estilizar la interfaz de usuario.
- **Formulario de Media Pantalla**: Asegurarse de que el formulario ocupe media pantalla para facilitar la entrada de datos.
- **Botones de Acción**: Mostrar los botones de edición y eliminación en la misma línea con un pequeño espacio entre ellos.

### Estructura del Proyecto

#### Archivos HTML y CSS:

- **index.html**: Contiene la estructura de la página, incluyendo el formulario para agregar o actualizar tareas y la tabla para mostrar la lista de tareas.
- **styles.css**: (Opcional) Estilos adicionales para personalizar la apariencia de la aplicación (si es necesario).

#### Archivo JavaScript:

- **script.js**: Contiene el código JavaScript para implementar las funcionalidades CRUD. Incluye funciones para:
  - **Obtener tareas** (`getTasks`).
  - **Crear o actualizar tareas** (`createOrUpdateTask`).
  - **Eliminar tareas** (`deleteTask`).
  - **Renderizar tareas en la tabla** (`renderTasks`).
  - **Editar tareas** (`editTask`).
  - **Restablecer el formulario** (`resetForm`).

### Instrucciones para el Ejercicio

#### Configuración Inicial:

1. **Crear un Archivo HTML**: Crea un archivo HTML básico y enlázalo con Bootstrap y tu archivo `script.js`.
2. **Establecer Estructura**: Define la estructura básica de la tabla y el formulario en el archivo HTML.

#### Implementación de CRUD:

1. **Leer Tareas**:
   - Implementa la función `getTasks` para recuperar tareas desde `localStorage` y mostrarlas en la tabla.

2. **Crear y Actualizar Tareas**:
   - Implementa la función `createOrUpdateTask` para añadir o modificar tareas en `localStorage`.

3. **Eliminar Tareas**:
   - Implementa la función `deleteTask` para eliminar tareas de `localStorage`.

4. **Renderizar Tareas**:
   - Implementa la función `renderTasks` para mostrar las tareas en la tabla HTML.

#### Estilización:

- Usa Bootstrap para estilizar el formulario y la tabla. Asegúrate de que el formulario esté bien organizado y visible.

#### Pruebas:

- Prueba todas las funcionalidades CRUD para asegurar que las tareas se pueden crear, leer, actualizar y eliminar correctamente.
- Verifica que los datos persisten entre recargas de la página.

### Entrega del Proyecto

- **Código Fuente**: Subir todos los archivos (`index.html`, `script.js`, `styles.css`, etc.) a un repositorio de GitHub o entregarlos como un paquete comprimido.
- **Instrucciones de Ejecución**: Incluir instrucciones claras sobre cómo abrir el archivo HTML en un navegador para probar la aplicación.

---

### Solución del Proyecto

#### 1. Archivo `index.html`

Este archivo contiene la estructura de la página, el formulario para añadir o actualizar tareas y la tabla para mostrar la lista de tareas.

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Tareas</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <!-- Estilos adicionales -->
    <style>
        body {
            padding-top: 20px;
            background-color: #f8f9fa;
        }
        .container {
            max-width: 600px;
        }
        .form-container {
            margin-bottom: 20px;
        }
        .btn-action {
            margin-left: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1 class="my-4">Lista de Tareas</h1>
        <div class="row">
            <div class="col-md-6 form-container">
                <h2>Formulario de Tareas</h2>
                <form>
                    <input type="hidden" id="task-id">
                    <div class="form-group">
                        <label for="task-text">Descripción</label>
                        <input type="text" id="task-text" class="form-control" placeholder="Descripción de la tarea">
                    </div>
                    <button type="button" class="btn btn-primary" id="addTaskButton">Agregar Tarea</button>
                </form>
            </div>
            <div class="col-md-6">
                <h2>Lista de Tareas</h2>
                <table class="table table-bordered">
                    <thead class="thead-light">
                        <tr>
                            <th>Descripción</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody id="taskList"></tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- Bootstrap JS and dependencies -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <!-- Custom JS -->
    <script src="script.js"></script>
</body>
</html>
```

#### 2. Archivo `script.js`

Este archivo contiene la lógica JavaScript para manejar las operaciones CRUD utilizando `localStorage`.

```javascript
document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task-text');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        renderTasks(tasks);
    }

    function saveTasks() {
        const tasks = [];
        taskList.querySelectorAll('tr').forEach(taskElement => {
            tasks.push({
                id: parseInt(taskElement.dataset.id),
                text: taskElement.querySelector('.task-text').textContent,
                completed: taskElement.classList.contains('completed')
            });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function createTaskItem(text, completed = false, id = Date.now()) {
        const tr = document.createElement('tr');
        tr.className = `task-item ${completed ? 'completed' : ''}`;
        tr.dataset.id = id;

        tr.innerHTML = `
            <td class="task-text">${text}</td>
            <td><input type="checkbox" class="task-checkbox" ${completed ? 'checked' : ''}></td>
            <td>
                <button class="btn btn-secondary btn-sm btn-action edit-btn">Editar</button>
                <button class="btn btn-danger btn-sm btn-action delete-btn">Eliminar</button>
            </td>
        `;

        tr.querySelector('.task-checkbox').addEventListener('change', function() {
            tr.classList.toggle('completed');
            saveTasks();
        });

        tr.querySelector('.edit-btn').addEventListener('click', function() {
            editTask(id);
        });

        tr.querySelector('.delete-btn').addEventListener('click', function() {
            removeTask(id);
        });

        return tr;
    }

    function renderTasks(tasks) {
        task