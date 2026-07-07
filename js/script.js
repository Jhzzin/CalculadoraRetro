const display = document.getElementById('display');
const botoes = document.querySelectorAll('button');

const operadores = ['+', '-', '/', 'X']

function limparDisplay() {
    display.innerText = '0'
}

function apagarUltimoCaractere() {
    if (display.innerText.length > 1) display.innerText = display.innerText.slice(0,-1);
    else display.innerText = '0';
}

function calcularResultado() {
    const expressao = display.innerText.replace(/X/g,'*');

    try {
        display.innerText = eval(expressao);
    } catch {
        display.innerText = 'ERROR';
    }
}

function adicionarCaractere(caractere) {
    const ultimoCaractere = display.innerText.slice(-1);

    if (operadores.includes(caractere) && operadores.includes(ultimoCaractere)) {
        display.innerText = display.innerText.slice(0,-1) + caractere;
    return;
    } 

    if (display.innerText === '0') display.innerText = caractere;
    else display.innerText += caractere;
}

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const textoBotao = botao.innerText;
        if (textoBotao === 'C') limparDisplay();
        else if (textoBotao === 'DEL') apagarUltimoCaractere();
        else if (textoBotao === '=') calcularResultado();
        else adicionarCaractere(textoBotao);
    })
})