var aes256 = require('aes256');
/**
* @author brramirezr
* @function Descifra texto
* @param {string} textoCifrado texto cifrado para descifrarla
* @returns texto descifrado
*/
const descifrarTexto = (textoCifrado) => {
    try {
        const textoDescifrado = aes256.decrypt(process.env.RED_UNICA_FRASE_SECRETA, textoCifrado);
        return textoDescifrado;
    } catch (error) {
        console.error(error);
    }

}

export default descifrarTexto;