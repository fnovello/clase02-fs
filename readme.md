# Carpeta moduloReadWrite

Dentro de la carpeta "moduloeReadWrite" se encuentra un modulo "readWriteData.js" que se encarga de leer y escribir un arhivo tipo json ubicado en /data/posts.json

Observar que las funciones de este modulo, son getData y setData, y contiene funcions del filesystem de tipo sincronicas

## Tarea 1

La idea de la tarea, es que implementen funciones de JSON (parse, stringify), como manipular arrays, agreagando, devolviendo o eliminando un objeto.

Desde el index.js, se encuentra urls con los nombres ["add","remove","get"], a modo de ejemplo se detalla como agregar un objeto (add).
    -Realizar el remove y el get.

Devolver un json como respuesta, si fue satisfctorio o no el resultado de las operaciones, en el caso del get devolver el objeto a la pantalla

## Tarea 2 

La idea de esta tarea es que se practique el uso de promesas, async / await

Como se puede ver dentro del modulo readWriteData.js, hay una funcion getDataPromise, que dentro usa una funcions de fs llamada readFile, por lo que si la comparamos con resto se diferencia del "Sync", por lo tanto es asincronica. 

Usar una promesa para devolver los datos y consumirla desde index.js

- Ejecutar index.js
```
npm i 
npm run dev
```