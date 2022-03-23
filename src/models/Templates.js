export class Template {
  static async createTemplate(array, showCase) {
    showCase.innerHTML = "";
    array.forEach((item) => {
      const { categoria, descricao, id, imagem, nome, preco } = item;
      const liProducts = document.createElement("li");
      liProducts.setAttribute("id", id);
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
      
      `;
      showCase.appendChild(liProducts);
    });
  }

  static async cartTemplate(array, showCase) {
    showCase.innerHTML = "";
    array.forEach((item) => {
      const { imagem, nome, preco, categoria } = item;
      const liProducts = document.createElement("li");
      liProducts.innerHTML = `
      <section class="picture-and-name">
            <img
              src="${imagem}"
              alt="img-teste"
              class="img-card"
            />

            <h2 class="title-product-card">${nome}</h2>

            <img
              src="./src/favicons/trash.png"
              alt="img-trash"
              class="img-trash"
            />
          </section>

          <section class="filter-and-price">
            <span class="filter">${categoria}</span>
            <p class="price">R$ ${preco}</p>
          </section>

          <section class="amount-products-in-card">
            <p class="less">-</p>
            <p class="amount">1</p>
            <p class="more">+</p>
          </section>

          <div class="border"></div>
      `;
      showCase.appendChild(liProducts);
    });
  }
}
{
  /* <li>
          <section class="picture-and-name">
            <img
              src="./src/favicons/img-teste.png"
              alt="img-teste"
              class="img-card"
            />

            <h2 class="title-product-card">Panqueca</h2>

            <img
              src="./src/favicons/trash.png"
              alt="img-trash"
              class="img-trash"
            />
          </section>

          <section class="filter-and-price">
            <span class="filter">Padaria</span>
            <p class="price">R$ 20,00</p>
          </section>

          <section class="amount-products-in-card">
            <p class="less">-</p>
            <p class="amount">1</p>
            <p class="more">+</p>
          </section>

          <div class="border"></div>
        </li> --> */
}
