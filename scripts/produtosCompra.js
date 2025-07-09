const containerProdutos = document.querySelector("#produtosContainer");

function inserirProdutos(container) {
  container.innerHTML = `
        <img class="logoCard" src="../images/logo.png" alt="Logo">
     `;
  produtosList.map((e) => {
    container.innerHTML += `
                 <article class="card">
                <h3>${e.titulo}</h3>
                <figure>
                    <img style="filter: hue-rotate(${e.hueRotate}deg);" src="../images/produtos/${e.img}" alt="">
                </figure>
                <p>${e.texto}</p>
                <button>Comprar</button>
                <h4 class="preco">R$ ${e.valor}</h4>
            </article>
            `;
  });
}

inserirProdutos(containerProdutos);
