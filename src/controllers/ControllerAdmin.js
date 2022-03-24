export class ControllerAdmin {
  static body = document.querySelector("body");
  static formCadastro = document.querySelector(".cadastro-produto");
  static closeModal = document.querySelector(".section__fecharmodal");
  static modalEdicao = document.querySelector(".modal-edicao");
  static modalCadastro = document.querySelector(".modal__cadastroProduto");

  static modal = document.querySelector(".sectionModal__cadastroProduto");

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
  //   static pegarDadosCadastro(event) {
  //     event.preventDefault();
  //     const inputs = event.target;

  //     const dadosCadastro = {};

  //     for (let i = 0; i < inputs.length; i++) {
  //       if (inputs[i].name) {
  //         dadosCadastro[inputs[i].name] = inputs[i].value;
  //       }
  //     }
  //     //   window.location.href = "./admin.html";
  //     //   localStorage.setItem("novoProduto", JSON.stringify(dadosCadastro));
  //     return dadosCadastro;
  //   }

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

  /*static closeModalEdit() {
        this.modalEdicao.addEventListener("click", this.closeModalEditProduct)
    }

    static closeModalEditProduct(event) {
       const modalEdicao  = document.querySelector(".modal-edicao")

        // const modalf = document.querySelector(".modal")

        if (event.target.className === "close-modal") {
            window.location.href = "./admin.html"
           
        }
        console.log(event.tagName)
    }

    static getInfo() {
        this.formCadastro.addEventListener("submit", this.newProduct)

    }

    static newProduct(event) {
        event.preventDefault()

        const formInput = event.target
        const checkedBakery   = document.querySelector(".input-checkbox1")
        const checkedFruits  = document.querySelector(".input-checkbox2")
        const checkedDrinks  = document.querySelector(".input-checkbox3")

        const newObject = {}

        for (let i = 0; i < formInput.length; i++) {
            if (formInput[i].name) {
                newObject[formInput[i].name] = formInput[i].value
            }
        }

        if (checkedBakery.checked) {
            newObject["checkedBakery"] = "panificadora"
            console.log("eu sou a porra da panificadora")
        } if (checkedDrinks.checked) {
            newObject["checkedDrinks"] = "bebidas"
            console.log("beber pra esquecer")
        } if (checkedFruits.checked) {
            newObject["checkedFruits"] = "frutas"
            console.log("eu sou o caralho da fruta")
        }
        console.log(newObject)
    } */
}
