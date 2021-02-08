var aes256 = require('aes256');
/**
* @author brramirezr
* @function Cifra texto
* @param {string} textoPlano texto plano sin cifrar para ser cifrado.
* @returns texto cifrado
*/
const cifrarTexto = (textoPlano) => {
    try {
        const textoPlanoCifrado = aes256.encrypt(process.env.RED_UNICA_FRASE_SECRETA, textoPlano);
        return textoPlanoCifrado;
    } catch (error) {
        console.error(error);
    }
}

export default cifrarTexto;