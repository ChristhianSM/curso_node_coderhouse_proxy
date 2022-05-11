const express = require('express');
const app = express();


app.get('/', (req, res)=> {
    res.send(`Soy esl servidor express corriendo en el puerto ${process.pid} `)
})

const PORT = process.argv[2] || 8080;
console.log(process.argv)

app.listen(PORT, () => {
    console.log(`Escuchando en el puero ${PORT} con proceso ${process.pid}`)
})