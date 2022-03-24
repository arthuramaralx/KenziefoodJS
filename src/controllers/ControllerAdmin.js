export class ControllerAdmin {
  static body = document.querySelector("body");
  static formCadastro = document.querySelector(".cadastro-produto");
  static closeModal = document.querySelector(".section__fecharmodal");
  static modalCadastro = document.querySelector(".modal__cadastroProduto");
  static headerTop = document
    .querySelector("#header-top")
    .addEventListener(
      "click",
      () => (window.location.href = "../../index.html")
    );

  static observerModalCadastro() {
    this.body.addEventListener("click", this.showModalCadastro);
  }

  static showModalCadastro(event) {
    if (event.target.id === "novo-produto") {
      const modal = document.querySelector(".sectionModal__cadastroProduto");

      modal.classList.remove("sectionModal__cadastroProduto");
    }
  }
  static observerCadastro() {
    this.modalCadastro.addEventListener("click", this.fecharJanela);
  }

  static fecharJanela(event) {
    const sectionModal = document.querySelector(".sectionModal");
    if (event.target.className == "section__fecharmodal") {
      sectionModal.classList.add("sectionModal__cadastroProduto");
    }
  }

  static observerEdit() {
    this.body.addEventListener("click", this.showEditProduct);
  }

  static showEditProduct(event) {
    if (event.target.className === "editProduct") {
      console.log(event.target);
      const editModal = document.querySelector(".sectionModal__alterarProduto");

      editModal.classList.remove("sectionModal__alterarProduto");
    }
  }
}
