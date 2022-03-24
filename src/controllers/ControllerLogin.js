import { Api } from "../api/Api.js";

export class ControllerLogin {
  static main = document.querySelector(".main-login");

  static observerLogin() {
    this.main.addEventListener("submit", this.getFormData);
  }
  static async getFormData(event) {
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
      alert("Usuario nao encontrado");
    } else {
      localStorage.clear();
      localStorage.setItem("tokenUsuario", result);
      window.location.href = "./admin.html";
    }
  }
}
