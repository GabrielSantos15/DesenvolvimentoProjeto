
const containerProdutos = document.querySelector("#produtosContainer");

function inserirProdutos(container,lista) {
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
                <button onclick="adicionarCarrinho(${i})">Adicionar</button>
                <h4 class="preco">R$ ${e.valor.toFixed(2)}</h4>
            </article>
            `;
  });
}

if (containerProdutos) {
  inserirProdutos(containerProdutos, produtosList);
}
if (containerCarrinho) {
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  inserirProdutos(containerCarrinho, carrinho);
}

function adicionarCarrinho(i){
  try{
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    carrinho.push(produtosList[i]);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    alert("Adicionado") 
  }catch{
    alert("Parece que algo deu errado, tente novamente") 
  }
}

