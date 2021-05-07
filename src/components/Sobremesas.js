import Iten from "./Iten"
export default function Sobremesas(props){
    const itens = [{img: "imagens/7belo.png", nomePrato: "Bala 7Belo", 
                    descricao1: "1 unidade", descricao2: "", valor: "0.50"
                },{
                    img: "imagens/kitkat.jpg", nomePrato: "KitKat", 
                    descricao1: "1 unidade", descricao2: "", valor: "3.00"
                }]
    
    return(
        <div className="categoria sobremesas" id="sobremesa">
            <h1>Por fim, sua sobremesa</h1>
            <ul className="menu-categoria">
                {itens.map((i,j) => <Iten key={j} 
                                          img={i.img} 
                                          valor={i.valor}
                                          nomePrato={i.nomePrato} 
                                          descricao1={i.descricao1} 
                                          descricao2={i.descricao2} 
                                          quantidades={props.quantidades} 
                                          funcaoSet={props.funcaoSetSobremesa} 
                                          setQuantidades={props.setQuantidades}
                                          selecionado={props.sobremesaSelecionado} 
                                    />
                )}
            </ul>
        </div>
    )
}