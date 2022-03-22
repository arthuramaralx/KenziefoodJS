import { Api } from "../api/Api.js";

export class ControllerRegister {
  static main = document.querySelector(".main-register");

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
    if (result.status == "Error") {
      alert("Usuario já existe");
    } else {
      window.location.href = "./login.html";
    }
  }
}
