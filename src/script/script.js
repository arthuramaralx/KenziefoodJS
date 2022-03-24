import { Template } from "../models/Templates.js";
import { Api } from "../api/Api.js";
import { ControllerCart } from "../controllers/ControllerCart.js";
import { ControllerHome } from "../controllers/ControllerHome.js";
ControllerCart.observerUl();
ControllerCart.observerCart();
ControllerCart.onload();
ControllerCart.footerObserver();


let price = ControllerCart.updatePrice();
console.log(price)

export const products = await Api.getPublicProducts();

const listatemplate = document.querySelector(".template-container ul");
Template.createTemplate(products, listatemplate);
ControllerHome.bakeryFilter(products, listatemplate);
ControllerHome.fruitsFilter(products, listatemplate);
ControllerHome.drinksFilter(products, listatemplate);
ControllerHome.AllProductsFilter(products, listatemplate);
ControllerHome.inputValue(products, listatemplate)
ControllerHome.ProductsPriceUpdate();




