import { Template } from "../models/Templates.js"
export class ControllerFilters{

static filterPadaria(array, listatemplate){
    let products = array
    let filteredProducts = products.filter((item)=> item.categoria === "Panificadora")
    Template.createTemplate(filteredProducts, listatemplate) 
}
//Frutas Panificadora Bebidas
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

}