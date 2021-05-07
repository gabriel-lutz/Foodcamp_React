import React from "react"
import Topo from "./Topo"
import Menu from "./Menu"
import FecharPedido from "./FecharPedido"

export default function App(){
    const [quantidades, setQuantidades] = React.useState([])
    const [pratoSelecionado, setPratoSelecionado] = React.useState(0)
    const [bebidaSelecionado, setBebidaSelecionado] = React.useState(0)
    const [sobremesaSelecionado, setSobremesaSelecionado] = React.useState(0)
    
    return(
        <div>
            <Topo />
            <Menu quantidades={quantidades} 
                  setQuantidades={setQuantidades}
                  pratoSelecionado={pratoSelecionado}
                  funcaoSetPrato={setPratoSelecionado}
                  bebidaSelecionado={bebidaSelecionado}
                  funcaoSetBebida={setBebidaSelecionado} 
                  sobremesaSelecionado={sobremesaSelecionado}
                  funcaoSetSobremesa={setSobremesaSelecionado}  
            />
            <FecharPedido prato={pratoSelecionado} 
                          quantidades={quantidades}
                          bebida={bebidaSelecionado} 
                          sobremesa={sobremesaSelecionado} 
            />
        </div>
    )
}