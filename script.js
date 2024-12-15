const produtosAdd = document.querySelector(".itensAdd")
const buttonSubmit = document.querySelector(".submit")

// pega o valor do que foi digitado na caixa de texto
produtosAdd.addEventListener("keydown", (e) => {})

buttonSubmit.addEventListener("click", (e) => {
  // verifica se algo foi digitado
  const hasCharactersReges = /\D+/g

  var produtos = produtosAdd.value

  //precisa verificar se algo foi digitado
  if (produtos.length === 0 || !produtos.trim()) {
    alert("adicione algo")
  } else {
    console.log(`Adicionou: ${produtos}`)
  }
})
