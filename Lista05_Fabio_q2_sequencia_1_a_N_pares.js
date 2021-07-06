const input = require('prompt-sync')()

function main(){
    const N = Number(input('Digite aqui um número par: '))
    console.log('Escreva uma lista sobre números inteiros pares até N.')
}

main()

for(let i = 1; i < N; i++){
    if (i % 2 === 0){
        console.log(i)
}
}
