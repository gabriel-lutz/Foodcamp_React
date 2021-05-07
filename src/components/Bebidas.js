import Iten from "./Iten"
export default function Bebidas(props){
    const itens = [{img: "imagens/garrafinha.jpg", nomePrato: "Água 500ml", 
                    descricao1: "Gelada, sem gás", descricao2: "", valor: "5.00"
                },{
                    img: "imagens/galao.jpg", nomePrato: "Água 20L", 
                    descricao1: "Gelada, sem gás", descricao2: "", valor: "15.00"
                },{
                    img: "imagens/carregamento.jpg", nomePrato: "Água 40L", 
                    descricao1: "Água para toda semana", descricao2: "", valor: "30.00"
                }]
    
    return(
        <div className="categoria bebidas" id="bebida">
            <h1>Agora, sua bebida</h1>
            <ul className="menu-categoria">
                {itens.map((i,j) => <Iten   key={j} 
                                            img={i.img} 
                                            valor={i.valor}
                                            nomePrato={i.nomePrato} 
                                            descricao1={i.descricao1} 
                                            descricao2={i.descricao2} 
                                            quantidades={props.quantidades} 
                                            funcaoSet={props.funcaoSetBebida} 
                                            selecionado={props.bebidaSelecionado}
                                            setQuantidades={props.setQuantidades}/>)
                }
            </ul>
        </div>
    )
}