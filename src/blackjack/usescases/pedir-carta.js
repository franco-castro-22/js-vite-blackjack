
/**
 * Pide una carta al mazo
 * @param {Array<String>} deck recibe el mazo de cartas en forma de array
 * @returns {String} retorna un string con el nombre de la carta ej: AC;
 */

// Esta función me permite tomar una carta
export const pedirCarta = (deck) => {
    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}
