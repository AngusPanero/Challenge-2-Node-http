import { pokemonFetch } from './data.mjs';

import http from 'node:http';

const servidor = http.createServer((req, res) =>
    res.end(`Request Recived`));

servidor.listen(0, () => {
    console.log(`Respuesta Exitosa desde el servidor ${servidor.address().port}`);
});