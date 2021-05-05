import ReactDOM from "react-dom"
import Topo from "./Topo"
import FecharPedido from "./FecharPedido"
import Menu from "./Menu"
import ConfirmarPedido from "./ConfirmarPedido"

function App(){
    return(
        <div>
            <Topo />
            <Menu />
            <ConfirmarPedido />
            <FecharPedido />
        </div>
    )
}


ReactDOM.render(<App />, document.querySelector(".root"))