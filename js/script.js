// Un alert espone 5 numeri casuali.
// Dopo la chiusura (manuale, cioè facendo click su ok) 
// dell'alert, parte un timer di 30 secondi.
// Dopo i 30 secondi l'utente deve inserire un prompt alla volta
// i numeri che ha visto precedentemente. Dopo che sono stati 
// inseriti i 5 numeri, il software dice quanti e
// quali dei numeri da indovinare sono stati individuati.



var arrPc = []; // creo l'array vuoto dove vado a memorizzare i 5 numeri casuali del Pc

while (arrPc.length < 5) {
    var nPc = generaRandom(1,100); // richiamo la funzione che mi genera i numeri random da 1 a 100 senza escludere i doppioni
    arrPc.push(nPc);
}
// console.log(arrPc);

alert('Memorizza i numeri. Premi OK e hai 10 sec per iniziare: ' + arrPc);

var arrPlayer = []; // creo l'array vuoto per memorizzare i 5 input del player
var match = []; // creo l'array vuoto dove vado a memorizzare gli input corretti/corrispondenti

setTimeout(function(){ // con setTimeout creo un timer di 10 secondi che partirà alla chiusura dell'alert
    for (var i = 0; i < 5; i++){
        var nPlayer = parseInt(prompt('Inserisci il numero'));
        arrPlayer.push(nPlayer);

        if (arrPc.includes(nPlayer)){
            match.push(nPlayer)
        }
    } 
    //   console.log(arrPlayer);
    //   console.log(match);

      document.getElementById('pc-random').innerHTML = 'I numeri del Pc: ' + arrPc;
      document.getElementById('input-player').innerHTML = 'I tuoi numeri: ' + arrPlayer;
      document.getElementById('risultato').innerHTML = 'Sei riuscito a memorizzare ' + match.length + ' ' + 'numeri: ' + match;
    
}, 10000);



//*** funzioni ***//

function generaRandom(min,max) { // funzione per generare numeri casuali
    return Math.floor(Math.random()*(max - min +1) + min);
}