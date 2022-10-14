let min = 1;
let max = 5;
let inputPoD =document.getElementById('pOd')
let inputNumero = document.getElementById('numero')
let btn = document.querySelector('button')
let testo = document.querySelector('h1')
let numerorandom = function(){
    let numeroUtente = inputNumero.value;
    let pOd = inputPoD.value;
    console.log(numeroUtente);
let min = 1;
let max = 5;
    function getRndInteger(min, max) {

        return Math.floor(Math.random() * (max - min) ) + min;

  }
  let somma = numeroUtente + getRndInteger(1,5)
  console.log(somma , somma % 2)
    if(somma % 2 === 0 && pOd === 'pari' ){
        testo.innerHTML = 'Hai vinto !! '
        console.log('vero')
        return true;
       
    } else if (somma % 2 === 0 && pOd === 'dispari' ) {
        console.log('false')
        testo.innerHTML = 'Hai perso !! '

        return false;
    }else{
        console.log('false')
        testo.innerHTML = 'Hai perso !! '

    }
    
}


  


btn.addEventListener('click',numerorandom,)