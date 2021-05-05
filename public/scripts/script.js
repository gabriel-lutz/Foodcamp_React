let comida = 0
let nomeComida;
let bebida = 0
let nomeBebida;
let sobremesa = 0
let nomeSobremesa
let total = comida + bebida + sobremesa

function selecionar(categoria, item){
    const deselecionar = document.querySelector(".categoria:nth-child("+ categoria +") .borda")
    if (deselecionar !== null){
        deselecionar.classList.remove("borda")
    }
    const selecionado = document.querySelector(".categoria:nth-child("+ categoria +") .item:nth-child("+ item +") ")
    selecionado.classList.add("borda")
    const deselecionarIcone = document.querySelector(".categoria:nth-child("+ categoria +") .aparecer")
    if (deselecionarIcone !== null){
        deselecionarIcone.classList.remove("aparecer")
    }
    const selecionadoIcone = document.querySelector(".categoria:nth-child("+ categoria +") .item:nth-child("+ item +") ion-icon ")
    selecionadoIcone.classList.add("aparecer")
    if(categoria === 1){
        nomeComida = document.querySelector(".categoria:nth-child("+ categoria +") .item:nth-child("+ item +") .nome-prato ")
        const valorComida = document.querySelector(".categoria:nth-child("+ categoria +") .item:nth-child("+ item +") .valor ")
        comida = Number(valorComida.innerHTML);
        const substituirComida = document.querySelector(".comida-final")
        substituirComida.innerHTML = (nomeComida.innerHTML) 
        const substituirValorComida = document.querySelector(".valor-comida-final")
        substituirValorComida.innerHTML = ("R$" + valorComida.innerHTML) 
    }else if(categoria === 2){
        nomeBebida = document.querySelector(".categoria:nth-child("+ categoria +") .item:nth-child("+ item +") .nome-prato ")
        const valorBebida = document.querySelector(".categoria:nth-child("+ categoria +") .item:nth-child("+ item +") .valor ")
        bebida = Number(valorBebida.innerHTML);
        const substituirBebida = document.querySelector(".bebida-final")
        substituirBebida.innerHTML = (nomeBebida.innerHTML) 
        const substituirValorBebida = document.querySelector(".valor-bebida-final")
        substituirValorBebida.innerHTML = ("R$" + valorBebida.innerHTML) 
    }else if(categoria === 3){
        nomeSobremesa = document.querySelector(".categoria:nth-child("+ categoria +") .item:nth-child("+ item +") .nome-prato ")
        const valorSobremesa = document.querySelector(".categoria:nth-child("+ categoria +") .item:nth-child("+ item +") .valor ")
        sobremesa = Number(valorSobremesa.innerHTML);
        const substituirSobremesa = document.querySelector(".sobremesa-final")
        substituirSobremesa.innerHTML = (nomeSobremesa.innerHTML) 
        const substituirValorSobremesa = document.querySelector(".valor-sobremesa-final")
        substituirValorSobremesa.innerHTML = ("R$" + valorSobremesa.innerHTML) 
    }
    total = comida + bebida + sobremesa;
    if (comida > 0 && bebida > 0 && sobremesa > 0){
        const ativarBotao = document.querySelector(".msg")
        ativarBotao.classList.add("ativar")
        ativarBotao.innerHTML = ("Fechar pedido")
        const substituirTotal = document.querySelector(".total-final")
        substituirTotal.innerHTML = ("<strong> R$" + total + "</strong>")
    }
}

function confirmar(){
    if (comida > 0 && bebida > 0 && sobremesa > 0){
        const ativarBotao = document.querySelector(".confirmar-background")
        ativarBotao.classList.add("aparecer")
        let nome = prompt("Qual o seu nome?")
        let endereco = prompt("Qual será o endereço da entrega?")
        const mensagemWhats = encodeURIComponent("Olá, gostaria de fazer o pedido: \n - Prato: " + nomeComida.innerHTML + "\n - Bebida: " + nomeBebida.innerHTML + "\n - Sobremesa: " + nomeSobremesa.innerHTML +"\n Total: R$ "+ total+ "\n \n Nome:" + nome + "\n Endereco:" + endereco)
        const enviarMensagem = document.querySelector(".confirmar")
        enviarMensagem.innerHTML = ("<a href='https://wa.me/?text="+ mensagemWhats +"' target='_blank'><p>Tudo certo, pode pedir!</p></a>")
    }
}

function cancelar(){
    const ativarBotao = document.querySelector(".confirmar-background")
        ativarBotao.classList.remove("aparecer")
}


