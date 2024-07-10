const express = require('express');
const cors = require('cors');
const server = express();
const port = 3000;

server.use(cors())

const combustiveis = require('./src/data/combustiveis.json')

server.get('/combustiveis', (req,res) => {
    return res.json(combustiveis)
});

server.listen(port, () => {
    console.log(`API rodadndo`)
});