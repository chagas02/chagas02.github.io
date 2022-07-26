var numContas = 0;
var valTotal = 0;
var resposta = " ";

function mostrarConta(){

  let inConta = document.getElementById('inConta');
  let inValor = document.getElementById('inValor');
  let outContas = document.getElementById('outContas');
  let outValor = document.getElementById('outValor');

  let valor = Number(inValor.value);
  let conta = inConta.value;

  if(conta == "" || valor <= 0 || isNaN(valor)){
    alert("Informe os dados corretamente...");
    inConta.focus();
    return;
  }
  numContas++;
  valTotal = valTotal + valor;
  resposta = `${resposta + conta} - R$: ${valor.toFixed(2)} \n`;

  outContas.textContent = resposta +  "-------------------------";
  outValor.textContent = `${numContas} Contas - Total R$: ${valTotal}`;

  inConta.value = " ";
  inValor.value = " ";
  inConta.focus();
}
let btnRegistrar = document.getElementById("btnRegistrar");
btnRegistrar.addEventListener("click", mostrarConta);
