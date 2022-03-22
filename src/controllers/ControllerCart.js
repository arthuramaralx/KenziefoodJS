import { products } from "../script/script.js"
import {Template} from "../models/Templates.js"
let  arrayCart = []
const ulCarrinho = document.querySelector('.list-products')
export class ControllerCart {
    static ulCart = document.querySelector('.template-container ul')
    static observerUl() {
        this.ulCart.addEventListener('click', this.addCart)
    }



    static async addCart(event) {
        // console.log(products)
        // console.log(event.target.closest('li'))
        if (event.target.closest('li')) {
            let idTarget = await Number(event.target.closest('li').id)
            console.log(idTarget)

            let cartProductsTemplate = products.find((item)=> {
               return item.id == idTarget
            })
           arrayCart.push(cartProductsTemplate)
        }

        localStorage.setItem("usuarioProdutos", JSON.stringify(arrayCart))
        const dataLocal = JSON.parse(localStorage.getItem("usuarioProdutos"))
        Template.cartTemplate(dataLocal,ulCarrinho)
        console.log(dataLocal)
    }



}

