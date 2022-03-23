export class ControllerLogin {
  static main = document.querySelector("main");

  static observerLogin() {
    this.main.addEventListener("submit", this.getFormData);
  }
  static getFormData(event) {
    event.preventDefault();

    const dataLogin = {};
    const inputs = event.target;

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        dataLogin[inputs[i].name] = inputs[i].value;
      }
    }
    window.location.href = "./admin.html";
  }
}
