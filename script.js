// Função que será chamada quando clicar no botão
// Função: um bloco de código reutilizável que executa uma tarefa específica
function calcular() {
    //===========================================
    // 1. PEGAR OS ELEMENTOS DA TELA
    //===========================================
    
    // Aqui pegamos cada checkbox pelo Id
    let hamburguer = document.getElementById("hamburguer")
    let batata = document.getElementById("batata")
    let nuggets = document.getElementById("nuggets")
    let cocacola = document.getElementById("cocacola")
    let sorvete = document.getElementById("sorvete")
    let pizza = document.getElementById("pizza")
    //===========================================
    // 2. VARIÁVEIS INICIAIS
    //===========================================
    // Total começa com 0
    let total = 0
    // String para guardar os itens escolhidos
    let itens = ""
    //===========================================
    // 3. VERIFICAR CADA PRODUTO
    //===========================================
    // Se o checkbox estiver marcado (true)
    if (hamburguer.checked) {
        total = total + 60 // soma o valor do hambúrguer
        itens = itens + "Hambúrguer 🍔 <br>" // adiciona ao texto dos produtos
    }
    if (batata.checked) {
        total = total + 25 
        itens = itens + "Batata 🍟 <br>" 
    }
        if (nuggets.checked) {
        total = total + 30 
        itens = itens + "Nuggets 🐤 <br>" 
    }
        if (cocacola.checked) {
        total = total + 19
        itens = itens + "Coca-Cola 🥤 <br>"
    }
        if (sorvete.checked) {
        total = total + 40 
        itens = itens + "Sorvete 🍨 <br>" 
    }
        if (pizza.checked) {
        total = total + 70 
        itens = itens + "Pizza 🍕 <br>"
    }
    //===========================================
    // 4. PEGAR DIV DO RESULTADO
    //=========================================== 
    let resultado = document.getElementById("resultado")

    //===========================================
    // 5. VALIDAÇÃO
    //=========================================== 
    // Se não escolheu nada
    if (total === 0) {
        resultado.innerHTML = "Escolha pelo menos um item!"
        return // para função aqui
    }

    //===========================================
    // 6. DESCONTO
    //=========================================== 
    let subtotal = total
    let desconto = 0
    // Se o valor for maior o igual a 50, aplicamos um desconto de 10%
    if(subtotal >= 50){
        desconto = subtotal * 0.10 // 10%
    }

    //===========================================
    // 7. ENTREGA
    //===========================================
    let entrega = 5
    // se pasar de 60 -> entrega grátis 😎
    if (subtotal - desconto >= 60){
        entrega = 0
    }

    //===========================================
    // 8. TOTAL FINAL
    //===========================================
    let totalFinal = subtotal - desconto + entrega

    //===========================================
    // 9. MOSTRAR O RESULTADO
    //===========================================

    resultado.innerHTML =
    "<strong>Itens:</strong><br>"+
    itens +
    "<br> Subtotal: R$ " + subtotal.toFixed(2)+
    "<br> Desconto: R$ " + desconto.toFixed(2)+
    "<br> Entrega: R$ " + entrega.toFixed(2)+
    "<br> <strong> Total: R$ " + totalFinal.toFixed(2) + "</strong>"


}

