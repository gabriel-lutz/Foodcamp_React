import React from "react"
export default function Iten(props){
    const [contador, setContador] = React.useState(0)

    function selecionar(){
        setContador(contador+1)
        props.funcaoSet(props.selecionado + parseFloat(props.valor))

        //sempre que houver adição set valorTotal(criado no APP)+props.valor 

        //sempre que houver subtração set valorTotal(criado no APP)-props.valor
    }

    return(
        <li class={(contador>0)? "item borda":"item"} onClick={() => {if(contador===0){selecionar()}}}>
            <img src={props.img} alt={props.nomePrato}/>
            <div class="informacoes">
                <p class="nome-prato">{props.nomePrato}</p>
                <p class="descricao">{props.descricao1}</p>
                <p class="descricao">{props.descricao2}</p>
                <div class="valor-box">
                    <p>R$</p><p class="valor">{props.valor}</p>
                </div>
            </div>
            <div class="contador">
                <ion-icon class="subtrair" name="remove-outline" onClick={()=> {if(contador>0){setContador(contador-1)}
                                                                                props.funcaoSet(props.selecionado - parseFloat(props.valor))}}></ion-icon>
                <p>{contador}</p>
                <ion-icon class="adicionar" name="add-outline" onClick={()=> {setContador(contador+1)
                                                                                props.funcaoSet(props.selecionado + parseFloat(props.valor))}}></ion-icon>
            </div>
        </li>
    )
}