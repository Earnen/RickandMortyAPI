# PROYECTO INDIVIDUAL: RICK Y MORTY USANDO UNA API

## DIARIO:

**Día 1:**
- Empiezo a estructurar la página web y estudio la API.
- Creo repositorio en GitHub.
- En el primer intento de hacer una llamada a la API se me cargan los episodios en la sidebar, pero sólo 20.
- Tengo muchos problemas al tipar el código.
- Empiezo de nuevo.

**Día 2:**
- Vuelvo a intentar hacer el código para cargar los episodios en la sidebar.
- Tengo problemas al usar las Interfaces porque no son exactamente iguales que la estructura de la API.
- Mis compañeros me sugieren obtenerlas con la extensión “Paste JSON as code”.
- Empiezo de nuevo.

**Día 3:**
- Empiezo otra vez el código, pero esta vez las interfaces y el tipado van mejor.
- Mis compañeros me ayudan con algunas dudas.
- Sólo consigo cargar 20 episodios debido al diseño de la API.
- Para acceder a los siguientes episodios tengo que hacer uso del “next” (url de la segunda página) dentro del apartado “info”.
- No consigo hacer una función que me coja los datos de la siguiente página al pulsar un botón de cargar más episodios.
- Empiezo de nuevo.
- Creo una segunda rama para la versión del código en la que manipulo el DOM directamente haciendo uso de etiquetas HTML.
- Quiero que mi rama principal sea el mismo código, pero haciendo uso de `createContent` y `appendChild`.

**Día 4:**
- El nuevo código que empiezo a escribir ya está mejor tipado desde el principio.
- Salvo algunos errores que puedo identificar y solucionar fácilmente.
- La lógica que uso en la parte de JS (desde el TS) es sencilla, pero las funciones están encadenadas.
- Mis compañeros me ayudan a solucionar algunos errores.
- Aprendo que puedo coger como parámetro el resultado de un evento y lo debo tipar como “MouseEvent”.
- Código terminado. Sólo falta estilarlo.

**Día 5:**
- No pude adelantar mucho durante el fin de semana, así que sólo hice la parte más básica del CSS.
- Cambio algunas partes del código TS para añadir clases y contenedores con la finalidad de estilar mejor.
- Decido que no voy a usar el método que quería usar en la main por falta de tiempo.
- Mi segunda rama será la que deberé tener en la main después de hacer un merge y descartar lo que hubiese ahí.

**Día 6:**
- Termino de maquetar la web para la versión móvil.
- Al añadir las media queries me da un error y se me descuadra todo.
- No consigo remediarlo, así que adelanto la presentación y demás documentos.
- Mis compañeros me ayudan a encontrar el fallo en el CSS y termino de estilarlo todo.
- Tengo que hacer un merge a mi rama principal. Por suerte no hay conflictos.

## SOBRE LA API

Se trata de un objeto con dos elementos principales. En el primero, “info”, se guarda información relevante de las páginas de la API (las dos primeras tienen 20 capítulos cada una y la tercera sólo 11). El segundo elemento es un array de los datos de cada episodio, con otros siete elementos. De ahí sacaremos la información necesaria para hacer nuestra web.

Hay un pequeño detalle que hace que el manejo de esta API sea un poco más engorroso y es que hay 3 páginas de datos, y en cada una hay hasta un máximo de veinte episodios. Si queremos acceder a los episodios de la segunda página, deberemos hacer uso de “next” dentro de “info”, que es donde se encuentra la url de la siguiente página con los siguientes episodios. Se repetiría el proceso con la tercera página.

## QUÉ HE APRENDIDO

- He aprendido qué es Typescript y por qué usarlo supone una ventaja a la hora de programar.
- También qué son los tipos y las interfaces y a usarlos.
- También he aprendido a hacer uso del `async/await` para llamadas a la API.
- He mejorado mi conocimiento sobre Git.
- He cogido más soltura a la hora de usar CSS, tanto de las opciones más básicas, como al usar las funcionalidades más complicadas como puede ser Flexbox.
- También he mejorado al usar las media queries.
