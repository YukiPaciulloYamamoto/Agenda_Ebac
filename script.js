const form = document.getElementById('form-contato'); //Constante pegando o id "form-contato" e trazendo para o JS
const nomeContato = []; // pegando oq a pessoa digitar
const numeroContato = []; // pegando oq a pessoa digitar

let linhas = ''; //Adicionando linhas 

form.addEventListener('submit', function(e){ //Chama oq foi solicitado ao apertar no botão 
    e.preventDefault(); //Removendo o comportamento de atualizar pagina

    adicionarLinha(); //Adiciona a linha
    atualizaTabela(); //Atualiza a tabela
});

//Organizando Codigo

function adicionarLinha(){ //Função de adicionar linha completa
    const inputNomeContato = document.getElementById('nome-contato'); //Variavel para adicionar o nome do contato
    const inputNumeroContato = document.getElementById('numero-contato'); //Variavel para adicionar o numero do contato

    if(numeroContato.includes(inputNumeroContato.value)){ //Indicando que o número já foi inserido antes.
        alert(`O número ${inputNumeroContato.value} já foi inserido.`); 
    } else {
        nomeContato.push(inputNomeContato.value); //Adicionando novo valor caso o numero não estaja na lista
        numeroContato.push(inputNumeroContato.value); //Adicionando novo valor caso o numero não estaja na lista
    
        let linha = '<tr>'; // Adicionando valores pro corpo ta tabela || Recebendo html como string "<tr>"
        linha += `<td>${inputNomeContato.value}</td>`; //Adicionando a parte do "Nome do Contato" na tabela
        linha += `<td>${inputNumeroContato.value}</td>`; //Adicionando a parte do "Numero do contato" na tabela
        linha += `<tr/>`;
        
        linhas += linha; //Nomeando a função "linhas" para funcionar no escopo global
    }

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela(){ 
    const corpoTabela = document.querySelector('tbody'); // A parte do corpo da tabela, onde é inserido os dados desejados.
    corpoTabela.innerHTML = linhas;
    }