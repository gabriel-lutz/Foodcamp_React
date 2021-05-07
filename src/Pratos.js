import Iten from "./Iten"
export default function Pratos(props){
    const itens = [{img: "imagens/frango.png", nomePrato: "Single Frango", 
                    descricao1: "50% frango", descricao2: "50% galinha", valor: "15.00"},
                    {img: "imagens/frango.png", nomePrato: "Double Frango", 
                    descricao1: "100% frango", descricao2: "100% galinha", valor: "30.00"},
                    {img: "imagens/frango.png", nomePrato: "Triple Frango", 
                    descricao1: "150% frango", descricao2: "150% galinha", valor: "45.00"},
                    {img: "imagens/frango.png", nomePrato: "MONSTER Frango", 
                    descricao1: "200% frango", descricao2: "200% galinha", valor: "60.00"}
                ]
    
    return(
        <div className="categoria pratos">
            <h1>Primeiro, seu prato</h1>
            <ul className="menu-categoria">
                {itens.map((i,j) => <Iten key={j} img={i.img} nomePrato={i.nomePrato}
                                      descricao1={i.descricao1} descricao2={i.descricao2}
                                      valor={i.valor} 
                                      funcaoSet={props.funcaoSetPrato} selecionado={props.pratoSelecionado}
                                      quantidades={props.quantidades} setQuantidades={props.setQuantidades} />)}
            </ul>
        </div>
    )
}