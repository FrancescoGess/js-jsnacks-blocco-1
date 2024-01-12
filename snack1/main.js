
let sum = 0;

for (let i = 0; i < 10; i++) {
    const n = Number(prompt('Inserisci un numero:'));

    //console.log(`Il numero inserito è: ${n}`);
    document.writeln(`<p>Il numero inserito è: ${n}</p>`)

    sum += n;

    //console.log(`Stato della somma: ${sum}`)
    document.writeln(`<p>Stato della somma: ${sum}</p>`)
}

//console.log(`Stato finale della somma: ${sum}`)
document.writeln(`<p>Stato finale della somma: ${sum}</p>`)