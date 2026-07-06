const display = document.getElementById('display');
const botoes = document.querySelectorAll('button');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const textoBotao = botao.innerText;

        if (textoBotao === 'C') display.innerText = 0;

        else if (textoBotao === 'DEL') {
            if (display.innerText.length > 1) display.innerText = display.innerText.slice(0,-1);
            else display.innerText = '0';
        }

        else if (textoBotao === '=') {
            const expressao = display.innerText.replace(/x/g, '*');

            try {
                display.innertext = eval(expressao);
            } catch {
                display.innerText = 'ERROR';
            }
        }

        else {
            if (display.innerText === '0') display.innerText = textoBotao;
            else display.innerText += textoBotao;
        }
    })
})