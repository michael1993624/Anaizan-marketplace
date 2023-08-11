
//function qui permet d'incrémenter un nombre ou de le décrémenter
export const incrementDrecrementNumber = ( op, id ) => {
    var nb = parseInt( document.getElementById (id).innerText),
        text = document.getElementById (id),
        i = nb;

    if ( (nb == 0 || nb !=0) && op == "1") {
        i += 1;
        text.innerText = i;
    } else if ( nb != 0 && op == "0" ) {
        i -=1;
        text.innerText = i;
    } else if ( nb == 0 ) {
        text.innerText = 0;
    }
}