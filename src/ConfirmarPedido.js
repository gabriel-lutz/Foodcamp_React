export default function ConfirmarPedido(){
    return(
        <div class="confirmar-background">
        <div class="confirmar-box">
            <p><strong>Confirme seu pedido</strong></p>
            <div class="comida">
                <p class="comida-final"></p>
                <p class="valor-comida-final"></p>
            </div>
            <div class="bebida">
                <p class="bebida-final"></p>
                <p class="valor-bebida-final"></p>
            </div>
            <div class="sobremesa">
                <p class="sobremesa-final"></p>
                <p class="valor-sobremesa-final"></p>
            </div>
            <div class="total">
                <p><strong>TOTAL</strong></p>
                <p class="total-final"><strong></strong></p>
            </div>
            <div class="confirmar">
                <p>Tudo certo, pode pedir!</p>
            </div>
            <p onclick="cancelar()">Cancelar</p>
        </div>
    </div>
    )
}