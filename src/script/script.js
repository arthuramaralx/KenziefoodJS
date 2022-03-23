import { Template } from "../models/Templates.js";
import { Api } from "../api/Api.js";
import { ControllerCart } from "../controllers/ControllerCart.js";
import { ControllerFilters } from "../controllers/ControllerFilters.js";
ControllerCart.observerUl();
ControllerCart.observerCart();
ControllerCart.onload();
ControllerCart.footerObserver();

let price = ControllerCart.updatePrice();

export const products = await Api.getPublicProducts();
const listatemplate = document.querySelector(".template-container ul");
Template.createTemplate(products, listatemplate);
