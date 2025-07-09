const cartao = document.querySelector("#cartao");
const inputNumero = document.getElementById("input-numero");
const numeroCartao = document.getElementById("numero");

function atualizarTexto(idInput, idElemento) {
  const input = document.getElementById(idInput);
  const elemento = document.getElementById(idElemento);
  input.addEventListener("input", () => {
    if (cartao.classList.contains("turn")) cartao.classList.remove("turn");
    elemento.textContent = input.value || "--";
  });
}

// Nome e validade
atualizarTexto("input-nome", "nome");
atualizarTexto("input-validade", "validade");

// Número com máscara
inputNumero.addEventListener("input", () => {
  if (cartao.classList.contains("turn")) cartao.classList.remove("turn");

  let valor = inputNumero.value.replace(/\D/g, "").slice(0, 20); // remover letras
  inputNumero.value = valor.replace(/(.{4})/g, "$1 ").trim(); // adiciona espaços

  // Máscara: mostra 4 primeiros e  4 últimos
  let valorMascara = valor.replace(/(\d{4})(\d+)(\d{4})$/, (_, ini, meio, fim) => {
    let oculto = "•".repeat(meio.length).replace(/(.{4})/g, "$1 ");
    return `${ini} ${oculto}${fim}`;
  });

  numeroCartao.textContent = valorMascara || "--";
});

document.getElementById("input-cvv").addEventListener("input", (e) => {
  if (!cartao.classList.contains("turn")) cartao.classList.add("turn");
  document.querySelector("#cmv").textContent = e.target.value || "--";
});

document.getElementById("input-agencia").addEventListener("input", (e) => {
  if (!cartao.classList.contains("turn")) cartao.classList.add("turn");
  document.querySelector("#agencia").textContent = e.target.value || "--";
});

document.getElementById("input-conta").addEventListener("input", (e) => {
  if (!cartao.classList.contains("turn")) cartao.classList.add("turn");
  document.querySelector("#conta").textContent = e.target.value || "--";
});

// Bandeira do cartão (imagem)
const radios = document.querySelectorAll('input[name="bandeira"]');
const bandeiraImg = document.querySelector("#front img:nth-child(2)");

radios.forEach((radio) => {
  radio.addEventListener("change", () => {
    if (cartao.classList.contains("turn")) cartao.classList.remove("turn");
    bandeiraImg.src = `../images/bandeiras/${radio.value}.png`;
    bandeiraImg.alt = `Bandeira ${radio.value}`;
  });
});
