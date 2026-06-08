// 1. Lista inicial de cores (Array)
const listaCores = ['#4F341B', '#C27E41', '#E6CDB2', '#E6CDB2', '#AC7559', '#893D1E', '#803C1D', '#9B4D23', '#603B17', '#d0793b',];
let indiceAtual = 0;

// 2. Mapeando os elementos do HTML
const header = document.getElementById('meuHeader');
const codigoCorTexto = document.getElementById('codigoCorTexto');
const btnMudar = document.getElementById('btnMudar');
const btnExcluir = document.getElementById('btnExcluir');
const btnAdicionar = document.getElementById('btnAdicionar');
const inputNovaCor = document.getElementById('novaCor');

// 3. Função central para atualizar a interface (cor de fundo e texto)
function atualizarInterface() {
    const corAtiva = listaCores[indiceAtual];
    header.style.backgroundColor = corAtiva;
    codigoCorTexto.textContent = corAtiva;
}

// 4. Função para mudar a cor
btnMudar.addEventListener('click', () => {
    indiceAtual = (indiceAtual + 1) % listaCores.length;
    atualizarInterface();
});

// 5. Função para excluir a cor atual da lista
btnExcluir.addEventListener('click', () => {
    if (listaCores.length <= 1) {
        alert('A lista precisa ter pelo menos uma cor restante!');
        return;
    }

    const corRemovida = listaCores.splice(indiceAtual, 1);

    if (indiceAtual >= listaCores.length) {
        indiceAtual = 0;
    }

    atualizarInterface();
    alert(`A cor "${corRemovida}" foi removida com sucesso!`);
});

// 6. Função para adicionar uma nova cor à lista
btnAdicionar.addEventListener('click', () => {
    const valorCor = inputNovaCor.value.trim();

    if (valorCor !== '') {
        listaCores.push(valorCor);
        alert(`A cor "${valorCor}" foi adicionada ao fim da lista!`);
        inputNovaCor.value = '';
        inputNovaCor.focus();
    } else {
        alert('Por favor, digite um nome de cor ou código hexadecimal válido.');
    }
});

// Atalho: Pressionar "Enter" no input também adiciona a cor
inputNovaCor.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        btnAdicionar.click();
    }
});

// Executa uma vez ao carregar a página para definir o texto inicial correto
atualizarInterface();