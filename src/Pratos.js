import Iten from "./Iten"
export default function Pratos(props){
    const itens = [{img: "imagens/frango.png", nomePrato: "Frango", 
                    descricao1: "50% fraaaaango", descricao2: "50% galinha", valor: "15.00"},
                    {img: "imagens/frango.png", nomePrato: "Double Frango", 
                    descricao1: "100% fraaaaango", descricao2: "100% galinha", valor: "30.00"},
                    {img: "imagens/frango.png", nomePrato: "Triple Frango", 
                    descricao1: "150% fraaaaango", descricao2: "150% galinha", valor: "45.00"},
                    {img: "imagens/frango.png", nomePrato: "MONSTER Frango", 
                    descricao1: "200% fraaaaango", descricao2: "200% galinha", valor: "60.00"}
                ]
    
    return(
        <div class="categoria pratos">
            <h1>Primeiro, seu prato</h1>
            <ul class="menu-categoria">
                {itens.map(i => <Iten img={i.img} nomePrato={i.nomePrato}
                                      descricao1={i.descricao1} descricao2={i.descricao2}
                                      valor={i.valor} 
                                      funcaoSet={props.funcaoSetPrato} selecionado={props.pratoSelecionado} />)}
            </ul>
        </div>
    )
}