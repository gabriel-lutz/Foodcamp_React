import Iten from "./Iten"
export default function Bebidas(){
    const itens = [{img: "imagens/garrafinha.jpg", nomePrato: "Água 500ml", 
                    descricao1: "Gelada, sem gás", descricao2: "", valor: "5.00", categoria:"bebidas", id: "a"},
                    {img: "imagens/galao.jpg", nomePrato: "Água 20L", 
                    descricao1: "Gelada, sem gás", descricao2: "", valor: "15.00", categoria:"bebidas", id: "b"},
                    {img: "imagens/carregamento.jpg", nomePrato: "Água 40L", 
                    descricao1: "Água para toda semana", descricao2: "", valor: "30.00", categoria:"bebidas", id: "c"}]
    
    return(
        <div class="categoria bebidas" id="bebida">
            <h1>Agora, sua bebida</h1>
            <ul class="menu-categoria">
            {itens.map(i => <Iten img={i.img} nomePrato={i.nomePrato} descricao1={i.descricao1} descricao2={i.descricao2} valor={i.valor} categoria={i.categoria} id={i.id}  />)}
            </ul>
        </div>
    )
}