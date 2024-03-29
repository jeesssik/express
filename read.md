<h1>Express </h1>

Express es un marco de aplicación web de Node.js que se utiliza para simplificar el desarrollo de aplicaciones web y APIs (Interfaz de Programación de Aplicaciones) en Node.js. Proporciona una serie de características y utilidades que facilitan la creación de servidores web robustos y escalables.

Algunos de los beneficios y características de Express incluyen:

<b>Enrutamiento</b>: Permite definir rutas y manejar solicitudes HTTP GET, POST, PUT, DELETE, etc.

<b>Middleware: </b>Express utiliza middleware para procesar solicitudes HTTP. Esto permite la integración de funciones adicionales para manejar autenticación, autorización, logging, compresión, y muchas otras tareas.

<b>Plantillas: </b>Express es compatible con una variedad de motores de plantillas como Pug, EJS, Handlebars, etc., que permiten renderizar vistas dinámicas en el servidor.

<b>Manejo de errores: </b> Express proporciona mecanismos para manejar errores de manera fácil y efectiva.

<b>Integración de bases de datos:</b> Puede integrarse fácilmente con bases de datos como MongoDB, MySQL, PostgreSQL, etc., utilizando módulos adicionales o bibliotecas ORM (Mapeo Objeto-Relacional) como Mongoose para MongoDB.


<h2>Instalación de Express</h2>

Para instalar Express, primero debemos asegurarnos de tener Node.js instalado en nuestro sistema. Luego, podemos instalar Express utilizando npm (Node Package Manager), que es un administrador de paquetes para Node.js.

Para instalar Express, ejecutamos el siguiente comando en la terminal:

```javascript


npm install express

```

<h2>Creación de una aplicación Express</h2>

Para crear una aplicación Express, primero debemos importar el módulo express en nuestro archivo de aplicación. Luego, podemos crear una instancia de la aplicación Express llamando a la función express().

```javascript

const express = require('express');
const app = express();

```

Una vez que hemos creado una instancia de la aplicación Express, podemos comenzar a definir rutas y manejar solicitudes HTTP. Por ejemplo, podemos definir una ruta para manejar solicitudes GET a la raíz de nuestra aplicación:

```javascript

app.get('/', (req, res) => {
  res.send('Hola Mundo!');
});

```

En este ejemplo, estamos definiendo una ruta para manejar solicitudes GET a la raíz de nuestra aplicación. Cuando se recibe una solicitud GET a la raíz, se envía la respuesta 'Hola Mundo!' al cliente.


<h2>Escuchando en un puerto</h2>

Una vez que hemos definido nuestras rutas y configurado nuestra aplicación Express, debemos hacer que nuestra aplicación escuche en un puerto para que pueda manejar solicitudes HTTP entrantes. Para hacer esto, llamamos al método listen() en nuestra aplicación y especificamos el número de puerto en el que queremos que escuche nuestra aplicación.

```javascript

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});

```

En este ejemplo, estamos haciendo que nuestra aplicación Express escuche en el puerto 3000. Cuando nuestra aplicación está escuchando en un puerto, puede manejar solicitudes HTTP entrantes y enviar respuestas a los clientes.

<h2> Direccionamiento en Express</h2>

Express proporciona una forma conveniente de definir rutas y manejar solicitudes HTTP utilizando métodos de enrutamiento. Algunos de los métodos de enrutamiento más comunes en Express incluyen:

<b>app.get(path, callback):</b> Define una ruta para manejar solicitudes HTTP GET.

<b>app.post(path, callback):</b> Define una ruta para manejar solicitudes HTTP POST.

<b>app.put(path, callback):</b> Define una ruta para manejar solicitudes HTTP PUT.

<b>app.delete(path, callback):</b> Define una ruta para manejar solicitudes HTTP DELETE.    

Por ejemplo, podemos definir una ruta para manejar solicitudes GET a la raíz de nuestra aplicación utilizando el método app.get():

```javascript

app.get('/', (req, res) => {
  res.send('Hola Mundo!');
});

```

En este ejemplo, estamos definiendo una ruta para manejar solicitudes GET a la raíz de nuestra aplicación. Cuando se recibe una solicitud GET a la raíz, se envía la respuesta 'Hola Mundo!' al cliente.

<h2>Middleware en Express</h2>

Express utiliza middleware para procesar solicitudes HTTP. El middleware es una función que se ejecuta antes de que se maneje una solicitud HTTP. Puede realizar tareas como autenticación, autorización, logging, compresión, etc.

Para usar middleware en Express, llamamos a la función use() en nuestra aplicación y pasamos la función de middleware como argumento. Por ejemplo, podemos usar middleware para manejar solicitudes de registro:

```javascript

app.use((req, res, next) => {
  console.log('Solicitud recibida:', req.method, req.url);
  next();
});

``` 

En este ejemplo, estamos definiendo una función de middleware que registra cada solicitud HTTP que recibe nuestra aplicación. La función de middleware recibe tres argumentos: el objeto de solicitud (req), el objeto de respuesta (res) y la función next(). La función next() se utiliza para pasar la solicitud al siguiente middleware en la cadena de middleware.


