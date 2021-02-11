
# Cifrado

  

libreria-cifrado es un script para cifrar y descifrar cualquier cadena de texto con el algoritmo AES256.

  

## Instalación

  

```bash

npm install @red-unica/libreria-cifrado

```

  

## Uso

Cree un archivo .env en el directorio raíz de su proyecto.

Para aplicación REACT use:
```

REACT_APP_JUEZ_FRASE_SECRETA = "FRASE_SECRETA"

``` 

Para aplicación EXPRESS use:
```

EXPRESS_APP_JUEZ_FRASE_SECRETA = "FRASE_SECRETA"

``` 

Importe las funciones necesarias para su proyecto:

```javascript

const { cifrarTexto, descifrarTexto } = require('@red-unica/libreria-cifrado')

const textoCifrado = cifrarTexto(textoPlano); # retorna la cadena de texto cifrada  

const textoDescifrado = descifrarTexto(textoCifrado); # retorna la cadena de texto descifrada

```

  

## License

[MIT](https://choosealicense.com/licenses/mit/)