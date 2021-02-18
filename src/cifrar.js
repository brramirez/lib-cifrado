var aes256 = require('aes256');
/**
* @author brramirezr
* @function Cifra texto
* @param {string} textoPlano texto plano sin cifrar para ser cifrado.
* @returns texto cifrado
*/
const cifrarTexto = (textoPlano) => {

    let textoPlanoCifrado;

    if (process.env.REACT_APP_JUEZ_FRASE_SECRETA) {
        textoPlanoCifrado = aes256.encrypt(process.env.REACT_APP_JUEZ_FRASE_SECRETA, textoPlano);
    } else if (process.env.EXPRESS_APP_JUEZ_FRASE_SECRETA) {
        textoPlanoCifrado = aes256.encrypt(process.env.EXPRESS_APP_JUEZ_FRASE_SECRETA, textoPlano);
    } else {
        throw new Error('No se encontró FRASE_SECRETA válida');
    }

    return textoPlanoCifrado;
}

module.exports = cifrarTexto;
