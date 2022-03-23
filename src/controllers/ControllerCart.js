import { products } from "../script/script.js";
import { Template } from "../models/Templates.js";

let arrayCart = [];

const ulCarrinho = document.querySelector(".list-products");
export class ControllerCart {
    static ulCart = document.querySelector(".template-container ul");
    static ulCarrinhoProdutos = document.querySelector(".list-products");

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



    static observerCart() {
        this.ulCarrinhoProdutos.addEventListener('click', this.removeCart)
    }

    static async removeCart(event) {

        let selectedProduct = event.target.closest('li')
        let cartUl = event.target.closest('ul').childNodes
        let localStorageProducts = JSON.parse(localStorage.getItem("usuarioProdutos"))


        for (let i = 0; i < cartUl.length; i++) {
            if (selectedProduct == cartUl[i]) {
                localStorageProducts.splice(i, 1)

                localStorage.setItem("usuarioProdutos", JSON.stringify(localStorageProducts))
                Template.cartTemplate(localStorageProducts, ulCarrinho);
            }
        }


    }


    static async onload() {

        window.addEventListener('load', function () {

            let x = JSON.parse(localStorage.getItem("usuarioProdutos"));
            Template.cartTemplate(x, ulCarrinho);

        })
    }

    static updatePrice() {
        let localStorageProducts = JSON.parse(localStorage.getItem("usuarioProdutos")) 
        let arrayProductPrices = []
        localStorageProducts.forEach((products)=> arrayProductPrices.push(products.preco))
        let totalPrice = arrayProductPrices.reduce((x,y)=>  x+y)
        let quantity = localStorageProducts.length
        let cartInfo = {}
        cartInfo = {totalPrice, quantity}
        return cartInfo
    }

}
