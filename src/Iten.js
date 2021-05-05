import React from "react"
export default function Iten(props){

    function selecionar(id){
        console.log(document.querySelector(`.${props.categoria} .borda`) !== null)
        if(document.querySelector(`.${props.categoria} .borda`) !== null){
            const deselecionar = document.querySelector(`.${props.categoria} .borda`)
            deselecionar.classList.remove("borda")
        }
        const seleciona = document.querySelector(`.${props.categoria} #${id}`)
        seleciona.classList.add("borda")
    }

    return(
        <li class="item" id={props.id} onClick={() => selecionar(props.id)}>
            <img src={props.img} alt={props.nomePrato}/>
            <div class="informacoes">
                <p class="nome-prato">{props.nomePrato}</p>
                <p class="descricao">{props.descricao1}</p>
                <p class="descricao">{props.descricao2}</p>
                <div class="valor-box">
                    <p>R$</p><p class="valor">{props.valor}</p>
                </div>
            </div>  
            <ion-icon name="checkmark-circle"></ion-icon>
        </li>
    )
}