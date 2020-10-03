/*
    consumindo a mesma api porém no back-end
*/

// Dependências
const express = require('express')
const server = express()
const axios = require('axios')
const cors = require('cors')

// Habilitar o cors para que seja possível o acesso da api no front-end
server.use(cors())


// Rota e api
server.get('/', async (req,res) => {

    /* 
        fazendo o destructuring do objeto response retornado do axios 
        para que possamos utilizar apenas o dados vindos do body do request
    */

    try {
        const { data } = await axios('https://jsonplaceholder.typicode.com/users')
        return res.json(data)
        
    } catch (error) {
        console.error(error)
    }

})

server
    .listen(3003, console.log('servidor rodando normalmente'))