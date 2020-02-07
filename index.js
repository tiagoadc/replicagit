const express = require('express');
const app = express();
app.get('/', (req, rest) => {
    rest.status(200).send({message: 'ola mundo esse é meu nome repositorio'})
})

app.listen(4001, ()=> {
    console.log('API inicialida na porta 4001');
})
// mexi aqui ó
