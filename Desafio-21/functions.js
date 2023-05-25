const listaProduto = document.querySelectorAll(".produto")
const listaBotao = document.querySelectorAll(".botaoQTD")
const valorFinal = document.querySelector("#valor__final")
const arrayProdutos = []
const botaoFinal = document.querySelector(".rodape__finalizar")
const botaoCarregando = document.querySelector(".carregando")

listaProduto.forEach(produto =>
    arrayProdutos.push(produto)
)

listaBotao.forEach(botao => {
    botao.addEventListener("click", () => {
        mudaQTD(botao.value, botao.parentNode)
        calculaValor()
    })
})

botaoFinal.addEventListener("click", () => {
    botaoFinal.classList.add("esconde")
    botaoCarregando.classList.remove("esconde")
    setTimeout(() => {
        botaoCarregando.classList.add("esconde")
        botaoFinal.classList.remove("esconde")
    }, 600)
})


function mudaQTD(operacao, elemento) {
    const quantidade = elemento.querySelector('.produto__quantidade')

    if (quantidade.textContent === '0' && operacao === '-1') {
        return
    }

    return quantidade.textContent = Number(quantidade.textContent) + Number(operacao)
}



function calculaValor() {
    let valores = arrayProdutos.map(produto => {
        let valor = Number(produto.querySelector(".produto__valor").textContent.replace("R$", ""))
        let qtd = Number(produto.querySelector('.produto__quantidade').textContent)
        return valor * qtd
    })

    let soma = 0
    for (let i = 0; i < valores.length; i++) {
        soma = soma + valores[i]
    }
    return valorFinal.textContent = soma.toFixed(2)
}

