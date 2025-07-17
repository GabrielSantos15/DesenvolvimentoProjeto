const containerCarrinho = document.querySelector("#carrinhoContainer");

function mostrarCarrinho(container, lista) {
  let totalValue = 0;

  container.innerHTML = `
        <article class="logoCard">
            <img src="../images/logo.png" alt="Logo">
            <a href="produtos.html">Ver produtos</a>
        </article>
     `;

  if (!lista || lista.length === 0) {
    container.innerHTML += `<h3>Você não adicionou nada</h3><br>`;
    document.querySelector("#infosContainer").style.display = "none";
    document.querySelector("#btnLimpar").style.display = "none";
  } else {
    lista.map((e, i) => {
      totalValue += e.valor;
      container.innerHTML += `
                 <article class="card">
                <h3>${e.titulo}</h3>
                <figure>
                    <img style="filter: hue-rotate(${
                      e.hueRotate
                    }deg);" src="../images/produtos/${e.img}" alt="">
                </figure>
                <p>${e.texto}</p>
                <button onclick="remover(${i})">Remover</button>
                <h4 class="preco">R$ ${e.valor.toFixed(2)}</h4>
            </article>
            `;
    });
    document.querySelector("#totalValue").innerHTML = totalValue.toFixed(2);
  }
}

if (containerCarrinho) {
  const carrinho = JSON.parse(localStorage.getItem("carrinho"));
  mostrarCarrinho(containerCarrinho, carrinho);
}

function limpar() {
  localStorage.removeItem("carrinho");
  mostrarCarrinho(containerCarrinho, []);
}

function remover(i) {
  try {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    carrinho.splice(i, 1);
    // Atualiza o carrinho
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    alert("Item removido com sucesso");

    // Atualiza a exibição da página (se houver um container)
    mostrarCarrinho(containerCarrinho, carrinho);
  } catch {
    alert("Parece que algo deu errado, tente novamente");
  }
}
