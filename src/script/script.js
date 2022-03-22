import { Template } from "../models/Templates.js";
import { Api } from "../api/Api.js";


const testUl = document.querySelector('.template-container')
const carrinhoUl = document.querySelector('.cart-products')
console.log(carrinhoUl)

const x = await Api.getPublicProducts()
console.log(x)
Template.createTemplate(x, testUl)
Template.cartTemplate(x,carrinhoUl)