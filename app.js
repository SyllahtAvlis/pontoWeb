const express = require('express');
const path = require('path'); // nativo por não precisa ser instalado


const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, 'public')));




app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public' ,'login.html'));
});


app.get('/entrada', (req, res) => {
    res.sendFile(path.join(__dirname, 'public' ,'entrada.html'));
});

app.get('/saida', (req, res) => {
    res.sendFile(path.join(__dirname, 'public' ,'saida.html'));
});




app.listen(port, () => {
    console.log(`Servidor rodando em http://127.0.0.1:${port}`);
});

