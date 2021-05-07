import React from "react"
export default function FecharPedido(props){
    let habilitar = (props.prato !==0 && props.bebida!==0 && props.sobremesa !== 0)
    const [mensagem, setMensagem] = React.useState()
    
    function listaQtdPedidos(){
        const array = props.quantidades.map((item)=>{
            let qtdAtual=0
             for(let i = 0; i<props.quantidades.length;i++){
                if(item === props.quantidades[i]){
                    qtdAtual++
                }
             }
             if(qtdAtual===1){
                 return `${item}`
             }else{
                return `${item} (${qtdAtual}x)`
             }
        })
        const arrayFiltrada=filtraRepetidos(array)
        montarMsg(arrayFiltrada)  
    }

    function montarMsg(array){
        const sobremesas=[]
        const pratos=[]
        const bebidas=[]
        
        array.forEach((i)=>{
            if(i.includes("Single") || i.includes("Double") || i.includes("Triple")|| i.includes("MONSTER")){
                pratos.push(`\n - Prato: ${i}`)
            }else if(i.includes("500") || i.includes("20") || i.includes("40") ){
                bebidas.push(`\n - Bebida: ${i}`)
            }else if(i.includes("7Belo") || i.includes("KitKat")){
                sobremesas.push(`\n - Sobremesa: ${i}`)
            }
        })
        let total= (props.prato + props.bebida + props.sobremesa)
        total = total.toFixed(2)
        const mensagem = encodeURIComponent(`Olá, gostaria de fazer o pedido: ${[...pratos]} ${[...bebidas]} ${[...sobremesas]} \n Total: R$ ${total} `)
        setMensagem(mensagem)
        }
       
    function filtraRepetidos(array){
        const filtrados=[]
        const resultado = array.filter((item)=>{
            if(filtrados.length===0){
                filtrados.push(item); 
                return true
            }
            if(filtrados.find((encontrar)=>{if(item===encontrar){return true}}) === undefined){
                filtrados.push(item)
                return true;
            }
            return false;
                  
        })
        return resultado
    }

    if(habilitar){
        return(
            <div className="rodape">
                <a href={`https://wa.me/?text=${mensagem}`}>
                <div className="msg ativar" onClick={listaQtdPedidos}>
                    <p>Fechar Pedido</p>
                </div>
                </a>
            </div>
        )
    } else{
        return(
                <div className="rodape">
                    <div className="msg">
                        <p>Selecione os 3 itens para fechar o pedido</p>
                    </div>
                </div>
            )
    }
}