
/**
 * 
 * @param {String} carta string con el nombre de la carta
 * @returns {HTMLImageElement}  devuelve el img con la carta listo para agregar al div
 */

export const crearCartaHtml = (carta)=>{

    if (!carta) throw ('Es necesaria la carta como variable');

    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    return imgCarta;
}