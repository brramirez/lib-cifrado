var aes256 = require('aes256');
/**
* @author brramirezr
* @function Descifra texto
* @param {string} textoCifrado texto cifrado para descifrarla
* @returns texto descifrado
*/
const descifrarTexto = (textoCifrado) => {

    var textoDescifrado;

    if (process.env.REACT_APP_JUEZ_FRASE_SECRETA) {
        textoDescifrado = aes256.decrypt(process.env.REACT_APP_JUEZ_FRASE_SECRETA, textoCifrado);
    } else if (process.env.EXPRESS_APP_JUEZ_FRASE_SECRETA) {
        textoDescifrado = aes256.decrypt(process.env.EXPRESS_APP_JUEZ_FRASE_SECRETA, textoCifrado);
    } else {
        throw new Error('No se encontró FRASE_SECRETA válida');
    }

    return textoCifrado;
}

export default descifrarTexto;