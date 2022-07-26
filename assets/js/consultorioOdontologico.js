var pacientes = [];

function adicionarPaciente() {
  let inPaciente = document.getElementById('inPaciente');
  let outEspera = document.getElementById('outEspera');

  let nome = inPaciente.value;

  if (nome == "") {
    alert('Digite o nome do paciente');
    inPaciente.focus();
    return;
  }

  pacientes.push(nome);
  let lista = "";


  for(let i = 0; i < pacientes.length; i++){
    lista = `${lista + (i + 1 )} . ${pacientes[i]} \n`;
  }
 outEspera.textContent = lista;

}

btAdicionar = document.getElementById('btAdicionar');
btAdicionar.addEventListener('click', adicionarPaciente);

function pacienteUrgente() {
  let inPaciente = document.getElementById('inPaciente');
  let outEspera = document.getElementById('outEspera');

  let nome = inPaciente.value;

  if (nome == "") {
    alert('Digite o nome do paciente');
    inPaciente.focus();
    return;
  }

  pacientes.unshift(nome);
  let lista = "";


  for(let i = 0; i < pacientes.length; i++){
    lista = `${lista + (i + 1 )} . ${pacientes[i]} \n`;
  }
 outEspera.textContent = lista;

}

btUrgencia = document.getElementById('btUrgencia');
btUrgencia.addEventListener('click', pacienteUrgente);

function atenderPaciente() {

  let outAtender = document.getElementById('outAtendimento');
  let inPaciente = document.getElementById('inPaciente');
  let nome = inPaciente.value;

  if (pacientes.length == 0) {
    alert('Não tem paciente para atender');
    inPaciente.focus();
    return;
  }
  emAtendimento = pacientes.shift();
  outAtender.textContent = emAtendimento;
  let lista = "";


  for(let i = 0; i < pacientes.length; i++){
    lista = `${lista + (i + 1 )} . ${pacientes[i]} \n`;
  }

  outEspera.textContent = lista;



}

btAtender = document.getElementById('btAtender');
btAtender.addEventListener('click', atenderPaciente);
