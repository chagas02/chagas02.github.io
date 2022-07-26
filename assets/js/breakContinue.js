function calcular() {
  do {
    let nome = Number(prompt('digite um número: '));

    if(nome == 0 || isNaN(nome)){
      let sair = confirm("Confirma saída?");
      if(sair){
        break;
      }else {
        continue;
      }
    }
    if(nome % 2 == 0){
      alert(`O dobro de ${nome} é: ${nome*2}`);
    }else{
      alert(`O triplo de ${nome} é: ${nome*3}`);
    }


  }while(true);
}
btnMultiplicar = document.getElementById('btnMultiplicar');
btnMultiplicar.addEventListener('click', calcular);
