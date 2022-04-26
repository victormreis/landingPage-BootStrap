let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let msg = document.querySelector("#msg");
let cont = 0;
let nomeok = false;
let emailok = false;
let msgok = false;
let btnenviar = document.querySelector("#btnEnviar");

function validaNome() {
  let txtNome = document.querySelector("#txtNome");

  if (nome.value.length < 3) {
    nome.style.border = "1px solid red";
    txtNome.innerHTML = "Nome Inválido";
    txtNome.style.color = "red";
    nomeok = false;
  } else {
    nome.style.border = "1px solid green";
    txtNome.innerHTML = "Nome valido";
    txtNome.style.color = "green";
    nomeok = true;
  }
}

function validaEmail() {
  let txtEmail = document.querySelector("#txtEmail");

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    email.style.border = "1px solid green";
    txtEmail.innerHTML = "Email Válido";
    txtEmail.style.color = "green";
    emailok = true;
  } else {
    email.style.border = "1px solid red";
    txtEmail.innerHTML = "Email Inválido";
    txtEmail.style.color = "red";
    emailok = false;
  }
}

function validaTexto() {
  let txtMsg = document.querySelector("#txtMsg");
  cont = msg.value.length;

  if (msg.value.length == 0 || msg.value.length < 10) {
    txtMsg.innerHTML = `${cont}/250 - Digite uma Mensagem valida para continuar`;
    txtMsg.style.color = "red";
    msg.style.border = "1px solid red";
    msgok = false;
  } else if (msg.value.length >= 10 && msg.value.length <= 249) {
    txtMsg.innerHTML = `${cont}/250`;
    txtMsg.style.color = "green";
    msg.style.border = "1px solid green";
    msgok = true;
  } else {
    txtMsg.innerHTML = `${cont}/250 - Limite Maximo de caracteres atingido`;
    txtMsg.style.color = "green";
    msgok = true;
  }
}

function enviar() {
  if (nomeok == true && emailok == true && msgok == true) {
    alert("Contato Enviado com Sucesso!");
  } else {
    alert("Preencha todos os dados corretamente Antes de Enviar!");
  }
}

nome.addEventListener("focusout", validaNome);
email.addEventListener("focusout", validaEmail);
msg.addEventListener("keyup", validaTexto);
btnenviar.addEventListener("click", enviar);
