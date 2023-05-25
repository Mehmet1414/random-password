const passwordInput = document.getElementById("password");
const lenght = 12;

const allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%'()*+,-./:;<=?@[]^_`{|}~";
const copyIcon = document.querySelector(".copy-icon");

function createPassword() {
  let password = "";

  while (lenght > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordInput.value = password;
  copyIcon.style.color= "#E57C23"
}

function copyPassword(){
    passwordInput.select();
    document.execCommand("copy");
    copyIcon.style.color = "#025464ca";
}