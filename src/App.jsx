import Plano from "./Plano";
import "./App.css"
function App() {
    const planos = [

        {
            foto_link: "public/big-king.webp",
            title: "Combo Big King",
            price:"Um hambúrger com duas carnes bovinas grelhadas de 57g, pão com gergelim, queijo...",
            qnt_users: "1 pessoa",
            qnt_projects:"R$ 41,90",
        },
        {
            foto_link:"public/cheddar-duplo.webp",
            title: "Combo Cheddar Duplo",
            price: "Um hambúrger com duas carnes bovinas grelhadas de 57g, pão preto com gergelim...",
            qnt_users: "1 pessoa",
            qnt_projects:"R$ 41,90",

        },
        {
            foto_link:"public/cheeseburger-duplo.webp",
            title: "Combo Cheeseburger Duplo com Bacon",
            price: "Um hambbúrger com duas carnes bovinas grelhadas de 57g, pão com gergelim, queijo...",
            qnt_users: " 1 pessoa",
            qnt_projects:"R$ 36,90",
        },
        {
            foto_link:"public/mega-stacker.webp",
            title: "Combo Mega Stacker 2.0",
            price: "Um hambúrger com duas carnes boinas grelhadas de 113g, pão com gergeim, queijo...",
            qnt_users: "1 pessoa",
            qnt_projects:"R$ 51,90",
        }
    ];


    return (
        <div>
            <img src="public/logo.svg" alt="" />
            { planos.map((plano) =>{
                return<Plano
                imagem={plano.foto_link}
                título={plano.title}
                preco={plano.price}
                usuarios={plano.qnt_users}
                projetos={plano.qnt_projects}
                 />
            
            })}
            
        </div>
    );

}
export default App;