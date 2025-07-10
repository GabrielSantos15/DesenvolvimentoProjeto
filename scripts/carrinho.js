const containerCarrinho = document.querySelector("#carrinhoContainer");

function mostrarCarrinho(container,lista) {
  container.innerHTML = `
        <img class="logoCard" src="../images/logo.png" alt="Logo">
     `;
  lista.map((e,i) => {
    container.innerHTML += `
                 <article class="card">
                <h3>${e.titulo}</h3>
                <figure>
                    <img style="filter: hue-rotate(${e.hueRotate}deg);" src="../images/produtos/${e.img}" alt="">
                </figure>
                <p>${e.texto}</p>
                <button onclick="remover(${i})">Remover</button>
                <h4 class="preco">R$ ${e.valor}</h4>
            </article>
            `;
  });
}

if (containerCarrinho) {
  const carrinho = JSON.parse(localStorage.getItem("carrinho"));
  if(carrinho)mostrarCarrinho(containerCarrinho, carrinho);
}

function remover(i){
  try {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    carrinho.splice(i, 1);
    // Atualiza o carrinho
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    alert("Item removido com sucesso");

    // Atualiza a exibição da página (se houver um container)
      mostrarCarrinho(containerCarrinho, carrinho);
    }
  catch {
    alert("Parece que algo deu errado, tente novamente");
  }
}
