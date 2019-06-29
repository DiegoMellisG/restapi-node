# Books API

Esta API de ejemplo, entrega información de libros. Por el momento es posible crear y obtener los libros guardados en una base de datos no relacional, que en este caso es Mongo. Mongo se encuentra levantado en un servidor de *Google Cloud*, en un contenedor de *Docker*.

## Instalación de dependencias

Para instalar las dependencias de este proyecto es necesario ejecutar el siguiente comando:

```bash
npm install
```

## Para poner en marcha la API

Una vez instaladas las dependencias, se puede ejecutar el programa de la siguiente forma:

```bash
npm start
```
El servidor implementado en este repositorio, estará corriendo por defecto en el puerto 3000. Una vez ejecutado el servidor, se tienen las siguientes rutas (anteponiendo localhost:3000):

| HTTP REQUEST  | Ruta            | Función       |
|--------|-------------------|------------------------------------------------------------------------|
| [GET]  | /books            | Se obtiene una lista de los libros que están en la base de datos       |
| [GET]  | /books/:bookTitle | Si se reemplaza :bookTitle por un nombre de un libro, este se muestra. |
| [POST] | /books            | Se crea un libro con el JSON que se envía.                             |

Para realizar una consulta [POST] es necesario enviar un JSON con el siguiente formato:

```json
{
	"title": "Barrio Bravo",
	"author": "Roberto Melendez",
	"editorial": "Coleccion Popular",
	"price": 10000
}
```

## Para ejecutar test unitarios

Esta implementación, para realizar test unitarios utiliza [*Mocha*](https://mochajs.org/) y [*Chai*](https://www.chaijs.com/) y la forma correcta para ejecutar los test unitarios, es la siguiente:

```bash
npm run test
```

## Comentarios

Cuando se ejecutan los test unitarios, primero que todo se realiza un borrado de los documentos almacenados en la base de datos de Mongo, la razón de implementarlo así es para demostrar que se ejecutan de forma correcta. A futuro se podría crear una base de datos para realizar pruebas y así evitar borrar datos de la base de datos original.
