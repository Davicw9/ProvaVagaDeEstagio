let num = 34;
function fibonacci(num){
    let fib = [0, 1];
    
    for(let i = 2; fib[fib.length - 1] < num; i++){
        fib.push(fib[i - 1] + fib[i - 2]);
    }

    return fib;

}

console.log(fibonacci(num));

if(fibonacci(num).includes(num)){
    console.log('O numero ' + num + " esta presente na sequencia Fibonacci");
}else{
    console.log('O numero ' + num + " nao esta presente na sequencia Fibonacci");
}