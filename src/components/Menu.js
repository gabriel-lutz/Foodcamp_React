import Pratos from "./Pratos"
import Bebidas from "./Bebidas"
import Sobremesas from "./Sobremesas"
export default function Menu(props){
    return (
        <div className="menu">
            <Pratos quantidades={props.quantidades} 
                    funcaoSetPrato={props.funcaoSetPrato} 
                    setQuantidades={props.setQuantidades}
                    pratoSelecionado={props.pratoSelecionado}
            />
            <Bebidas quantidades={props.quantidades} 
                     setQuantidades={props.setQuantidades}
                     funcaoSetBebida={props.funcaoSetBebida} 
                     bebidaSelecionado={props.bebidaSelecionado} 
            />
            <Sobremesas quantidades={props.quantidades} 
                        setQuantidades={props.setQuantidades}
                        funcaoSetSobremesa={props.funcaoSetSobremesa} 
                        sobremesaSelecionado={props.sobremesaSelecionado} 
            />
        </div>
    )
}