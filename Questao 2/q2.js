const frase = 'GostAria ser contratado';
let contador = 0;

function verificaAoua(frase){
    contador = 0;
    for(let i = 0; frase.length > i; i++){
        if(frase[i] === 'A' || frase[i] === 'a'){
            contador++;
        }
    }
    return contador;
}

if(verificaAoua(frase) > 0){
    console.log("A letra A ou a aparece " + verificaAoua(frase) + " vez(es) na frase " + frase);
}else{
    console.log("Nenhuma letra A ou a foi encontrada");
}

