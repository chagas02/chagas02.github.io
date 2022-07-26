function nomCracha() {
  let inName = document.getElementById('inName');
  let outRes = document.getElementById('outRes');

  let name = inName.value

  if(name == " " || name.indexOf(" ") == -1){
    alert("Por favor digite o nome completo...")
    inName.focus();
    return;
  }

  let priEsp = name.indexOf(" ");
  let ultEsp = name.lastIndexOf(" ");

  let cracha = name.substr(0, priEsp) + name.substr(ultEsp);

  outRes.textContent = "Cracha: " + cracha;


}

btCracha = document.getElementById('btCracha');
btCracha.addEventListener('click', nomCracha);

function emailFuncionario(){
  let inName = document.getElementById('inName');
  let outEmail = document.getElementById('outEmail');

  let name = inName.value

  if(name == " " || name.indexOf(" ") == -1){
    alert("Por favor digite o nome completo...")
    inName.focus();
    return;
  }

    let partes = name.split(" ");
    let email = " ";
    let tam = partes.length;

    for(let i = 0; i < tam - 1; i++){
      email += partes[i].charAt(0);
    }


    email += partes[tam -1] + "empresa.com.br";

    outEmail.textContent = "email: " + email.toLowerCase();

}

  btEmail = document.getElementById("btEmail");
  btEmail.addEventListener('click', emailFuncionario);
