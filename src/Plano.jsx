import"./Plano.css";
function Plano( {imagem,título,preco,usuarios,projetos, } ){
    return(
        <div className="plano-container">
            <img src={imagem} alt="" />
            <h1 className="plano-título">{título}</h1>
            <p className="plano preço"> {preco}</p>
            <h2 className="plano-info"> {usuarios}</h2>
            <h3 className="plano info">{projetos}</h3>
           
        </div>
    );
}

export default Plano;