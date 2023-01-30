## SASS

Queremos usar SASS, así que tenemos que instalarlo como una dependency. Para ello, tenemos que escribir en la terminal:

    npm i sass

Una vez hecho, puedo comprobar en las dependecies (package.json file) que ha aparecido "sass".

Una vez hecho esto, creamos un nuevo archivo 'App.scss' dentro de una nueva carpeta llamada 'scss' (en la carpeta 'src'). Después importamos este archivo en 'App.jsx'.

Dentro de 'scss' vamos a crear otra carpeta ('partials') para guardar algunas variables (de color). Esta carpeta contendrá el archivo '\_variables.scss'. Por último tenemos que importar (desde 'App.scss') este archivo de variables. Para ello, incluimos lo siguiente en el archivo que lo va a recibir:

    @use "./partials/variables" as *;

# RECORDATORIOS y NOTAS

- Intentar no usar más de dos o tres colores en nuestra página.
- No usar colores puros.
- La extensión que usamos para que autocomplete es 'ES7 React/Redux/React-Native snippets'.
- En este ejemplo tenemos que crear una lista de tareas y lo primero que se nos ha de venir a la cabeza cuando pensamos en una lista es la palabra "array". En este caso tendremos un 'array' de 'objects', puesto que no solo tendremos la tarea, sino también un tipo de identificador. Y esta combinación de 'array of objects' es la manera en la que construimos una base de datos.
- Los id suelen (deben) ser alfanuméricos.
-

# UPLOADING ONLINE

INSTRUCTIONS: https://create-react-app.dev/docs/deployment/#github-pages

- STEP 1: añado esto después de la línea 2 en package.json:

  "homepage": "http://riccaralv.github.io/my-todo",

- STEP 2: en la terminal:

  npm install --save gh-pages

- STEP 3: en el scripst de package.json copio:

  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"

- STEP 4: inicializamos un git repository:

  git init
  git add .
  git commit -m "initial commit"
  git status
