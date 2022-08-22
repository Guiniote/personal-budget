# Personal Budget App

- Backend hecho con NodeJS. Arquitectura API Rest, creado con express y sequelize.
- Frontend hecho en ReactJS.

Recorda instalar las dependencias con **npm i** o **npm install** tras descargar el repositorio.

## Front End🖥

### Configurar el archivo .ENV antes de iniciar la app

<pre><code>
REACT_APP_API_DOMAIN=http://localhost:3001
</code></pre>

### Iniciando el repositorio local ⌨

npm start

## Backend🔩

### Configurar el archivo .ENV antes de ejecutar los comandos de Sequelize ⌨

<pre><code>
DB_NAME=Nombre de usuario para la DB
DB_USER=root
DB_PASSWORD=contraseña de la DB
DB_PORT=Puerto de conexion
DB_HOST=Ip local o Localhost

SECRET=Para que funcione JWT
</code></pre>

### Sequelize ⌨

Para que la app funcione, deberán ser ejecutados los siguientes comandos de sequelize para crear y configurar la DB. Respetar el orden para evitar inconvenientes

- <pre><code>sequelize db:create</code></pre>
- <pre><code>sequelize db:migrate</code></pre>
- Opcional si queres cargar datos en la db: <pre><code>sequelize db:seed:all</code></pre>

### Iniciando el repositorio local ⌨

npm run dev
