import Pratos from "./Pratos"
import Bebidas from "./Bebidas"
import Sobremesas from "./Sobremesas"
export default function Menu(props){
    return (
        <div className="menu">
            <Pratos funcaoSetPrato={props.funcaoSetPrato} pratoSelecionado={props.pratoSelecionado} 
                    quantidades={props.quantidades} setQuantidades={props.setQuantidades}/>

            <Bebidas funcaoSetBebida={props.funcaoSetBebida} bebidaSelecionado={props.bebidaSelecionado} 
                    quantidades={props.quantidades} setQuantidades={props.setQuantidades}/>
                    
            <Sobremesas funcaoSetSobremesa={props.funcaoSetSobremesa} sobremesaSelecionado={props.sobremesaSelecionado} 
                        quantidades={props.quantidades} setQuantidades={props.setQuantidades} />
        </div>
    )
}