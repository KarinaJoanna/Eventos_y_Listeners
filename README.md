<!-- ABOUT THE PROJECT -->
## PRÁCTICA 10: JavaScript

### Búsqueda en la galería de arte

Se basará en la página HTML adjunta como ejemplo02, pero sustituirá el contenido existente por una versión mejorada en la que se añade un pequeño fragmento de JavaScript para que se pueda pasar el ratón por cada imagen para para ver una miniatura más grande según sea necesario.

### Built With

* HTML
* CSS
* JavaScript

### Prerequisites

Estas son algunos de los programas que se utilizaron y sus extensiones.

* Visual Studio Code
  ```sh
  techer.open-in-browser
  ```
  ```sh
  naumovs.color-highlight
  ```
  
* GitHub Desktop
  

### Ejercicio 1

1. Al igual que los dos proyectos anteriores, comience añadiendo un enlace a un archivo JavaScript en la cabecera de tu página (o justo antes de la etiqueta /body).
2. Modifica ligeramente el HTML para añadir una clase para cada imagen en miniatura.
3. En su archivo JavaScript, escriba un ciclo para buscar todas las etiquetas img con la nueva clase definida (tip: querySelectorAll()).
4. Para cada imagen, adjunta un listener en el evento mouseIn para crear una nueva con una imagen más grande dentro (basado en el atributo src).
5. Añade otro listener en el evento mouseOut para ocultar el elemento recién creado. 
6. Se deberán filtrar los resultados segun el género seleccionado
7. Al presionar el botón editar se debera mostrar un cuadro de dialogo modal que muestre la imagen, el título, artista, año y género. Del elemento a editar, opcionalmente podría modificar los valores.

#### Pruebas

1. Recargue la página, y vea que al pasar el ratón por encima de las imágenes, se obtienen miniaturas de mayor calidad calidad, se obtienen miniaturas de mayor tamaño y se ven sobre la ubicación del ratón.
2. Al mover el ratón hacia fuera, la página debería volver a ser como era antes de pasar el ratón.
3. Al seleccionar un genero y presionar el botón filtrar deberia actualizarse la tabla con los resultados que correspondan.
4. Al presionar el botón editar se debera mostrar un cuadro de díalogo con la imagen y la información del registro seleccionado.
