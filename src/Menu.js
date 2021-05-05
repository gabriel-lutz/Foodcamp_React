import Pratos from "./Pratos"
import Bebidas from "./Bebidas"
import Sobremesas from "./Sobremesas"
export default function Menu(){
    return (
        <div class="menu">
            <Pratos />
            <Bebidas />
            <Sobremesas />
        </div>
    )
}
