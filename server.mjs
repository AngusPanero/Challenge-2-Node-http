import { pokemonFetch } from './data.mjs';
import http from 'node:http';

let data = null;


const servidor = http.createServer((req, res) => {
    if (req.url === '/data' && data) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data));
    } else {
        res.end(`Error en la Solicitud`);
    }
});


(async () => {
    const data = await pokemonFetch()
    console.log("Esta es la Data Importada", JSON.stringify(data))
})();

servidor.listen(0, () => {
    console.log(`Respuesta Exitosa desde el servidor ${servidor.address().port}`);
});
