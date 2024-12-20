const produtosAdd = document.querySelector(".itensAdd")
const buttonSubmit = document.querySelector(".submit")

// pega o valor do que foi digitado na caixa de texto
produtosAdd.addEventListener("keydown", (e) => {})

function updateList (produtos){
  let listArea = document.querySelector(".list-area")
  let itensArea = document.querySelector(".itens")
  let showItensArea = document.querySelector(".showItens")


  if (produtos > "" && noItem === "noItem" ) {
    console.log("passou")
    noItem = ""

      let postList =  `<div class="showItens"> <input type="checkbox" class="itens-checks" name="compras" />
      <label for="compras">${produtos}</label> </div>`
      listArea.innerHTML = noItem
      listArea.innerHTML += postList
    
    
  } else if (produtos > "" && noItem == "" ) {
    let postList =  `<div class="showItens"> <input type="checkbox" class="itens-checks" name="compras" />
    <label for="compras">${produtos}</label> </div>`
    listArea.innerHTML += postList

  }else {
      noItem = "noItem"
      listArea.innerHTML = noItem                  
  }
}


buttonSubmit.addEventListener("click", (e) => {
  // verifica se algo foi digitado

  var produtos = produtosAdd.value

  //precisa verificar se algo foi digitado
  if (produtos.length === 0 || !produtos.trim()) {
    alert("adicione algo")
  } else {
    updateList(produtos)
    console.log(`Adicionou: ${produtos}`)
  }
})


updateList()
