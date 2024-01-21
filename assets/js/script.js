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