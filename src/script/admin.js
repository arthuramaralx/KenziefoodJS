import { Template } from "../models/Templates.js"
import { Api } from "../api/Api.js";
import { ControllerAdmin } from "../controllers/ControllerAdmin.js";
const products = await Api.getPublicProducts()

Template.adminTemplate(products)

ControllerAdmin.observerModalCadastro()
//ControllerAdmin.closeModalCadastro()

//ControllerAdmin.getInfo()

/* ControllerAdmin.observerEdit()



ControllerAdmin.closeModalEdit() */