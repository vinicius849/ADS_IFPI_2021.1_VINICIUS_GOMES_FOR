const input = require('prompt-sync')()

// Termos menores de uma PG
function main(){
    const an = Number(input('Digite aqui o valor do primeiro termo: '));
    const l = Number(input('Coloque aqui seu limte: '));
    const r = Number(input('Informe aqui a razão d euma P.G: '));
}
  
function divisao(an){
    q = (an / an - 1)
    divisao = an + q
    console.log(divisao)
}

divisao()

for(var i = a; i < limite; i *= razao){
    console.log(i)
    i++
    if (i > 50){
        break
    }
}

main()