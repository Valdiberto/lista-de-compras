var produtosAdd = document.querySelector(".itensAdd");
var buttonSubmit = document.querySelector(".submit");
var listArea = document.querySelector(".list-area");
var itensArea = document.querySelector(".itens");
var showItensArea = document.querySelector(".showItens");
// pega o valor do que foi digitado na caixa de texto
function updateList(produtos) {
    var noItem = "";
    if (produtos > "" && noItem == "") {
        var postList = "<div class=\"showItens\"> <input type=\"checkbox\" id=\"checkbox\" name=\"checkbox\" />\n    <label for=\"checkbox\">".concat(produtos, "</label> </div>");
        listArea.innerHTML += postList;
    }
    else if (produtos > "" && noItem === "Sem Itens") {
        console.log("passou");
        noItem = "";
        var postList = "<div class=\"showItens\"> <input type=\"checkbox\" id=\"checkbox\" name=\"checkbox\" />\n      <label for=\"checkbox\">".concat(produtos, "</label> </div>");
        listArea.innerHTML = noItem;
        listArea.innerHTML += postList;
    }
    else {
        noItem = "Sem Itens";
        listArea.innerHTML = noItem;
    }
}
buttonSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    // verifica se algo foi digitado
    var produtos = produtosAdd.value;
    //precisa verificar se algo foi digitado
    if (produtos.length === 0 || !produtos.trim()) {
        alert("adicione algo");
    }
    else {
        updateList(produtos);
        console.log("Adicionou: ".concat(produtos));
    }
});
