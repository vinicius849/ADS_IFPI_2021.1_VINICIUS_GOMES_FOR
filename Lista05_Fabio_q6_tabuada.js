const input = require('prompt-sync')()

function pulalinha(){
}
    var a = 1;
    var b = 0;

    for(cont = 1; cont < 10; cont++){
        for(conta = 1; conta <= 10; conta++){
            var result = a * b;
            console.log(b + "x" + a + "=" + result + "|");
            b++
            if(conta === 10){
                pulalinha();
                a++
                b = 0;
            }
        }
    }

pulalinha()
