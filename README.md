## Arquitectura del proyecto

La arquitectura utilizada para esta aplicación de gestión de tareas, utilizando React, Node.js y MongoDB, se divide en dos partes principales: el Frontend y el Backend.

### Backend (API RESTful con Node.js y MongoDB)

1.  **Servidor Node.js con Express.js:**
    * Recibirá las peticiones HTTP del frontend.
    * Gestionará las rutas (endpoints) de la API.
    * Implementará la lógica de negocio para las operaciones CRUD de las tareas.
    * Se comunicará con la base de datos MongoDB.

2.  **Base de Datos MongoDB:**
    * Almacenará la información de las tareas en colecciones (análogas a tablas en bases de datos relacionales).
    * Se utilizará una instancia local o una gratuita en la nube (como MongoDB Atlas).

3.  **Modelo de Datos (Mongoose):**
    * Se utiliza Mongoose como una librería de Modelado de Objetos de MongoDB (ODM) para interactuar con la base de datos

**Estructura del Backend:**

Se recomienda una estructura modular para el backend, separando las responsabilidades en diferentes carpetas:

* `src/`: carpeta principal.
* `routes/`: contiene los archivos de definición de las rutas de la API (por ejemplo, `task.routes.js`).
* `controllers/`: contiene la lógica de los controladores que manejan las peticiones a las rutas y se comunican con los servicios.
* `models/`: Define los esquemas de los datos utilizando Mongoose (por ejemplo, `task.model.js`).
* `middlewares/`: contiene la funcion para la vaidacion.

**Endpoints de la API RESTful:**

La API expondrá los siguientes endpoints para las operaciones CRUD sobre las tareas:

* `POST /api/tasks`: Crear una nueva tarea.
* `GET /api/tasks`: Obtener todas las tareas.
* `GET /api/tasks/:id`: Obtener una tarea específica por su ID.
* `PUT /api/tasks/:id`: Actualizar una tarea existente por su ID.
* `DELETE /api/tasks/:id`: Eliminar una tarea por su ID.

### Frontend (Interfaz de Usuario con React)

El frontend se encarga de la presentación de la información y la interacción con el usuario. Se desarrollará utilizando la librería React.

**Componentes:**

1.  **Componentes de la Interfaz de Usuario:**
    * Muestra la lista de tareas obtenidas de la API.
    * Formularios para crear y editar tareas.
    * Botones para realizar las operaciones de actualizar y eliminar.

2.  **Gestión del Estado:**
    * Se implemento librería de gestión de estado como Context API para manejar el estado de la aplicación de manera centralizada.
3.  **Comunicación con la API:**
    * Se utilizo la librería Axios para realizar las peticiones HTTP a los endpoints del backend.

**Componentes Reutilizables:**

Se implementará el componente Navbar.jsx:

* **Menu Superior:** Un componente que permite navegar por la diferentes opciones.

**Estructura del Frontend:**

Se recomienda una estructura de proyecto clara y modular:

* `src/`
    * `components/`
    * `api/`
    * `assets/`
    * `context/`
    * `pages/`
    * `App.js`
    * `index.js`

**Instrucciones de Instalacion:**

1. Ubicarse en el directorio de su preferencia
2. git clone https://github.com/jhon0210/taskProject.git
3. cd taskProject
4. git fetch
5. git chekcout develop
6. npm install

**Dependencias Front**
1. cd client
2. npm install

**Base de Datos**
- Tener instalado MongoDB
- La configuracion esta en el archivo db.js
