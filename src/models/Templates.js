export class Template {
  static async createTemplate(array, showCase) {
    showCase.innerHTML = ""
    array.forEach((item) => {
      const { categoria, descricao, id, imagem, nome, preco } = item
      const liProducts = document.createElement('li')
      liProducts.setAttribute("id", id)
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

  static async cartTemplate(array, showCase) {
    showCase.innerHTML = ""
    array.forEach((item) => {
      const { imagem, nome, preco, categoria } = item
      const liProducts = document.createElement('li')
      liProducts.innerHTML = `
      <img src="${imagem}" alt="produto no carrinho">
      <p>${nome}</p>
      <span>${categoria}</span>
      <p>${preco.toFixed(2)}</p>
      `
      showCase.appendChild(liProducts)
    })

  }

}