function adicionarCaracter(caracter){ // pega o valor do display e adiciona os caracteres 
    const valorDisplay = document.querySelector(".display").value

    document.querySelector(".display").value = valorDisplay + caracter // 
}

function limpaTela(){
    document.querySelector(".display").value = ""  // .value = "" apaga os valores, limpa a tela da calculadora
}

function calcular(){
    const valorDisplay = document.querySelector(".display").value

    document.querySelector(".display").value = eval(valorDisplay) // eval resolve a conta e guarda do valorDisplay
}

function inverterNumero(){
    const valorDisplay = document.querySelector(".display").value

    document.querySelector(".display").value = valorDisplay * -1 // *-1 iverte positivo para negativo e negativo para positivo
}
