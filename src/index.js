//Criando uma aplicação ReactJS com um único componente
import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
/*1.5 primeira foto armazenada na pasta images, subpasta de src. 
Acessada usando a instrução import.*/
import fotoMedico1 from "./images/jose-da-silva.jpg"

const App = () => {
    //1.1. definindo os estilos do elemento 
    //usando uma função que devolve um objeto JSON
    const estilosContainer = () => {
        return {
            margin: 'auto', width: 768, backgroundColor: 'whitesmoke', 
            padding: 12, border: '3px solid lightgray', 
            borderRadius: 8, textAlign: 'center'
        }
    }
    //1.4. definindo os nomes dos médicos em um objeto JSON
    const nomesDosMedicos = {
        nomeMedico1: 'José da Silva',
        nomeMedico2: 'Maria da Silva',
        nomeMedico3: 'Jaqueline Mendes'
    }
    return(
        <div style={estilosContainer()}>
            <h3>Profissionais de saúde</h3>
            {/*1.2. definindo os estilos do elemento usando CSS In-line*/}
            <div style={{
                margin: 8, border: '1px solid gainsboro', borderRadius: 8, 
                padding: 8, display: 'flex', flexDirection: 'row', 
                justifyContent: 'space-around'
            }}>
                {/*1.3. definindo os estilos do elemento usando uma classe 
                CSS definida no arquivo styles.css da pasta src*/}
                <div className="medico">
                    <img src={fotoMedico1}/>
                    <p>José da Silva</p>
                </div>
                <div className="medico">
                    {/*1.6. segunda foto armazenada na pasta public, 
                    que já existe no projeto. Acessada usando a 
                    propriedade env do objeto global process do 
                    NodeJS: process.env.nomeDaFoto.jpg*/}
                    <img src={process.env.PUBLIC_URL+'maria-da-silva.jpg'}/>
                    <p>Maria da Silva</p>
                </div>
                <div className="medico">
                    {/*1.7 Acessando a terceira foto usando um link https comum*/}
                    <img src='https://images.unsplash.com/photo-1542884748-2b87b36c6b90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
                    <p>Jaqueline Mendes</p>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)
