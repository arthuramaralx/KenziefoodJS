import { Api } from "../api/Api.js";

export class ControllerLogin {
  static main = document.querySelector(".main-login");
  static buttonLogin = document.querySelector(".button-login-register");
  static observerLogin() {
    this.main.addEventListener("submit", this.getFormData);
  }
  static async getFormData(event) {
    const modalLogin = document.getElementById("modalLogin");

    event.preventDefault();

    const dataLogin = {};
    const inputs = event.target;

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        dataLogin[inputs[i].name] = inputs[i].value;
      }
    }
    const result = await Api.loginApi(dataLogin);
    console.log(result);
    if (result.error) {
      if (result.error.includes("Email")) {
        modalLogin.innerHTML = "Email não existe";
        modalLogin.classList.remove("modal-login-close");
        modalLogin.classList.add("modal-login-show");
        const timeOut = setTimeout(() => {
          modalLogin.classList.remove("modal-login-show");
          modalLogin.classList.add("modal-login-close");
        }, 2000);
      }
      if (result.error.includes("password")) {
        modalLogin.innerHTML = "Senha Incorreta";
        modalLogin.classList.remove("modal-login-close");
        modalLogin.classList.add("modal-login-show");
        const timeOut = setTimeout(() => {
          modalLogin.classList.remove("modal-login-show");
          modalLogin.classList.add("modal-login-close");
        }, 2000);
      }
    } else {
      localStorage.clear();
      localStorage.setItem("tokenUsuario", result);
      window.location.href = "./admin.html";
    }
  }

  static observerLoginRegister() {
    this.buttonLogin.addEventListener("click", this.observerLoginFunction);
  }

  static observerLoginFunction() {
    window.location.href = "./register.html";
  }
}
