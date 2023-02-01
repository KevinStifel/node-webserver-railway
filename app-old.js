import http from 'node:http';

// const server = http.createServer( (request, response) => {
//     response.write('Hola Mundo');
// })

// Esta es otra forma en vez de guardarlo como variable
// (request, response)
http.createServer( (req, res) => {

    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200, { 'Content-Type': 'application/csv' });

    res.write('Hola Mundo');
    res.end();
})
.listen( 8080 );

console.log('Escuchando el puerto', 8080);