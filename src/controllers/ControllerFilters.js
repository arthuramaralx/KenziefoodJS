import { Template } from "../models/Templates.js"
import { products } from "../script/script.js"


const input = document.querySelector('#search-input')

export class ControllerFilters{

//Frutas Panificadora Bebidas
static filterPadaria(array, listatemplate){
    let products = array
    let filteredProducts = products.filter((item)=> item.categoria === "Panificadora")
    Template.createTemplate(filteredProducts, listatemplate) 
}
static filterFrutas(array, listatemplate){
    let products = array
    let filteredProducts = products.filter((item)=> item.categoria === "Frutas")
    Template.createTemplate(filteredProducts, listatemplate) 
}

static filterBebidas(array, listatemplate){    
    let products = array
    let filteredProducts = products.filter((item)=> item.categoria === "Bebidas")
    Template.createTemplate(filteredProducts, listatemplate) 
}

//FILTER INPUT

static filterInput(array, listatemplate){
    let products = array
    let arr = []

    let x = products.forEach((item) => {
        const { nome, categoria } = item
        const inputValue = input.value.toLowerCase().trim()

        if(nome.toLowerCase().includes(inputValue) || categoria.toLowerCase().includes(inputValue) ){
            arr.push(item)
        }
    })

    Template.createTemplate(arr, listatemplate)
}

}