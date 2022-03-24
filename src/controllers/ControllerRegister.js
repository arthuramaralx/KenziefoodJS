import { Api } from "../api/Api.js";

export class ControllerRegister {
  static main = document.querySelector(".main-register");
  static loginButton = document.getElementById('registerLogin')
  static observerRegister() {
    this.main.addEventListener("submit", this.getRegisterData);
  }
  static async getRegisterData(event) {
    event.preventDefault();
    const dataRegister = {};
    const inputs = event.target;

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        dataRegister[inputs[i].name] = inputs[i].value;
      }
    }
    const result = await Api.registerApi(dataRegister);
    console.log(result)
    if (result.message === "Validation error: Deve ser um email valido") {
      
      modalLogin.innerHTML = "Usuário invalido"
      modalLogin.classList.remove("modal-login-close")
      modalLogin.classList.add("modal-login-show")
      const timeOut =  setTimeout(()=>{
        modalLogin.classList.remove("modal-login-show")
        modalLogin.classList.add("modal-login-close")
       
      }, 2000)
    }
      if(result === "User Already Exists!"){

        modalLogin.innerHTML = "Usuário já existe"
        modalLogin.classList.remove("modal-login-close")
        modalLogin.classList.add("modal-login-show")
        const timeOut =  setTimeout(()=>{
          modalLogin.classList.remove("modal-login-show")
          modalLogin.classList.add("modal-login-close")
         
        }, 2000)
      }

     else {
      window.location.href = "./login.html";
    }
  }
  static observerRegisterLogin(){
    this.loginButton.addEventListener("click", this.registerLoginFunction)
  }
  static registerLoginFunction(){
    window.location.href = "./login.html"
  }
}
