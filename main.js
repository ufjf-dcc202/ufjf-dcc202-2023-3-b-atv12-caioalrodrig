const olJoao = document.querySelector("#joao");
const olMaria = document.querySelector("#maria");

document.entrada.addEventListener('submit', leFormulario);


function leFormulario(event){
    event.preventDefault();
    const quantidade = document.entrada.quantidade.valueAsNumber;
    const fruta =document.entrada.fruta.value;
    const origem = socument.entrada.origem;
    const destino = document.entrada.destino.value;

    console.log(`${origem} doa ${quantidade} ${fruta} para ${destino}`);
}
