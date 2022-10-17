let min = 1;
let max = 5;
let inputPoD =document.getElementById('pOd')
let inputNumero = document.getElementById('numero')
let btn = document.querySelector('button')
let testo = document.getElementById('testo')
let numerorandom = function(){
    let numeroUtente = parseInt( inputNumero.value);
    let pOd = inputPoD.value;
    console.log(numeroUtente);
let min = 1;
let max = 5;
    function getRndInteger(min, max) {

        return Math.floor(Math.random() * (5 - 1) ) + 1;

  }
  console.log(getRndInteger())
  let somma = numeroUtente + getRndInteger()
  console.log(somma , somma % 2)
    if(somma % 2 === 0 && pOd === 'pari' ){
        testo.innerHTML = `
        Il numero uscito è ${somma}, è pari quindi  hai VINTO !!!! `
        console.log('vero')
        return true;
       
    } else if (somma % 3 === 0 && pOd === 'dispari' ) {
        console.log('dispari')
        testo.innerHTML = `
        Il numero uscito è ${somma}, è dispari quindi hai VINTO !!!!`

        return false;
    }else{
        console.log('false')
        testo.innerHTML = 'Hai perso !! '

    }
    
}


  


btn.addEventListener('click',numerorandom,)