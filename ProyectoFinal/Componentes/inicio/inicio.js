import './inicio.css'
import renderFav from '../renderFav/renderFav'

const inicio = () => { //funcion para pinta lo nocesario al arranque de la app, y llama a renderFav() si es que hubiese algun favorito ya guardado
    document.querySelector("body").innerHTML = `
        <header id = "header">
            <h1 id = "title">AppTime</h1>
            <input type = "text" placeholder = "Buscar una Ciudad" id = "input"></input>
            <button class = "findBtn">Buscar</button>
        </header>
    `

renderFav()

}

export default inicio