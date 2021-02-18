require('dotenv').config();
const cifrarTexto = require('./src/cifrar');
const descifrarTexto = require('./src/descifrar');

module.exports = {
    cifrarTexto,
    descifrarTexto
}