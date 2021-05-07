import React from "react"
import ReactDOM from "react-dom"
import Topo from "./Topo"
import FecharPedido from "./FecharPedido"
import Menu from "./Menu"
//import ConfirmarPedido from "./ConfirmarPedido"

function App(){
    
    const [pratoSelecionado, setPratoSelecionado] = React.useState(0)
    const [bebidaSelecionado, setBebidaSelecionado] = React.useState(0)
    const [sobremesaSelecionado, setSobremesaSelecionado] = React.useState(0)
    const [quantidades, setQuantidades] = React.useState([])




    return(
        <div>
            <Topo />
            <Menu funcaoSetPrato={setPratoSelecionado} pratoSelecionado={pratoSelecionado}
                  funcaoSetSobremesa={setSobremesaSelecionado} sobremesaSelecionado={sobremesaSelecionado}
                  funcaoSetBebida={setBebidaSelecionado} bebidaSelecionado={bebidaSelecionado}  
                  quantidades={quantidades} setQuantidades={setQuantidades} />
            {/*<ConfirmarPedido />*/}
            <FecharPedido prato={pratoSelecionado} sobremesa={sobremesaSelecionado} 
            bebida={bebidaSelecionado} quantidades={quantidades} />
        </div>
    )
}


ReactDOM.render(<App />, document.querySelector(".root"))