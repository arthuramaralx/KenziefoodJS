import { Template } from "../models/Templates.js";
import { ControllerCart } from "./ControllerCart.js";
import { ControllerFilters } from "./ControllerFilters.js";

const AllProducts = document.querySelector(".all-products");
const bakeryProducts = document.querySelector(".bakery-products");
const fruitsProducts = document.querySelector(".fruits-products");
const drinksProducts = document.querySelector(".drinks-products");
const quantity = document.querySelector(".products-quantity");
const price = document.querySelector(".products-price");

const input = document.querySelector("#search-input");

export class ControllerHome {
  static async bakeryFilter(array, showCase) {
    bakeryProducts.addEventListener("click", () => {
      ControllerFilters.filterPadaria(array, showCase);
    });
  }

  static async fruitsFilter(array, showCase) {
    fruitsProducts.addEventListener("click", () => {
      ControllerFilters.filterFrutas(array, showCase);
    });
  }

  static async drinksFilter(array, showCase) {
    drinksProducts.addEventListener("click", () => {
      ControllerFilters.filterBebidas(array, showCase);
    });
  }

  static async AllProductsFilter(array, showCase) {
    AllProducts.addEventListener("click", () => {
      Template.createTemplate(array, showCase);
    });
  }

  static async ProductsPriceUpdate() {
    let productQuantity = ControllerCart.updatePrice();
    quantity.innerText = `${productQuantity.quantity}`;
    price.innerText = ` R$ ${productQuantity.totalPrice.toFixed(2)}`;
  }

  static async inputValue(array, showCase) {
    input.addEventListener("keyup", () => {
      ControllerFilters.filterInput(array, showCase);
    });
  }
}
