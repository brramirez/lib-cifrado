require('dotenv').config();
//import cifrarTexto from './src/cifrar';
//import descifrarTexto from './src/descifrar';
const cifrarTexto = require('./src/cifrar');
const descifrarTexto = require('./src/descifrar');

module.exports = {
    cifrarTexto,
    descifrarTexto
}