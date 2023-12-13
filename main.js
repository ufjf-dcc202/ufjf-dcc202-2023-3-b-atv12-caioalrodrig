import {getEstoque, transacao} from './estoque.js';

const olJoao = document.querySelector("#joao");
const olMaria = document.querySelector("#maria");

document.entrada.addEventListener('submit', leFormulario);
atualizaTela();



function leFormulario(event){
    event.preventDefault();
    const quantidade = document.entrada.quantidade.valueAsNumber;
    const tipo =document.entrada.fruta.value;
    const origem = document.entrada.origem.value;
    const destino = document.entrada.destino.value;
    
    transacao(origem, destino, tipo, quantidade);
    atualizaTela();
}


function preencheLista(lista, estoqueDaPessoa) {
    lista.textContent = "";
  
    if (Array.isArray(estoqueDaPessoa)) {
      for (let i = 0; i < estoqueDaPessoa.length; i++) {
        const monte = estoqueDaPessoa[i];
        const li = document.createElement("li");
        li.textContent = `${monte.tipo}: ${monte.quantidade}`;
        lista.appendChild(li);
      }
    }
  }
  
function atualizaTela() {
    const estoque = getEstoque();

    olJoao.innerHTML = "";
    olMaria.innerHTML = "";


    preencheLista(olJoao, estoque.joao);
    preencheLista(olMaria, estoque.maria);
}
