import express from 'express';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

import hbs from 'hbs';
import dotenv from 'dotenv';



dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()
const port = process.env.PORT;


// HANDLEBARS requiere una carpeta llamada VIEWS.
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático: 
// Si la ruta no se encuentra en public, recien ahí va a empezar a ejecutar el código de abajo, esta tiene prioridad. Si el archivo no se llama index.html, al buscarlo en la página ejemplo: index2.html hay que escribir eso, el nombre del archivo como tal, no será automático.
app.use( express.static('public') )


app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Kevin Stifel',
        titulo: 'Curso de Node',
    });
  });

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Kevin Stifel',
        titulo: 'Curso de Node',
    });
  });

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Kevin Stifel',
        titulo: 'Curso de Node',
    });
  });

  // app.get('/generic', (req, res) => {
  //     res.sendFile(__dirname + '/public/generic.hbs');
  //   })
    
  //   app.get('/elements', (req, res) => {
  //       res.sendFile(__dirname + '/public/elements.hbs');
  //     })
// El * es para cualquier página que no esté definida.
// También se pueden enviar rutas hacía la carpeta public y entregar un archivo html mediante SendFile
// app.get('*', (req, res) => {
//     res.sendFile( __dirname + '/public/404.html');
//   })
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });

