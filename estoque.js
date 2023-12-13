let estoque = {
    joao: [{ tipo: "maca", quantidade: 1 }],
    maria: [{ tipo: "maca", quantidade: 2 }],
  };

function getEstoque(){
    return structuredClone(estoque);
}
function cleanEstoque() {
    estoque = {}
  }


  
function transacao(origem, destino, tipo, quantidade){
    const estoque = getEstoque();

    if (origem == destino){
        return
    }
    if (destino === 'pomar'){
        const pessoa = estoque[origem]
        for (let i=0; i<pessoa.length; i++){
            const monte = pessoa[i];
            if(monte.tipo === tipo){
                monte.qtd -=Math.min(quantidade, monte.qtd)
                return
            }
        }
    }
    if (origem ==='pomar'){
        const pessoa = estoque[destino];
        for(let i=0; i< pessoa.length; i++){
            const monte = pessoa[i];
            if (monte.tipo === tipo){
                monte.qtd += Math.min(quantidade, monte.qtd)
                return
            }
            novoMonte = {'tipo': tipo, 'qtd': Math.max(quantidade, 0)}
            pessoa.push(novoMonte)
            return
        }
    }
    else{
        const pessoaOrigem = estoque[origem];
        const pessoaDestino = estoque[destino];
        let monteOrigem;
        for (let i=0; i< pessoaOrigem.length; i++){
            const monte = pessoaOrigem[i];
            if (monte.tipo === tipo){
                monteOrigem = monte
                break
            }      
        if (!monteOrigem) return;
        let monteDestino;
        for (let i=0; i< pessoaOrigem.length; i++){
            const monte = pessoaOrigem[i];
            if (monte.tipo === tipo){
                monteOrigem = monte
                break
            }      
        }
        if(!monteDestino){
            monteDestino = {'tipo': tipo, 'qtd': quantidade}
            pessoaDestino.push(monteDestino)
        }
        const qtdReal = Math.min(quantidade, monteOrigem.qtd)
        monteDestino.qtd +=qtdReal
        monteOrigem.qtd -=qtdReal
    }

}
}

export {getEstoque, cleanEstoque, transacao};