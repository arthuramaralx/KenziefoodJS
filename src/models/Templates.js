export class Template {

  static sectionProducts = document.querySelector('#listar-produtos')

  static async createTemplate(array,showCase){
    console.log(array)

    array.forEach((item)=> {  
      const {categoria, descricao, id, imagem, nome, preco} = item
      const liProducts = document.createElement('li')
      liProducts.innerHTML = `
      
      <img src="${imagem}" alt="img-teste" class="img-item">
      <h2>${nome}</h2>
      <span class="span-resume">
      ${descricao}
      </span>
      <span class="span-filter">${categoria}</span>
      <div>
        <p>R$ ${preco.toFixed(2)}</p>
        <img src="./src/favicons/icon_card.png" alt="img-card" class="img-card">
      </div>
      
      `
      showCase.appendChild(liProducts)
    })

  }

  static async cartTemplate(array, showCase){
   
    array.forEach((item)=>{ 
      const {imagem, nome, preco, categoria} = item
      const liProducts = document.createElement('li')
      liProducts.innerHTML = `
      <img src="${imagem}" alt="produto no carrinho">
      <p>${nome}</p>
      <span>${categoria}</span>
      <p>${preco.toFixed(2)}</p>
      showCase.appendChild(liProducts)
      `
    })

  }

  static async adminTemplate(array, showCase) {

    const ulFixed = document.createElement('ul')
    ulFixed.classList.add("menu-tabela-produtos")
    ulFixed.innerHTML = `
    <li class="products-table">Produtos</li>
    <li class="produtos-categorias">Categorias</li>
    <li class="produtos-descricao">Descrição</li>
    <li class="produtos-acoes">Ações</li>
    `
    this.sectionProducts.appendChild(ulFixed)

    array.forEach((item) => { 
      const {imagem, nome, categoria, descricao} = item
      const ulProducts = document.createElement("ul")
      ulProducts.classList.add("tabela-produtos")
      ulProducts.innerHTML = `
      <li class="produtos-tabela"><img src="${imagem}"><p>${nome}</p></li>
      <li class="produtos-categorias">${categoria}</li>
      <li class="produtos-descricao">${descricao}</li>
      <li class="produtos-acoes"><img class="editProduct" src="../favicons/icon_edit2.png"> <img src="../favicons/icon_exclude2.png" alt=""></li> 
      `

      this.sectionProducts.appendChild(ulProducts)
    })
  }

}

{/* <ul class="menu-tabela-produtos">
          <li class="produtos-tabela">Produtos</li>
          <li class="produtos-categorias">Categorias</li>
          <li class="produtos-descricao">Descrição</li>
          <li class="produtos-acoes">Ações</li>
      </ul>

      <ul class="tabela-produtos">
         <li class="produtos-tabela"><img src="./src/img/comida-img/teste.png"><p>Panqueca de banana com aveia</p></li>
         <li class="produtos-categorias">bebidas frutas</li>
         <li class="produtos-descricao">esta receita serve muito bem 2 pessoas...</li>
         <li class="produtos-acoes"><img src="./src/img/vetores-btn/btn-editar.png"> <img src="./src/img/vetores-btn/btn-apagar.png" alt=""></li> */}


       /*   <li class="products-table"><img src= "${imagem}" class="productImg"><p>${nome}</p></li>
      <li class="produtos-categorias" id="greyText">${categoria}</li>
      <li class="produtos-descricao" id="greyText">${descricao}</li>
      <li class="produtos-acoes"><img class="editProduct" src="../favicons/icon_edit2.png"> <img src="../favicons/icon_exclude2.png" alt=""></li> */