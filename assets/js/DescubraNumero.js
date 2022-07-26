var erros = [];

var sorteado = Math.floor(Math.random() * 100) + 1;

let btnApostar = document.getElementById('btnApostar');
let btnJogar = document.getElementById('btnJogar');
btnJogar.disabled = true;
const CHANCES = 6;
var numErros;
var numChances;

function  apostarNumero() {
  let inNumero = document.getElementById('inNumero');
  let numero = Number(inNumero.value);

  if(numero <= 0 || numero >= 100 || isNaN(numero)){
    alert('Informe um número válidol...');
    inNumero.focus();
    return;
  }

  let outErros = document.getElementById('outErros');
  let outChances = document.getElementById('outChances');
  let outDica = document.getElementById('outDica');

  if(numero == sorteado){
    alert('Parabéns!! você acertou!!!')
    btnApostar.disabled = true;
    btnJogar.className = "exibe";
    outDica.textContent = "Parabéns!! Número sorteado: " + sorteado;
  } else {
         if(erros.indexOf(numero) >= 0) {
           alert('Você já apostou o número' + numero + '. Tente outro...');
         }else{
           erros.push(numero);
            numErros = erros.length;
            numChances = CHANCES - numErros;
           outErros.textContent = numErros + "(" + erros.join(",") + ")";
           outChances.textContent = numChances;
         }
       }

    if(numChances == 0){
      alert('Suas chances acabaram');
      btnApostar.disabled = true;
      btnJogar.disabled = false;
      outDica.textContent = "Game Over!! Número Sorteado: " + sorteado;
    }else {
      let dica = numero < sorteado ? "Maior" : "Menor";
      outDica.textContent = "Dica: Tente um número: " + dica + " que " + numero;
    }

  inNumero.value = "";
  inNumero.focus();
}

btnApostar.addEventListener('click', apostarNumero);


function jogarNovamente() {
  location.reload();
}

btnJogar.addEventListener('click', jogarNovamente);
