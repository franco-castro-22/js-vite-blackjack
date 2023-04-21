import { pedirCarta,valorCarta,crearCartaHtml } from './';

/**
 * @param {Number} puntosMinimos numero a superar por parte de la computadora
 * @param {HTMLElement} puntosHTML puntaje de la computadora
 * @param {HTMLElement} divCartasComputadora contenedor de cartas de la computadora
 * @param {Array<String>} deck mazo de cartas
 */
// turno de la computadora
export const turnoComputadora = ( puntosMinimos,puntosHTML,divCartasComputadora,deck ) => {

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        let imgCarta = crearCartaHtml(carta);
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}