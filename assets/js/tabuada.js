function tabuada(){
  let inNumero = document.getElementById('inNum');
  let numero = inNumero.value;
  let ateNumero = document.getElementById('inAte');
  let ate = ateNumero.value;
  let res = " ";
  let outResultado = document.getElementById('outResultado');
  if((numero == 0 || isNaN(numero)) || (ate == 0 || isNaN(ate))){
    alert('Informe um número Válido...');
    inNum.focus();
    return;
  }

  for(i=1; i <=ate; i++){
    //res = res + numero + "x" + i + "=" + numero * i + "\n";
    res = ` ${res + numero}  x  ${i} = ${numero * i} \n`

  }
  outResultado.textContent = res;
}

let btMostrar = document.getElementById('btnRes');
btMostrar.addEventListener('click', tabuada);
