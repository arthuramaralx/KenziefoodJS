import { Template } from "../models/Templates.js";
import { Api } from "../api/Api.js";


const products = await Api.getPublicProducts()
const listatemplate = document.querySelector('.template-container ul')

Template.createTemplate(products, listatemplate)
