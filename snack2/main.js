const n = Number(prompt('Inserisci un numero:'))

document.body.innerHTML = `<ul></ul>`;

const numberList = document.querySelector('ul');

for( i = 1; i <= n; i++ ) {
    const cube = i * i * i;

    numberList.innerHTML += `<li>${i}^3 = ${cube}</li>`

}