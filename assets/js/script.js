// versao dinâmica (testes)
document.addEventListener('DOMContentLoaded', function () {
    const botoesContainer = document.getElementById('botoes');

    const botoes = [
        ['acao', '/'],
        ['acao', 'c'],
        ['acao', '*'],
        ['valor', 7],
        ['valor', 8],
        ['valor', 9],
        ['acao', '-'],
        ['valor', 4],
        ['valor', 5],
        ['valor', 6],
        ['acao', '+'],
        ['valor', 1],
        ['valor', 2],
        ['valor', 3],
        ['acao', '='],
        ['valor', 0],
        ['acao', '.']
    ];

    for (const [tipo, valor] of botoes) {
        const button = document.createElement('button');
        button.textContent = valor;
        button.setAttribute('type', 'button');
        button.classList.add('btn', 'btn-dark', 'btn-lg', 'font-weight-light');

        button.addEventListener('click', function () {
            calcular(tipo, valor);
        });

        botoesContainer.appendChild(button);
    }
});

// versao utilizada
function calcular(tipo, valor) {
    const resultadoCampo = document.getElementById('resultado');
    const expressaoAtual = resultadoCampo.value;

    if (tipo === 'acao') {
        if (valor === 'c') {
            // Limpar
            resultadoCampo.value = '';

        } else if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
            // Verificar sequência inválida
            const ultimoCaracter = expressaoAtual.slice(-1);
            if (ultimoCaracter === '+' || ultimoCaracter === '-' || ultimoCaracter === '*' || ultimoCaracter === '/' || ultimoCaracter === '.') {

                alert('Sequência inválida: ' + expressaoAtual + valor);
                return;

            }
                // Adicionar operador ou ponto ao resultado
                resultadoCampo.value += valor;


        } else if (valor === '=') {
            // Calcular e exibir o resultado
            try {

                const valorCampo = eval(expressaoAtual);
                resultadoCampo.value = valorCampo;

            } catch (error) {

                alert('Erro ao calcular: ' + error.message);

            }
        }
    } else if (tipo === 'valor') {
        // Adicionar valor ao resultado
        resultadoCampo.value += valor;

    }
}