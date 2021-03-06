import { products } from "../script/script.js";
import { Template } from "../models/Templates.js";
import { ControllerHome } from "./ControllerHome.js";

let arrayCart = [];
let verificacao = false;

const ulCarrinho = document.querySelector(".list-products");
export class ControllerCart {
  static footer = document.querySelector(".card-header-footer");
  static ulCart = document.querySelector(".template-container ul");
  static ulCarrinhoProdutos = document.querySelector(".list-products");

  static observerUl() {
    this.ulCart.addEventListener("click", this.addCart);
  }

  static async addCart(event) {
    if (
      event.target === event.target.closest("li").childNodes[9].lastElementChild
    ) {
      let idTarget = await Number(event.target.closest("li").id);
      let cartProductsTemplate = products.find((item) => {
        return item.id == idTarget;
      });
      arrayCart.push(cartProductsTemplate);
      ControllerCart.itensLocal(cartProductsTemplate);
      ControllerHome.ProductsPriceUpdate();
    }
  }

  static async itensLocal(item) {
    let novosItens;
    if (localStorage.tokenUsuario) {
      localStorage.clear();
    }

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

  static observerCart() {
    this.ulCarrinhoProdutos.addEventListener("click", this.removeCart);
  }

  static async removeCart(event) {
    const x = document.querySelector(".list-products");
    if (event.target.className === "img-trash") {
      let selectedProduct =
        event.target.closest("li").childNodes[1].children[2];
      let selectedProductTrash = event.target.closest(".img-trash");
      let cartUl = event.target.closest("ul").childNodes;

      let localStorageProducts = JSON.parse(
        localStorage.getItem("usuarioProdutos")
      );
      for (let i = 0; i < cartUl.length; i++) {
        if (selectedProduct == cartUl[i].childNodes[1].childNodes[5]) {
          localStorageProducts.splice(i, 1);

          localStorage.setItem(
            "usuarioProdutos",
            JSON.stringify(localStorageProducts)
          );
          Template.cartTemplate(localStorageProducts, ulCarrinho);
          ControllerHome.ProductsPriceUpdate();
        }
      }
    }
  }

  static async onload() {
    window.addEventListener("load", this.reload);
  }
  static async reload() {
    let newProducts = JSON.parse(localStorage.getItem("usuarioProdutos"));
    await Template.cartTemplate(newProducts, ulCarrinho);
  }

  static updatePrice(quantityPlaceholder, pricePlaceholder) {
    if (!localStorage.usuarioProdutos) {
      let totalPrice = 0;
      let quantity = 0;
      let cartInfo = {};
      cartInfo = { totalPrice, quantity };
      return cartInfo;
    } else {
      let localStorageProducts = JSON.parse(
        localStorage.getItem("usuarioProdutos")
      );
      let arrayProductPrices = [];
      localStorageProducts.forEach((products) =>
        arrayProductPrices.push(products.preco)
      );
      let totalPrice = arrayProductPrices.reduce((x, y) => x + y, 0);
      let quantity = localStorageProducts.length;
      let cartInfo = {};
      cartInfo = { totalPrice, quantity };
      return cartInfo;
    }
  }

  static footerObserver() {
    this.footer.addEventListener("click", this.popUpCart);
  }
  static popUpCart(event) {
    if (event.target.className == "card-header-footer") {
      if (verificacao) {
        verificacao = !verificacao;
        const cartClose = document.querySelector(".card-container");
        const opacity = document.querySelector(".opacity");
        cartClose.removeAttribute("id");
        opacity.removeAttribute("id");
      } else {
        verificacao = !verificacao;
        const cartClose = document.querySelector(".card-container");
        const opacity = document.querySelector(".opacity");
        cartClose.setAttribute("id", "removeTag");
        opacity.setAttribute("id", "removeTag");
      }
    }
  }
}
