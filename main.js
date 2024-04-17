const form = document.getElementById('agenda-contatos');
const dataAtual = document.getElementById('data-atual');
const nomeSobrenome = document.getElementById('nome-sobrenome');
const numeroContato = document.getElementById('numero-contato');
datas = [];
nomes = [];
contatos = [];

linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    addContato();
    atualizaAgenda();
})


function addContato() {
    const inputData = document.getElementById('data-atual');
    const inputNomeSobrenome = document.getElementById('nome-sobrenome');
    const inputContatos = document.getElementById('numero-contato');

        datas.push(inputData.value);
        nomes.push(inputNomeSobrenome.value);
        contatos.push(inputContatos.value);

        let linha = '<tr>';
        linha += `<td>${inputData.value}</td>`;
        linha += `<td>${inputNomeSobrenome.value}</td>`;
        linha += `<td>${inputContatos.value}</td>`;
        linha += '</tr>';

        linhas += linha;

        inputData.value = '';
        inputNomeSobrenome.value = '';
        inputContatos.value = '';

    }

function atualizaAgenda() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}