export default function FecharPedido(props){
    let habilitar = (props.prato !==0 && props.bebida!==0 && props.sobremesa !== 0)
    return(
        <div class="rodape">
            <div class={habilitar?"msg ativar": "msg"} onclick="confirmar()">
                <p>Selecione os 3 itens para fechar o pedido</p>
                {props.prato + props.bebida + props.sobremesa}
            </div>
        </div>
    )
}