let testo = document.querySelector('h1')
let btn = document.getElementById('btnUno')
 let verifica = function palidroma(){
    let parola = document.getElementById('parola').value;
    let ArrayParola = parola.split('');
    console.log(ArrayParola)
    let ArrayParolaGirata = ArrayParola.reverse();
    console.log(ArrayParolaGirata)
    let parolaGirata = ArrayParolaGirata.join('')
    if(parola == parolaGirata){
        console.log('palindroma')
        testo.innerHTML= 'La parola inserita è palindroma'
    }else{
        console.log('non palindroma')
        testo.innerHTML= 'La parola inserita non è palindroma'

    }
}
btn.addEventListener('click', verifica)