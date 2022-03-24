import { Template } from "../models/Templates.js"
import { products } from "../script/script.js"
import { ControllerFilters } from "./ControllerFilters.js"

const AllProducts = document.querySelector('.all-products')
const bakeryProducts = document.querySelector('.bakery-products')
const fruitsProducts = document.querySelector('.fruits-products')
const drinksProducts = document.querySelector('.drinks-products')

export class ControllerHome{

    static async bakeryFilter(array, showCase){
        bakeryProducts.addEventListener('click', bakeryFunction)
        function bakeryFunction(){
            ControllerFilters.filterPadaria(array, showCase)
        }
    }

    static async fruitsFilter(array, showCase){
        fruitsProducts.addEventListener('click', fruitsFunction)
        function fruitsFunction(){
            ControllerFilters.filterFrutas(array, showCase)
        }
    }

    static async drinksFilter(array, showCase){
        drinksProducts.addEventListener('click', drinksFunction)
        function drinksFunction(){
            ControllerFilters.filterBebidas(array, showCase)
        }
    }

    static async AllProductsFilter(array, showCase){
        AllProducts.addEventListener('click', AllProductsFunction)
        function AllProductsFunction(){
            Template.createTemplate(array, showCase);
        }
    }

}