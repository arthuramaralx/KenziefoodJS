import { products } from "../script/script.js";
import { Template } from "../models/Templates.js";

let arrayCart = [];

const ulCarrinho = document.querySelector(".list-products");
export class ControllerCart {
  static ulCart = document.querySelector(".template-container ul");
  static observerUl() {
    this.ulCart.addEventListener("click", this.addCart);
  }

  static async addCart(event) {
    if (event.target.closest("li")) {
      let idTarget = await Number(event.target.closest("li").id);

      let cartProductsTemplate = products.find((item) => {
        return item.id == idTarget;
      });
      arrayCart.push(cartProductsTemplate);
      ControllerCart.itensLocal(cartProductsTemplate);
    }
  }
  static async itensLocal(item) {
    let novosItens;
    if (localStorage.length == 0) {
      localStorage.setItem("usuarioProdutos", JSON.stringify(arrayCart));
    } else if (localStorage.length > 0) {
      novosItens = JSON.parse(localStorage.usuarioProdutos);
      novosItens.push(item);

      localStorage.setItem("usuarioProdutos", JSON.stringify(novosItens));
    } else {
    }
    if (localStorage.length > 0) {
      let x = JSON.parse(localStorage.getItem("usuarioProdutos"));
      Template.cartTemplate(x, ulCarrinho);
    }
  }
}
