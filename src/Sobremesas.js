import Iten from "./Iten"
export default function Sobremesas(props){
    const itens = [{img: "imagens/7belo.png", nomePrato: "Bala 7Belo", 
                    descricao1: "1 unidade", descricao2: "", valor: "0.50"},
                    {img: "imagens/kitkat.jpg", nomePrato: "KitKat", 
                    descricao1: "1 unidade", descricao2: "", valor: "3.00"}]
    
    return(
        <div class="categoria sobremesas" id="sobremesa">
            <h1>Por fim, sua sobremesa</h1>
            <ul class="menu-categoria">
                {itens.map(i => <Iten img={i.img} nomePrato={i.nomePrato} 
                                      descricao1={i.descricao1} descricao2={i.descricao2} 
                                      valor={i.valor}
                                      funcaoSet={props.funcaoSetSobremesa} selecionado={props.sobremesaSelecionado}  />)}
            </ul>
        </div>
    )
}