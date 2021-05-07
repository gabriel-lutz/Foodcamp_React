import React from "react"
export default function Iten(props){
    const [contador, setContador] = React.useState(0)

    function selecionar(){
        setContador(contador+1)
        props.funcaoSet(props.selecionado + parseFloat(props.valor))
        props.setQuantidades([...props.quantidades, props.nomePrato])
    }

    function subtrair(){
        if(contador>0){
            setContador(contador-1)
        }
        props.funcaoSet(props.selecionado - parseFloat(props.valor))
        const arraySemSelecionado = removeIten()
        props.setQuantidades([...arraySemSelecionado])
    }

    function removeIten(){
        let flag = false
        return props.quantidades.filter((i)=>{
            for(let j=0; j<props.quantidades.length;j++){
                if(flag===false && props.nomePrato === i){
                    flag=true
                    return false
                }
            }
            return true;
        })
    }

    function adicionar(){
        setContador(contador+1)
        props.funcaoSet(props.selecionado + parseFloat(props.valor))
        props.setQuantidades([...props.quantidades, props.nomePrato])
    }

    return(
        <li className={(contador>0)? "item borda":"item"} onClick={() => {if(contador===0){selecionar()}}}>
            <img src={props.img} alt={props.nomePrato}/>
            <div className="informacoes">
                <p className="nome-prato">{props.nomePrato}</p>
                <p className="descricao">{props.descricao1}</p>
                <p className="descricao">{props.descricao2}</p>
                <div className="valor-box">
                    <p>R$</p><p className="valor">{props.valor}</p>
                </div>
            </div>
            <div className="contador">
                <ion-icon className="subtrair" name="remove-outline" onClick={subtrair} ></ion-icon>
                <p>{contador}</p>
                <ion-icon className="adicionar" name="add-outline" onClick={adicionar}></ion-icon>
            </div>
        </li>
    )
}