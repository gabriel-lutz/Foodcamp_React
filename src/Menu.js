import Pratos from "./Pratos"
import Bebidas from "./Bebidas"
import Sobremesas from "./Sobremesas"
export default function Menu(props){
    return (
        <div class="menu">
            <Pratos funcaoSetPrato={props.funcaoSetPrato} pratoSelecionado={props.pratoSelecionado}/>
            <Bebidas funcaoSetBebida={props.funcaoSetBebida} bebidaSelecionado={props.bebidaSelecionado}/>
            <Sobremesas funcaoSetSobremesa={props.funcaoSetSobremesa} sobremesaSelecionado={props.sobremesaSelecionado} />
        </div>
    )
}
