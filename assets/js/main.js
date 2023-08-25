/* 

Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
    per i multipli di 3 stampi “Fizz” al posto del numero
    e per i multipli di 5 stampi “Buzz”.
    Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

*/

//stampare numeri da 1 a 100


for (let i = 1; i < 101; i++) {

    let valor = document.createElement('span')
    valor.setAttribute("class", 'square fw-bold text-black bg-pink text-center col-1 my-3 mx-5');

    if  (i % 3 === 0 && i % 5 === 0 ) {
        
        console.log('FizzBuzz');
        valor.innerHTML = 'FizzBuzz';
        valor.classList.remove("bg-pink");
        valor.classList.add("bg-danger");
                
        
    } else if (i % 5 === 0) {

        console.log('Buzz');
        valor.innerHTML = 'Buzz'
        valor.classList.remove("bg-pink");
        valor.classList.add("bg-info");

    } else if (i % 3 === 0) {

        console.log('Fizz');
        valor.innerHTML = 'Fizz'
        valor.classList.remove("bg-pink");
        valor.classList.add("bg-light");

    } else {

        console.log(i);
        valor.innerHTML = i;

    }

    document.getElementById('print').append(valor);
   
}














