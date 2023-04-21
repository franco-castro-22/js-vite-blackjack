/**
 * Obtiene el valor de la carta
 * @param {String} carta recibe el nombre de la carta en forma de string
 * @returns {Number} retorna el valor numerico de la carta en forma de entero
 */

export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}